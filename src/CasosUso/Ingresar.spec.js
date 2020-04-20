import Aplicacion from "./Aplicacion"

class ColyseusConexionFake {
  async conectar() {
    return {
      observarJugadoresOnline(observador) {
      },
      anunciarNuevoJugadorOnline(nombre) {
      }
    }
  }
}

describe("Ingresa al sistema proveyendo su nombre", () => {
  it("debe dar la bienvenida al usuario", async () => {

    const nombre = "jorge"

    const app = new Aplicacion(new ColyseusConexionFake())

    await app.haMostradoFormularioDeIdentidad()
    
    app.ingresarIdentidad(nombre)

    await app.haMostradoBienvenidaPara(nombre)
  })
})