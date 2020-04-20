import IdentificarJugador from "../Identidad/IdentificarJugador"
import IdentificarJugadorPresentacion from "../Identidad/IdentificarJugadorPresentacion"
import EstablecerConexion from "../EstablecerConexion/EstablecerConexion"
import EstablecerConexionPresentacion from "../EstablecerConexion/ReactConexionPresentacion"
import ColyseusConexion from "../EstablecerConexion/ColyseusConexion"

const conexion = new ColyseusConexion()

function main(renderer) {
  const establecer = new EstablecerConexion(
    conexion,
    new EstablecerConexionPresentacion(renderer)
  )
  
  establecer.iniciar(room => {

    function ingresar(room, nombre) {
      renderer.render(`Bienvenido ${nombre} ya sos nuestro perruki!`)
    }
    new IdentificarJugador(
      new IdentificarJugadorPresentacion(renderer),
      room,
      ingresar
    )
  })
}

export default main;