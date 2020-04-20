import React from "react"
import FormularioIdentidad from "./UI/FormularioIdentidad"

class IdentificarJugadorPresentacion {
  constructor(ui) {
    this.ui = ui
  }
  mostrarFormularioIdentidad(callback) {
    this.ui.render(<FormularioIdentidad ingresarFormulario={callback} />)
  }
}

export default IdentificarJugadorPresentacion;