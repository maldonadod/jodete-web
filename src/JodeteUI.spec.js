import Aplicacion from "./Aplicacion"
import ServicioDeIdentidad from "./Identidad/ServicioDeIdentidad"
import ServicioJugadoresOnline from "./JugadoresOnline/ServicioJugadoresOnline"

const roomFactory = {
  async crearRoom() {
    const jugadores = []
    let callback = () => {};
    return {
      enviar(nombre) {
        jugadores.push({
          nombre
        })
        callback(jugadores)
      },
      observar(c) {
        callback = c
        callback([])
      }
    }
  }
}

describe("cuando el usuario llega a la pagina principal y no tiene autorizacion", () => {
  it("se le debe preguntar su identidad (nombre)", async () => {
    const app = new Aplicacion(new ServicioDeIdentidad(), new ServicioJugadoresOnline(roomFactory))
    await app.haPreguntadoAlUsuarioPorSuIdentidad()
  })
})

describe("cuando el usuario provee su nombre para identificarlo y este ya esta registrado", () => {
  it("se le debe pedir elegir otro nombre", async () => {
    const roomFactory = {
      async crearRoom() {
        const jugadores = [{
          nombre: "juancito"
        }]
        let callback = () => {};
        return {
          enviar(jugador) {
            jugadores.push(jugador)
            callback(jugadores)
          },
          observar(c) {
            callback = c
            callback(jugadores)
          }
        }
      }
    }
    const servicioDeIdentidad = new ServicioDeIdentidad()
    const app = new Aplicacion(servicioDeIdentidad, new ServicioJugadoresOnline(roomFactory))
    await app.ingresaNombreParaAutenticarse("juancito")
    app.haPedidoQueElijaOtroNombre()
  })
})

describe("cuando el usuario provee su nombre para identificarlo", () => {
  it("se le permite ingresar a la sala y muestra mensaje de bienvenida", async () => {
    const NOMBRE = "jorge"
    const app = new Aplicacion(new ServicioDeIdentidad(), new ServicioJugadoresOnline(roomFactory))
    await app.ingresaNombreParaAutenticarse(NOMBRE)
    await app.haMostradoMensajeDeBienvenidaPara(NOMBRE)
  })
})

describe("cuando el usuario ingresa a la sala", () => {
  it("debe ver la lista de jugadores ponerse online", async () => {

    const room = {
      jugadores: [],
      callback: () => {},
      enviar: jest.fn(nombre => {
        room.jugadores.push({
          nombre
        })
        room.callback(room.jugadores)
      }),
      observar(callback) {
        room.callback = callback
        callback([])
      }
    }

    const roomFactory = {
      async crearRoom() {
        return room
      }
    }

    const servicioJugadoresOnline = new ServicioJugadoresOnline(roomFactory)
    const app = new Aplicacion(new ServicioDeIdentidad(), servicioJugadoresOnline)
    
    await app.ingresaNombreParaAutenticarse("jorge")
    expect(room.enviar).toBeCalledWith("jorge")
    servicioJugadoresOnline.anunciarJugador("pepe")
    await app.haMostradoJugadorConectado("pepe")
  })
})