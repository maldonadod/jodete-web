import React from "react"
import { render } from "@testing-library/react"
import ConexionFallida from "./ConexionFallida"

describe("ConexionFallida", () => {
  it("debe transmitir que hay una conexion en progreso", () => {

    const mensajeError = "La conexion no pude ser establecida."

    const utils = render(<ConexionFallida mensajeError={mensajeError} />)

    utils.getByText(mensajeError)
  })
})