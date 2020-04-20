import * as Colyseus from "colyseus.js";

let client = new Colyseus.Client("wss://jodete-server.herokuapp.com");

class ColyseusConexion {
  async conectar() {
    const room = await client.joinOrCreate("jugadores-online")
    let jugadoresConectados = [];
    
    room.onMessage(message => {
      jugadoresConectados = message.jugadoresConectados
    })
    
    return {
      getJugadoresOnline() {
        return jugadoresConectados.map(j => j.nombre)
      },
      anunciarNuevoJugadorOnline(nombre) {
        room.send({
          anunciarNombre: nombre
        })
      }
    }
  }
}

export default ColyseusConexion;