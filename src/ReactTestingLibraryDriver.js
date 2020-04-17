import { render, fireEvent, screen } from "@testing-library/react"

class ReactTestingLibraryDriver {
  render(tree) {
    if (this.rerender) {
      this.rerender(tree)
    } else {
      const { rerender } = render(tree)
      this.rerender = rerender
    }
  }
  ingresarTextoAlInputConLabel(label, valor) {
    fireEvent.change(screen.getByLabelText(label), createChangeEvent(valor))
  }
  accionarBotonConLabel(label) {
    fireEvent.click(screen.getByText(label))
  }
  findByText(text) {
    return screen.findByText(text)
  }
  getByText(text) {
    return screen.getByText(text)
  }
  queryByText(text) {
    return screen.queryByText(text)
  }
  getByLabelText(text) {
    return screen.getByLabelText(text)
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