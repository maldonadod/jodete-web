import React from "react"
import Bienvenida from "./ComponentesUI/Bienvenida"
import FormularioIdentidad from "./ComponentesUI/FormularioIdentidad"
import UsuariosConectadosCargando from "./ComponentesUI/UsuariosConectadosCargando"
import UsuariosConectados from "./ComponentesUI/UsuariosConectados"

class Presentador {
  constructor(driver) {
    this.driver = driver
  }
  actualizarUsuariosConectados(jugadores, usuario) {
    this.driver.render(
      <div>
        <Bienvenida nombre={usuario.nombre} />
        <UsuariosConectados jugadores={jugadores} />
      </div>
    )
  }
  mostrarBienvenida(usuario) {
    this.driver.render(
      <div>
        <Bienvenida nombre={usuario.nombre} />
        <UsuariosConectadosCargando />
      </div>
    )
  }
  mostrarFormularioIdentidad(ingresar, mensaje) {
    function tramitarIdentidad(nombre) {
      ingresar.tramitarIdentidad(nombre)
    }
    this.driver.render(
      <FormularioIdentidad
        mensaje={mensaje}
        cuandoIngresaNombre={tramitarIdentidad}
      />
    )
  }
}

export default Presentador;