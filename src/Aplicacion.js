import main from "./main"
import ReactTestingLibraryDriver from "./ReactTestingLibraryDriver"

class Aplication {
  constructor(servicioDeIdentidad) {
    this.driver = new ReactTestingLibraryDriver()
    main(this.driver, servicioDeIdentidad)
  }
  haPreguntadoAlUsuarioPorSuIdentidad() {
    this.driver.getByLabelText("Como es tu nombre ?")
  }
  ingresarNombreParaIdentificarAlUsuario(nombre) {
    this.driver.ingresarTexto("Como es tu nombre ?", nombre)
    this.driver.accionarBoton("Ingresar")
  }
  haMostradoMensajeDeBienvenidaPara(nombre) {
    this.driver.getByText(`Bienvenido ${nombre}.`)
  }
}

export default Aplication;