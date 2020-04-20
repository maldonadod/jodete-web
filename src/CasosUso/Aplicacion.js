import { render, fireEvent } from "@testing-library/react"
import main from "./main"

class Aplicacion {
  constructor() {
    this.renderer = new Renderer()
    main(this.renderer)
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
  haMostradoBienvenidaPara(nombre) {
    return this.renderer.esperarPorTexto(`Bienvenido ${nombre} ya sos nuestro perruki!`)
  }
}

class Renderer {
  render(tree) {
    this.utils = render(tree)
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