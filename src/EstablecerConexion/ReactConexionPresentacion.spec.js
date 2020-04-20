import React from "react"
import ReactConexionPresentacion from "./ReactConexionPresentacion"
import ConexionEnProgreso from "./UI/ConexionEnProgreso"
import ConexionFallida from "./UI/ConexionFallida"

describe("ReactConexionPresentacion", () => {

  let ui;

  beforeEach(() => {
    ui = {
      render: jest.fn()
    }
  })

  it("debe montar ConexionEnProgreso", () => {

    const presentacion = new ReactConexionPresentacion(ui)

    presentacion.mostrarEstableciendoConexion()

    expect(ui.render).toHaveBeenCalledWith(<ConexionEnProgreso />)
  })
  it("debe tomar el mensaje del error y montar ConexionFallida", () => {

    const mensajeError = "Algo se rompio."

    const presentacion = new ReactConexionPresentacion(ui)

    presentacion.mostrarConexionFallida(new Error(mensajeError))

    expect(ui.render).toHaveBeenCalledWith(
      <ConexionFallida mensajeError={mensajeError} />
    )
  })
})