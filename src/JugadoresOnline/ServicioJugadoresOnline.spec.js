import ServicioJugadoresOnline from "./ServicioJugadoresOnline"

describe("cuando conectamos el ServicioJugadoresOnline y crea la room satisfactoriamente", () => {
  it("debe iniciar el caso de uso ingresar", async () => {

    const ingresar = {
      iniciar: jest.fn()
    }

    const room = {
      observar: jest.fn(),
      enviar: jest.fn()
    }

    const roomFactory = {
      crearRoom: async () => room
    }

    await new ServicioJugadoresOnline(roomFactory).conectar(ingresar)

    expect(ingresar.iniciar).toHaveBeenCalled()
  })
})

describe("cuando un jugador se anuncia al servicio de jugadores online", () => {
  it("debe la room enviar al jugador", async () => {
  
    const room = {
      enviar: jest.fn(),
      observar: jest.fn()
    }

    const ingresar = {
      iniciar: jest.fn()
    }

    const roomFactory = {
      crearRoom: async () => room
    }

    const servicio = new ServicioJugadoresOnline(roomFactory)

    await servicio.conectar(ingresar)

    servicio.anunciarJugador("juancito")

    expect(room.enviar).toHaveBeenCalledWith("juancito")
  })
})