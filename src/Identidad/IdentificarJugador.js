class IdentificarJugador {
  constructor(presenter, room, callback) {
    this.presenter = presenter
    this.room = room
    this.callback = callback
    this.room.observarJugadoresOnline(this)
    this.presenter.mostrarFormularioIdentidad(nombre => this.crearIdentidad(nombre))
  }
  crearIdentidad(nombre) {
    this.room.anunciarNuevoJugadorOnline(nombre)
    this.callback(this.room, nombre)
  }
}

export default IdentificarJugador;