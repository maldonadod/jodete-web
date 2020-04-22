import React from "react"
import ListaDeJugadores from "./ListaDeJugadores"
import { render } from "@testing-library/react"

describe("ListaDeJugadores", () => {
  it("debe dar la bienvenida al jugador", () => {
    const nombresJugadores = ["jorge"]
    
    const utils = render(<ListaDeJugadores nombresJugadores={nombresJugadores} />)
    
    utils.getByText("jorge")
  })  
})