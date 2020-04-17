import * as Colyseus from "colyseus.js";

let client = new Colyseus.Client("ws://localhost:2567");

class ServicioJugadoresOnline {
  observarAnunciados(presentador) {
    this.observador = presentador
    this.roomPromise = client.joinOrCreate("jugadores-online")
      .then(room => {

        room.onMessage(({ jugadoresConectados }) => {
          this.observador.actualizarUsuariosConectados(jugadoresConectados)
        })

        this.room = room
      })
  }
  async anunciarJugador(nombre) {
    await this.roomPromise
    this.room.send({
      anunciarNombre: nombre
    })
  }
}

export default ServicioJugadoresOnline;