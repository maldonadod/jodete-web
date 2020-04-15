import React from "react"
import Bienvenida from "./ComponentesUI/Bienvenida"
import IdentidadDelUsuario from "./ComponentesUI/IdentidadDelUsuario"

class Presentador {
  constructor(driver) {
    this.driver = driver
  }
  ingresarAUsuarioAutenticado(nombre) {
    const tree = (
      <Bienvenida
        nombre={nombre}
      />
    )
    this.driver.render(tree)
  }
  solicitarIdentidad(servicioDeIdentidad) {
    const cuandoIngresaNombre = nombre => {
      servicioDeIdentidad.crearSesion(nombre, this)
    }
    const tree = (
      <IdentidadDelUsuario
        cuandoIngresaNombre={cuandoIngresaNombre}
      />
    )
    this.driver.render(tree)
  }
}

export default Presentador;