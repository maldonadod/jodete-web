class Ingresar {
  constructor(servicioJugadoresOnline, servicioDeIdentidad, presentador) {
    this.servicioJugadoresOnline = servicioJugadoresOnline
    this.servicioDeIdentidad = servicioDeIdentidad
    this.presentador = presentador

    this.jugadoresOnline = []
  }
  iniciar() {
    this.servicioDeIdentidad.autorizarIngreso(this)
  }
  async solicitarIdentidad() {
    const actualizarUsuariosConectados = jugadoresOnline => {
      this.jugadoresOnline = jugadoresOnline
      
      if (this.usuario) {
        const jugadores = this.jugadoresOnline.filter(jugador => jugador.nombre !== this.usuario.nombre)
        this.presentador.actualizarUsuariosConectados(jugadores, this.usuario)
      }
    }
    await this.servicioJugadoresOnline.observarAnunciados({ actualizarUsuariosConectados })
    
    this.presentador.mostrarFormularioIdentidad(this)
  }
  solicitarOtroNombre() {
    this.presentador.mostrarFormularioIdentidad(this, "Elija otro nombre.")
  }
  tramitarIdentidad(nombre) {
    this.servicioDeIdentidad.crearSesion(nombre, this, this.jugadoresOnline.map(j => j.nombre))
  }
  async ingresoAutorizado(usuario) {
    this.usuario = usuario
    this.presentador.mostrarBienvenida(this.usuario)
    this.servicioJugadoresOnline.anunciarJugador(usuario.nombre)
  }
}

export default Ingresar;