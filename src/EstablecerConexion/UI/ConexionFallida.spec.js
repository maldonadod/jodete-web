import React from "react"
import { render } from "@testing-library/react"
import ConexionFallida from "./ConexionFallida"

describe("ConexionFallida", () => {
  it("debe transmitir que hay una conexion en progreso", () => {

    const utils = render(<ConexionFallida />)

    utils.getByText("Oops... intentar luego, fuera de servicio.")
  })
})