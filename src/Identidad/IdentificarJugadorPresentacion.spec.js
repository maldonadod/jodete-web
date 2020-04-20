import React from "react"
import IdentificarJugadorPresentacion from "./IdentificarJugadorPresentacion"
import FormularioIdentidad from "./UI/FormularioIdentidad"

describe("IdentificarJugadorPresentacion", () => {
  it("debe montar el componente ui donde el usuario puede identificarse como jugador", () => {
    
    const callback = jest.fn()
    const ui = {
      render: jest.fn()
    }

    new IdentificarJugadorPresentacion(ui).mostrarFormularioIdentidad(callback)

    expect(ui.render).toHaveBeenCalledWith(<FormularioIdentidad ingresarFormulario={callback} />)
  })
})