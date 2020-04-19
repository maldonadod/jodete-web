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
  async ingresarTextoAlInputConLabel(label, valor) {
    const element = await screen.findByLabelText(label)
    fireEvent.change(element, createChangeEvent(valor))
  }
  async accionarBotonConLabel(label) {
    const boton = await screen.findByText(label)
    fireEvent.click(boton)
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