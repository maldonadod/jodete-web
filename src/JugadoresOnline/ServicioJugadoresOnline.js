class ServicioJugadoresOnline {
  constructor(roomFactory) {
    this.observadores = []
    this.roomFactory = roomFactory
  }
  async conectar() {
    this.room = await this.roomFactory.crearRoom()
  }
  observar(ovservador) {
    this.room.observar(jugadores => {
      ovservador.actualizarJugadoresOnline(jugadores)
    })
  }
  anunciarJugador(nombre) {
    this.room.enviar(nombre)
  }
}

export default ServicioJugadoresOnline;