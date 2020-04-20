import React from "react"
import ConexionEnProgreso from "./UI/ConexionEnProgreso"
import ConexionFallida from "./UI/ConexionFallida"


class ReactConexionPresentacion {
  constructor(ui) {
    this.ui = ui
  }
  mostrarEstableciendoConexion() {
    this.ui.render(<ConexionEnProgreso />)
  }
  mostrarConexionFallida(error) {
    this.ui.render(<ConexionFallida />)
  }
}

export default ReactConexionPresentacion;