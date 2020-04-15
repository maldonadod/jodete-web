import Aplicacion from "./Aplicacion"

describe("cuando el usuario llega a la pagina principal y no tiene autorizacion", () => {
  it("se le debe preguntar su identidad (nombre)", () => {
    const servicioDeIdentidad = {
      autorizar: jest.fn(presenter => {
        presenter.solicitarIdentidad()
      })
    }
    const app = new Aplicacion(servicioDeIdentidad)
    expect(servicioDeIdentidad.autorizar).toBeCalled()
    app.haPreguntadoAlUsuarioPorSuIdentidad()
  })
})

describe("cuando el usuario provee su nombre para identificarlo", () => {
  it("se le permite ingresar a la sala y muestra mensaje de bienvenida", () => {
    const NOMBRE = "jorge"
    const servicioDeIdentidad = {
      autorizar: jest.fn(presenter => {
        presenter.solicitarIdentidad()
      }),
      crearSesion: jest.fn((nombre, presenter) => {
        presenter.ingresarAUsuarioAutenticado(nombre)
      }),
    }
    const app = new Aplicacion(servicioDeIdentidad)
    app.ingresarNombreParaIdentificarAlUsuario(NOMBRE)
    expect(servicioDeIdentidad.crearSesion).toBeCalled()
    app.haMostradoMensajeDeBienvenidaPara(NOMBRE)
  })
})