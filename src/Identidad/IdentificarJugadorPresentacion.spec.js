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
  it("debe montar el componente ui con el mensaje de que el nombre actual ya esta en uso", () => {
    
    const callback = jest.fn()
    const mensaje = "El nombre esta en uso!"
    const ui = {
      render: jest.fn()
    }

    const presentacion = new IdentificarJugadorPresentacion(ui)
    presentacion.informarNombreEnUso("jorge")
    presentacion.mostrarFormularioIdentidad(callback)

    expect(ui.render).toHaveBeenCalledWith(
      <FormularioIdentidad
        ingresarFormulario={callback}
        mensajeNombreInvalido={mensaje}
      />
    )
  })
})