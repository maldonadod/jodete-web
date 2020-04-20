import Aplicacion from "./Aplicacion"


describe("Ingresa al sistema proveyendo su nombre", () => {
  class ColyseusConexionFake {
    async conectar() {
      return {
        observarJugadoresOnline(observador) {},
        anunciarNuevoJugadorOnline(nombre) {}
      }
    }
  }
  it("debe dar la bienvenida al usuario", async () => {

    const nombre = "jorge"

    const app = new Aplicacion(new ColyseusConexionFake())

    await app.haMostradoFormularioDeIdentidad()
    
    app.ingresarIdentidad(nombre)

    await app.haMostradoBienvenidaPara(nombre)
  })
})

describe("Ingresa al sistema pero falla la conexion", () => {
  class ColyseusConexionFakeFalloEnConexion {
    conectar() {
      return Promise.reject(new Error("Error en el sistema."))
    }
  }
  it("debe informar que el sistema esta fuera de servicio", async () => {

    const app = new Aplicacion(new ColyseusConexionFakeFalloEnConexion())

    await app.haInformadoUnaFallaEnSistema()
  })
})