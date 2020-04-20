import EstablecerConexion from "./EstablecerConexion"

describe("Al ingresar al sitio", () => {

  let presenter;
  let callback;

  beforeEach(() => {
    callback = jest.fn()
    presenter = {
      mostrarEstableciendoConexion: jest.fn(),
      mostrarConexionFallida: jest.fn()
    }
  })

  it("debe establer la conexion y al conectarse ejecutar el callback", async () => {
    const conexion = {
      room: {},
      conectar: jest.fn(async () => conexion.room)
    }
    const establecer = new EstablecerConexion(conexion, presenter)
    
    await establecer.iniciar(callback)

    expect(presenter.mostrarEstableciendoConexion).toHaveBeenCalled()
    expect(conexion.conectar).toHaveBeenCalled()
    expect(callback).toHaveBeenCalledWith(conexion.room)
  })
  it("debe establer la conexion y al fallar mostrar conexion fallida", async () => {
    const conexion = {
      error: new Error("Failed"),
      conectar: jest.fn(async () => Promise.reject(conexion.error))
    }
    const establecer = new EstablecerConexion(conexion, presenter)

    await establecer.iniciar(callback)

    expect(presenter.mostrarEstableciendoConexion).toHaveBeenCalled()
    expect(conexion.conectar).toHaveBeenCalled()
    expect(presenter.mostrarConexionFallida).toHaveBeenCalledWith(conexion.error)
  })
})