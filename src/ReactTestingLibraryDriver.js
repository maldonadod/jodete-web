import { render, fireEvent } from "@testing-library/react"

class ReactTestingLibraryDriver {
  render(tree) {
    const utils = render(tree)
    Object.assign(this, utils)
  }
  ingresarTexto(label, valor) {
    const event = {
      target: {
        value: valor
      }
    }
    fireEvent.change(this.getByLabelText(label), event)
  }
  accionarBoton(label) {
    fireEvent.click(this.getByText(label))
  }
}

export default ReactTestingLibraryDriver;