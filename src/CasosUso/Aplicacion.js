import { render, fireEvent } from "@testing-library/react"
import main from "./main"

class Aplicacion {
  constructor(conexion) {
    this.renderer = new Renderer()
    this.conexion = conexion
    main(this.renderer, conexion)
  }
  haMostradoFormularioDeIdentidad() {
    return this.renderer.esperarPorTexto("Cuál es tu nombre ?")
  }
  ingresarIdentidad(nombre) {
    fireEvent.change(this.renderer.encuentraElInputConLabel("Cuál es tu nombre ?"), {
      target: {
        value: nombre
      }
    })
    fireEvent.click(this.renderer.encuentraElTexto("Ingresar"))
  }
  async haMostradoBienvenidaPara(nombre) {
    await this.renderer.esperarPorTexto(`Bienvenido ${nombre} ya sos nuestro perruki!`)
  }
  async haInformadoUnaFallaEnSistema() {
    await this.renderer.esperarPorTexto("Oops... intentar luego, fuera de servicio.")
  }
  async haInformadoNombreEnUso() {
    await this.renderer.esperarPorTexto("El nombre esta en uso!")
  }
  async haMostradoOponentes(jugadoresOnline, nombreJugadorActual) {
    const container = this.renderer.obtenerPorTestId("oponentes")
    await jugadoresOnline.reduce((p1, nombre) => {
      return p1.then(() => this.renderer.esperarPorTexto(nombre), container)
    }, Promise.resolve())
    this.renderer.noEncuentraElTexto(nombreJugadorActual)
  }
}

class Renderer {
  render(tree) {
    if (this.utils) {
      this.utils.rerender(tree)
    } else {
      this.utils = render(tree)
    }
  }
  encuentraElTexto(texto) {
    return this.utils.getByText(texto)
  }
  noEncuentraElTexto(texto) {
    const elemento = this.utils.queryByText(texto)
    expect(elemento).toEqual(null)
  }
  encuentraElInputConLabel(label) {
    return this.utils.getByLabelText(label)
  }
  esperarPorTexto(texto) {
    return this.utils.findByText(texto)
  }
  obtenerPorTestId(testId) {
    return this.utils.getByTestId(testId)
  }
}

export default Aplicacion;