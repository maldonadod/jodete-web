import main from "./main"
import ReactTestingLibraryDriver from "./ReactTestingLibraryDriver"

class Aplication {
  constructor(servicioDeIdentidad, servicioJugadoresConectados) {
    this.driver = new ReactTestingLibraryDriver()
    main(this.driver, servicioDeIdentidad, servicioJugadoresConectados)
  }
  haPreguntadoAlUsuarioPorSuIdentidad() {
    return this.driver.findByText("Como es tu nombre ?")
  }
  async ingresaNombreParaAutenticarse(nombre) {
    await this.driver.ingresarTextoAlInputConLabel("Como es tu nombre ?", nombre)
    return this.driver.accionarBotonConLabel("Ingresar")
  }
  haMostradoMensajeDeBienvenidaPara(nombre) {
    return this.driver.findByText(`Bienvenido ${nombre}.`)
  }
  haMostradoListaDeUsuariosConectadosVacia() {
    this.driver.getByText("No hay usuarios conectados...")
  }
  haMostradoJugadorConectado(nombreJugador) {
    const noHayJugadoresConectados = this.driver.queryByText("No hay usuarios conectados...")
    expect(noHayJugadoresConectados).toEqual(null)
    return this.driver.findByText(nombreJugador)
  }
  haPedidoQueElijaOtroNombre() {
    this.driver.getByText("Elija otro nombre.")
  }
}

export default Aplication;