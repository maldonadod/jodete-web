import main from "./main"
import ReactTestingLibraryDriver from "./ReactTestingLibraryDriver"

class Aplication {
  constructor(servicioDeIdentidad, servicioJugadoresConectados) {
    this.driver = new ReactTestingLibraryDriver()
    main(this.driver, servicioDeIdentidad, servicioJugadoresConectados)
  }
  haPreguntadoAlUsuarioPorSuIdentidad() {
    this.driver.getByLabelText("Como es tu nombre ?")
  }
  ingresaNombreParaAutenticarse(nombre) {
    this.driver.ingresarTextoAlInputConLabel("Como es tu nombre ?", nombre)
    this.driver.accionarBotonConLabel("Ingresar")
  }
  haMostradoMensajeDeBienvenidaPara(nombre) {
    return this.driver.findByText(`Bienvenido ${nombre}.`)
  }
  haMostradoListaDeUsuariosConectadosCargando() {
    return this.driver.findByText("Cargando usuarios conectados...")
  }
  haMostradoListaDeUsuariosConectadosVacia() {
    this.driver.getByText("No hay usuarios conectados...")
  }
  haMostradoJugadorConectado(nombreJugador) {
    const noHayJugadoresConectados = this.driver.queryByText("No hay usuarios conectados...")
    expect(noHayJugadoresConectados).toEqual(null)
    this.driver.getByText(nombreJugador)
  }
  haPedidoQueElijaOtroNombre() {
    this.driver.getByText("Elija otro nombre.")
  }
}

export default Aplication;