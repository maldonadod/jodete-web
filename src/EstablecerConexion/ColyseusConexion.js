import * as Colyseus from "colyseus.js";

let client = new Colyseus.Client("wss://jodete-server.herokuapp.com");

class ColyseusConexion {
  async conectar() {
    const room = await client.joinOrCreate("jugadores-online")

    room.onMessage(({ jugadoresConectados }) => {
      console.log(jugadoresConectados)
    })
    return {
      observarJugadoresOnline(observador) {
        console.log("observarJugadoresOnline: ", observador)
      },
      anunciarNuevoJugadorOnline(nombre) {
        console.log("anunciarNuevoJugadorOnline: ", nombre)
        room.send({
          anunciarNombre: nombre
        })
      }
    }
  }
}

export default ColyseusConexion;