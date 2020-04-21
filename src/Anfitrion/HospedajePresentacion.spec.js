import React from "react"
import Bienvenida from "./UI/Bienvenida"
import ListaDeJugadores from "./UI/ListaDeJugadores"
import HospedajePresentacion from "./HospedajePresentacion"

describe("HospedajePresentacion", () => {
  it("debe montar componente de bienvenida", () => {
    const nombre = "saiki"
    const ui = {
      render: jest.fn()
    }
    const presentacion = new HospedajePresentacion(ui)

    presentacion.mostrarBievenida(nombre)

    expect(ui.render).toHaveBeenCalledWith(
      <div>
        <Bienvenida nombre="saiki" />
      </div>
    )
  })
  it("debe montar componente de lista de jugadores excluyendo al jugador actual", () => {
    const nombre = "saiki"
    const jugadoresOnline = [{
      nombre: "juan"
    }, {
      nombre: "jorge"
    }, {
      nombre: "jose"
    }, {
      nombre: "saiki"
    }]
    const ui = {
      render: jest.fn()
    }
    const presentacion = new HospedajePresentacion(ui)
    
    presentacion.mostrarOponentes(nombre, jugadoresOnline)

    expect(ui.render).toHaveBeenCalledWith(
      <div>
        <Bienvenida nombre="saiki" />
        <ListaDeJugadores nombresJugadores={["juan", "jorge", "jose"]} />
      </div>
    )
  })
})