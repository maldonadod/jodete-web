import React from "react"
import { render } from "@testing-library/react"
import ConexionEnProgreso from "./ConexionEnProgreso"

describe("ConexionEnProgreso", () => {
  it("debe transmitir que hay una conexion en progreso", () => {

    const utils = render(<ConexionEnProgreso />)

    utils.getByText("La conexion esta en progreso...")
  })
})