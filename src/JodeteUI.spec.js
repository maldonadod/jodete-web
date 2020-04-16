import Aplicacion from "./Aplicacion"
import ServicioDeIdentidad from "./Identidad/ServicioDeIdentidad"
import { cleanup } from "@testing-library/react"

describe("cuando el usuario llega a la pagina principal y no tiene autorizacion", () => {
  afterEach(cleanup)
  it("se le debe preguntar su identidad (nombre)", () => {
    const servicioJugadoresConectados = {
      observarAnunciados: jest.fn(),
      anunciarJugador: jest.fn()
    }
    const app = new Aplicacion(new ServicioDeIdentidad(), servicioJugadoresConectados)
    app.haPreguntadoAlUsuarioPorSuIdentidad()
  })
})

describe("cuando el usuario provee su nombre para identificarlo", () => {
  afterEach(cleanup)
  it("se le permite ingresar a la sala y muestra mensaje de bienvenida", async () => {
    const servicioJugadoresConectados = {
      observarAnunciados: jest.fn(),
      anunciarJugador: jest.fn()
    }
    const NOMBRE = "jorge"
    const app = new Aplicacion(new ServicioDeIdentidad(), servicioJugadoresConectados)
    app.ingresaNombreParaAutenticarse(NOMBRE)
    await app.haMostradoMensajeDeBienvenidaPara(NOMBRE)
  })
})

describe("cuando el usuario ingresa a la sala", () => {
  afterEach(cleanup)
  it("debe ver la lista de jugadores ponerse online", async () => {
    const servicioDeIdentidad = {
      autorizar(presentador) {
        presentador.ingresarAUsuarioAutenticado("jorge")
      }
    }
    const servicioJugadoresConectados = {
      observadores: [],
      jugadores: [],
      observarAnunciados: jest.fn(presentador => {
        servicioJugadoresConectados.observador = presentador
      }),
      anunciarJugador: jest.fn((nombre) => {
        const jugador = {
          nombre
        }
        servicioJugadoresConectados.jugadores.push(jugador)
        servicioJugadoresConectados
          .observador
          .actualizarUsuariosConectados(servicioJugadoresConectados.jugadores)
      })
    }
    const app = new Aplicacion(servicioDeIdentidad, servicioJugadoresConectados)
    await app.haMostradoListaDeUsuariosConectadosCargando()
    expect(servicioJugadoresConectados.anunciarJugador).toBeCalledWith("jorge")
    expect(servicioJugadoresConectados.observarAnunciados).toBeCalled()

    servicioJugadoresConectados.anunciarJugador("pepe")
    
    app.haMostradoJugadorConectado("pepe")
  })
})