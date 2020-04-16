import React from "react"
import Bienvenida from "./ComponentesUI/Bienvenida"
import IdentidadDelUsuario from "./ComponentesUI/IdentidadDelUsuario"
import UsuariosConectadosCargando from "./ComponentesUI/UsuariosConectadosCargando"
import UsuariosConectados from "./ComponentesUI/UsuariosConectados"

class Presentador {
  constructor(driver, servicioJugadoresConectados) {
    this.driver = driver
    this.servicioJugadoresConectados = servicioJugadoresConectados
  }
  actualizarUsuariosConectados(jugadores) {
    const tree = (
      <div>
        <Bienvenida nombre={this.usuario.nombre} />
        <UsuariosConectados jugadores={jugadores.filter(jugador => jugador.nombre !== this.usuario.nombre)} />
      </div>
    )
    this.driver.render(tree)
  }
  async ingresarAUsuarioAutenticado(nombre) {

    this.usuario = {
      nombre
    }

    const tree = (
      <div>
        <Bienvenida nombre={nombre} />
        <UsuariosConectadosCargando />
      </div>
    )
    this.driver.render(tree)

    this.servicioJugadoresConectados.observarAnunciados(this)
    this.servicioJugadoresConectados.anunciarJugador(nombre)
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