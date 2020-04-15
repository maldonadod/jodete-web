import Aplicacion from "./Aplicacion"
import ServicioDeIdentidad from "./Identidad/ServicioDeIdentidad"
import { cleanup } from "@testing-library/react"

describe("cuando el usuario llega a la pagina principal y no tiene autorizacion", () => {
  afterEach(cleanup)
  it("se le debe preguntar su identidad (nombre)", () => {
    const servicioJugadoresConectados = {
      agregarObservador: jest.fn()
    }
    const app = new Aplicacion(new ServicioDeIdentidad(), servicioJugadoresConectados)
    app.haPreguntadoAlUsuarioPorSuIdentidad()
  })
})

describe("cuando el usuario provee su nombre para identificarlo", () => {
  afterEach(cleanup)
  it("se le permite ingresar a la sala y muestra mensaje de bienvenida", () => {
    const servicioJugadoresConectados = {
      agregarObservador: jest.fn()
    }
    const NOMBRE = "jorge"
    const app = new Aplicacion(new ServicioDeIdentidad(), servicioJugadoresConectados)
    app.ingresaNombreParaAutenticarse(NOMBRE)
    app.haMostradoMensajeDeBienvenidaPara(NOMBRE)
  })
})

describe("cuando el usuario ingresa a la sala", () => {
  afterEach(cleanup)
  it("debe ver la lista de jugadores ponerse online", () => {
    const servicioDeIdentidad = {
      autorizar(presentador) {
        presentador.ingresarAUsuarioAutenticado("jorge")
      }
    }
    const servicioJugadoresConectados = {
      observadores: [],
      agregarObservador: jest.fn(presentador => {
        servicioJugadoresConectados.observadores.push(presentador)
      }),
      seHaConectado(jugador) {
        servicioJugadoresConectados
          .observadores
          .forEach(o => {
            o.actualizarUsuariosConectados([jugador])
          })
      }
    }
    const app = new Aplicacion(servicioDeIdentidad, servicioJugadoresConectados)
    app.haMostradoListaDeUsuariosConectadosCargando()
    expect(servicioJugadoresConectados.agregarObservador).toBeCalled()

    servicioJugadoresConectados.seHaConectado({
      nombre: "pepe"
    })
    
    app.haMostradoJugadorConectado("pepe")
  })
})