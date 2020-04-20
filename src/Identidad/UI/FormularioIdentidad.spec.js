import React from "react"
import { render, fireEvent } from "@testing-library/react"
import FormularioIdentidad from "./FormularioIdentidad"

describe("FormularioIdentidad", () => {
  it("debe preguntar nombre del usuario", () => {
    const utils = render(<FormularioIdentidad />)
    utils.getByText("Cual es tu nombre ?")
  })
  it("debe volver a llamar cuando el usuario ingresa su nombre", () => {
    const nombre = "jorge"
    const callback = jest.fn()
    const utils = render(<FormularioIdentidad ingresarFormulario={callback} />)
    
    fireEvent.change(utils.getByLabelText("Cual es tu nombre ?"), {
      target: {
        value: nombre
      }
    })
    fireEvent.click(utils.getByText("Ingresar"))

    expect(callback).toHaveBeenCalledWith(nombre)
  })
})