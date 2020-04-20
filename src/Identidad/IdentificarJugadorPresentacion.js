import React from "react"
import FormularioIdentidad from "./UI/FormularioIdentidad"

class IdentificarJugadorPresentacion {
  constructor(ui) {
    this.ui = ui
  }
  mostrarFormularioIdentidad(callback) {
    if (this.mensajeNombreInvalido) {
      this.ui.render(<FormularioIdentidad ingresarFormulario={callback} mensajeNombreInvalido={this.mensajeNombreInvalido} />)
    } else {
      this.ui.render(<FormularioIdentidad ingresarFormulario={callback} />)
    }
  }
  informarNombreEnUso(nombre) {
    this.mensajeNombreInvalido = "El nombre esta en uso!"
  }
}

export default IdentificarJugadorPresentacion;