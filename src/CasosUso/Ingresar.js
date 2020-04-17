class Ingresar {
  constructor(servicioJugadoresOnline, servicioDeIdentidad, presentador) {
    this.servicioJugadoresOnline = servicioJugadoresOnline
    this.servicioDeIdentidad = servicioDeIdentidad
    this.presentador = presentador
  }
  iniciar() {
    this.servicioDeIdentidad.autorizarIngreso(this)
  }
  solicitarIdentidad() {
    this.presentador.mostrarFormularioIdentidad(this)
  }
  tramitarIdentidad(nombre) {
    this.servicioDeIdentidad.crearSesion(nombre, this)
  }
  async ingresoAutorizado(nombre) {
    this.usuario = {
      nombre
    }
    this.presentador.mostrarBienvenida(this.usuario)
    await this.servicioJugadoresOnline.observarAnunciados({
      actualizarUsuariosConectados: jugadoresOnline => {
        const jugadores = jugadoresOnline.filter(jugador => jugador.nombre !== nombre)
        this.presentador.actualizarUsuariosConectados(jugadores, this.usuario)
      }
    })
    this.servicioJugadoresOnline.anunciarJugador(nombre)
  }
}

export default Ingresar;