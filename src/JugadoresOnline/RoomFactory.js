import * as Colyseus from "colyseus.js";
let client = new Colyseus.Client("ws://jodete-server.herokuapp.com");

class RoomFactory {
  async crearRoom() {
    const room = await client.joinOrCreate("jugadores-online")
    return {
      observar(callback) {
        room.onMessage(({ jugadoresConectados }) => {
          callback(jugadoresConectados)
        })
      },
      enviar(nombre) {
        room.send({
          anunciarNombre: nombre
        })
      }
    }
  }
}

export default RoomFactory;