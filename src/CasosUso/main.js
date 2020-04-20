import IdentificarJugador from "../Identidad/IdentificarJugador"
import IdentificarJugadorPresentacion from "../Identidad/IdentificarJugadorPresentacion"
import EstablecerConexion from "../EstablecerConexion/EstablecerConexion"
import EstablecerConexionPresentacion from "../EstablecerConexion/ReactConexionPresentacion"

function conectar(renderer, conexion) {
  const presentacion = new EstablecerConexionPresentacion(renderer)
  const establecer = new EstablecerConexion(conexion, presentacion)
  return callback => establecer.iniciar(callback)
}

function identificar(renderer, room) {
  const presentacion = new IdentificarJugadorPresentacion(renderer)
  return callback => {
    new IdentificarJugador(presentacion, room, (room, nombre) => callback(nombre))
  }
}

async function main(renderer, conexion) {
  const room = await esperar(conectar(renderer, conexion))
  const nombre = await esperar(identificar(renderer, room))
  renderer.render(`Bienvenido ${nombre} ya sos nuestro perruki!`)
}

function esperar(callback) {
  return new Promise(callback)
}

export default main;