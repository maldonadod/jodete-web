import { render, fireEvent } from "@testing-library/react"

class ReactTestingLibraryDriver {
  render(tree) {
    if (this.rerender) {

      this.rerender(tree)
    } else {

      Object.assign(this, render(tree))
    }
  }
  ingresarTextoAlInputConLabel(label, valor) {
    fireEvent.change(this.getByLabelText(label), createChangeEvent(valor))
  }
  accionarBotonConLabel(label) {
    fireEvent.click(this.getByText(label))
  }
}

function createChangeEvent(valor) {
  return {
    target: {
      value: valor
    }
  }
}

export default ReactTestingLibraryDriver;