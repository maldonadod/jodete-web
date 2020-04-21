import React from "react"
import { render, fireEvent } from "@testing-library/react"
import FormularioIdentidad from "./FormularioIdentidad"

describe("FormularioIdentidad", () => {
  it("debe preguntar nombre del usuario", () => {
    const utils = render(<FormularioIdentidad />)
    utils.getByText("Cuál es tu nombre ?")
  })
  it("debe informar el mensaje proporcionado", () => {
    const mensaje = "Este es el mensaje por nombre invalido."
    const utils = render(<FormularioIdentidad mensajeNombreInvalido={mensaje} />)
    utils.getByText(mensaje)
  })
  it("debe volver a llamar cuando el usuario ingresa su nombre", () => {
    const nombre = "jorge"
    const callback = jest.fn()
    const utils = render(<FormularioIdentidad ingresarFormulario={callback} />)
    
    fireEvent.change(utils.getByLabelText("Cuál es tu nombre ?"), {
      target: {
        value: nombre
      }
    })
    fireEvent.click(utils.getByText("Ingresar"))

    expect(callback).toHaveBeenCalledWith(nombre)
  })
})