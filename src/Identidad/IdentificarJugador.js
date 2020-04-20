class IdentificarJugador {
  constructor(presenter, room, callback) {
    this.presenter = presenter
    this.room = room
    this.callback = callback
    this.presenter.mostrarFormularioIdentidad(nombre => this.crearIdentidad(nombre))
  }
  async crearIdentidad(nombre) {
    const jugadoresOnline = await this.room.getJugadoresOnline()
    if (jugadoresOnline && jugadoresOnline.includes(nombre)) {
      this.presenter.informarNombreEnUso(nombre)
      this.presenter.mostrarFormularioIdentidad(nombre => this.crearIdentidad(nombre))
    } else {
      this.room.anunciarNuevoJugadorOnline(nombre)
      this.callback(this.room, nombre)
    }
  }
}

export default IdentificarJugador;