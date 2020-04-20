import { render, fireEvent } from "@testing-library/react"
import main from "./main"

class Aplicacion {
  constructor(conexion) {
    this.renderer = new Renderer()
    this.conexion = conexion
    main(this.renderer, conexion)
  }
  haMostradoFormularioDeIdentidad() {
    return this.renderer.esperarPorTexto("Cual es tu nombre ?")
  }
  ingresarIdentidad(nombre) {
    fireEvent.change(this.renderer.encuentraElInputConLabel("Cual es tu nombre ?"), {
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
  encuentraElInputConLabel(label) {
    return this.utils.getByLabelText(label)
  }
  esperarPorTexto(texto) {
    return this.utils.findByText(texto)
  }
}

export default Aplicacion;