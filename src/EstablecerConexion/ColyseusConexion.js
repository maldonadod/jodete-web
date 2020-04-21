import * as Colyseus from "colyseus.js";

let client = new Colyseus.Client("wss://jodete-server.herokuapp.com");

class ColyseusConexion {
  async conectar() {
    const callbacks = []
    const room = await client.joinOrCreate("jugadores-online")
    let jugadoresConectados = [];
    
    room.onMessage(message => {
      jugadoresConectados = message.jugadoresConectados
      callbacks.forEach(callback => callback(jugadoresConectados))
    })
    
    return {
      getJugadoresOnline() {
        return jugadoresConectados.map(j => j.nombre)
      },
      anunciarNuevoJugadorOnline(nombre) {
        room.send({
          anunciarNombre: nombre
        })
      },
      observarJugadoresOnline(c) {
        callbacks.push(c)
      }
    }
  }
}

export default ColyseusConexion;