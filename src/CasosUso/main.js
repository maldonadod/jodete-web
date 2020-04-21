import IdentificarJugador from "../Identidad/IdentificarJugador"
import IdentificarJugadorPresentacion from "../Identidad/IdentificarJugadorPresentacion"
import EstablecerConexion from "../EstablecerConexion/EstablecerConexion"
import EstablecerConexionPresentacion from "../EstablecerConexion/ReactConexionPresentacion"
import Anfitrion from "../Anfitrion/Anfitrion"
import HospedajePresentacion from "../Anfitrion/HospedajePresentacion"

function conectar(renderer, conexion) {
  const presentacion = new EstablecerConexionPresentacion(renderer)
  const establecer = new EstablecerConexion(conexion, presentacion)
  return esperar(callback => establecer.iniciar(callback))
}

function identificar(renderer, room) {
  const presentacion = new IdentificarJugadorPresentacion(renderer)
  return esperar(callback => {
    new IdentificarJugador(presentacion, room, (room, nombre) => callback(nombre))
  })
}

function hospedar(renderer, room, nombre) {
  const presentacion = new HospedajePresentacion(renderer)
  new Anfitrion(presentacion, room).hospedar(nombre)
}

async function main(renderer, conexion) {
  const room = await conectar(renderer, conexion)
  const nombre = await identificar(renderer, room)
  hospedar(renderer, room, nombre)
}

function esperar(callback) {
  return new Promise(callback)
}

export default main;