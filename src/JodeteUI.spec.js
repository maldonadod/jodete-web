import Aplicacion from "./Aplicacion"
import ServicioDeIdentidad from "./Identidad/ServicioDeIdentidad"

describe("cuando el usuario llega a la pagina principal y no tiene autorizacion", () => {
  it("se le debe preguntar su identidad (nombre)", () => {
    const servicioJugadoresConectados = {
      observarAnunciados: jest.fn(),
      anunciarJugador: jest.fn()
    }
    const app = new Aplicacion(new ServicioDeIdentidad(), servicioJugadoresConectados)
    app.haPreguntadoAlUsuarioPorSuIdentidad()
  })
})

describe("cuando el usuario provee su nombre para identificarlo y este ya esta registrado", () => {
  it("se le debe pedir elegir otro nombre", () => {
    const servicioJugadoresConectados = {
      observarAnunciados: jest.fn(),
      anunciarJugador: jest.fn()
    }
    const servicioDeIdentidad = new ServicioDeIdentidad()
    servicioDeIdentidad.registrarUsuario("juancito")

    const app = new Aplicacion(servicioDeIdentidad, servicioJugadoresConectados)
    app.ingresaNombreParaAutenticarse("juancito")
    app.haPedidoQueElijaOtroNombre()
  })
})

describe("cuando el usuario provee su nombre para identificarlo", () => {
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
  it("debe ver la lista de jugadores ponerse online", async () => {
    const servicioDeIdentidad = {
      autorizarIngreso(ingresar) {
        ingresar.ingresoAutorizado("jorge")
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