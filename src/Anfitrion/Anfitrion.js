class Anfitrion {
  constructor(presentacion, room) {
    this.presentacion = presentacion
    this.room = room
  }
  hospedar(nombre) {
    this.presentacion.mostrarBievenida(nombre)

    this.room.observarJugadoresOnline(jugadoresOnline => {
      this.presentacion.mostrarOponentes(nombre, jugadoresOnline)
    })
  }
}

export default Anfitrion;