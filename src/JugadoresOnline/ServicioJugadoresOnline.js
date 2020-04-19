class ServicioJugadoresOnline {
  constructor(roomFactory) {
    this.observadores = []
    this.roomFactory = roomFactory
  }
  async conectar(ingresar) {
    this.room = await this.roomFactory.crearRoom()
    const callback = jugadores => {
      this.jugadoresOnline = jugadores
      this
      .observadores
      .forEach(observador => observador.actualizarUsuariosConectados(jugadores))
    }
    this.room.observar(callback)
    ingresar.iniciar()
  }
  observarAnunciados(observador) {
    this.observadores.push(observador)
    this
    .observadores
    .forEach(observador => observador.actualizarUsuariosConectados(this.jugadoresOnline))
  }
  anunciarJugador(nombre) {
    this.room.enviar(nombre)
  }
}

export default ServicioJugadoresOnline;