import IdentificarJugador from "./IdentificarJugador"

describe("IdentificarJugador", () => {
  it("debe mostrar el formulario de identidad y observar a los jugadores online", () => {
  
    const presenter = {
      mostrarFormularioIdentidad: jest.fn()
    }
    const room = {
      observarJugadoresOnline: jest.fn()
    }
    const identidad = new IdentificarJugador(presenter, room)

    expect(room.observarJugadoresOnline).toHaveBeenCalledWith(identidad)
    expect(presenter.mostrarFormularioIdentidad).toHaveBeenCalledWith(expect.any(Function))
  })
  it("debe identificar al jugador y dejarlo ingresar", () => {
  
    const callback = jest.fn()

    const presenter = {
      mostrarFormularioIdentidad: jest.fn(crearIdentidadCallback => {
        presenter.crearIdentidadCallback = crearIdentidadCallback
      }),
      ingresarNombre(nombre) {
        presenter.crearIdentidadCallback(nombre)
      }
    }
    const room = {
      observarJugadoresOnline: jest.fn(),
      anunciarNuevoJugadorOnline: jest.fn()
    }
    new IdentificarJugador(presenter, room, callback)

    presenter.ingresarNombre("jorge")

    expect(room.anunciarNuevoJugadorOnline).toHaveBeenCalledWith("jorge")
    expect(callback).toHaveBeenCalledWith(room, "jorge")
  })
})