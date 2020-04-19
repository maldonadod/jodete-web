class ServicioJugadoresOnline {
  constructor(roomFactory) {
    this.observadores = []
    this.roomFactory = roomFactory
  }
  async conectar() {
    this.room = await this.roomFactory.crearRoom()
    this.room.observar(jugadores => {
      this.observadores.forEach(observador => {
        observador.actualizarJugadoresOnline(jugadores)
      })
    })
  }
  observar(observador) {
    this.observadores.push(observador)
  }
  anunciarJugador(nombre) {
    this.room.enviar(nombre)
  }
}

export default ServicioJugadoresOnline;