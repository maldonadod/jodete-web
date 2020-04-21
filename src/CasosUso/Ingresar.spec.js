import Aplicacion from "./Aplicacion"


describe("Ingresa al sistema proveyendo su nombre", () => {
  class ColyseusConexionFake {
    async conectar() {
      return {
        async getJugadoresOnline() {
          return []
        },
        observarJugadoresOnline() {},
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

describe("Ingresa al sistema proveyendo su nombre, el usuario es hospedado", () => {
  const room = {
    jugadores: [],
    async getJugadoresOnline() {
      return []
    },
    observarJugadoresOnline(callback) {
      room.callback = callback
    },
    anunciarNuevoJugadorOnline(nombre) {
      room.jugadores.push({ nombre })
      room.callback && room.callback(room.jugadores)
    }
  }
  class ColyseusConexionFake {
    async conectar() {
      return room
    }
  }
  it("debe mostrar oponentes", async () => {

    const nombre = "jorge"

    const app = new Aplicacion(new ColyseusConexionFake())

    await app.haMostradoFormularioDeIdentidad()
    
    app.ingresarIdentidad(nombre)

    await app.haMostradoBienvenidaPara(nombre)

    room.anunciarNuevoJugadorOnline("jose")

    await app.haMostradoOponentes(["jose"], "jorge")
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

describe("Ingresa al sistema pero el nombre que quiere usar el usuario ya esta en uso", () => {
  class ColyseusConexionFake {
    async conectar() {
      return {
        async getJugadoresOnline() {
          return ["jorge"]
        },
        anunciarNuevoJugadorOnline(nombre) {}
      }
    }
  }
  it("debe informar que el nombre ya esta en uso", async () => {

    const nombre = "jorge"

    const app = new Aplicacion(new ColyseusConexionFake())

    await app.haMostradoFormularioDeIdentidad()
    
    app.ingresarIdentidad(nombre)

    await app.haInformadoNombreEnUso(nombre)
  })
})