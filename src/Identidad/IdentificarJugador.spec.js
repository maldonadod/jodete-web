import IdentificarJugador from "./IdentificarJugador"

describe("IdentificarJugador", () => {
  it("debe mostrar el formulario de identidad y observar a los jugadores online", () => {
  
    const presenter = {
      mostrarFormularioIdentidad: jest.fn()
    }
    const room = {}

    new IdentificarJugador(presenter, room)

    expect(presenter.mostrarFormularioIdentidad).toHaveBeenCalledWith(expect.any(Function))
  })
  it("debe identificar al jugador y dejarlo ingresar", async () => {
  
    const callback = jest.fn()

    const presenter = {
      mostrarFormularioIdentidad: jest.fn(crearIdentidadCallback => {
        presenter.crearIdentidadCallback = crearIdentidadCallback
      }),
      async ingresarNombre(nombre) {
        await presenter.crearIdentidadCallback(nombre)
      }
    }
    const room = {
      getJugadoresOnline: jest.fn(async () => []),
      anunciarNuevoJugadorOnline: jest.fn()
    }
    new IdentificarJugador(presenter, room, callback)

    await presenter.ingresarNombre("jorge")

    expect(room.anunciarNuevoJugadorOnline).toHaveBeenCalledWith("jorge")
    expect(callback).toHaveBeenCalledWith(room, "jorge")
  })
  it("debe informar que su nombre ya ha sido tomado", async () => {
    const jugadoresOnline = ["jorge"]
    const presenter = {
      mostrarFormularioIdentidad: jest.fn(crearIdentidadCallback => {
        presenter.crearIdentidadCallback = crearIdentidadCallback
      }),
      informarNombreEnUso: jest.fn(),
      ingresarNombre(nombre) {
        presenter.crearIdentidadCallback(nombre)
      }
    }
    const room = {
      anunciarNuevoJugadorOnline: jest.fn(),
      getJugadoresOnline: jest.fn(async () => jugadoresOnline)
    }
    new IdentificarJugador(presenter, room, () => {})

    await presenter.ingresarNombre("jorge")

    expect(room.getJugadoresOnline).toHaveBeenCalled()
    expect(presenter.informarNombreEnUso).toHaveBeenCalledWith("jorge")
  })
})