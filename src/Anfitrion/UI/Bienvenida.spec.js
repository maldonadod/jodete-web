import React from "react"
import Bienvenida from "./Bienvenida"
import { render } from "@testing-library/react"

describe("Bienvenida", () => {
  it("debe dar la bienvenida al jugador", () => {
    const nombre = "Adrián Dárgelos"
    
    const utils = render(<Bienvenida nombre={nombre} />)

    utils.getByText("Bienvenido Adrián Dárgelos ya sos nuestro perruki!")
  })  
})