import Aplicacion from "./Aplicacion"
import ServicioDeIdentidad from "./Identidad/ServicioDeIdentidad"

describe("cuando el usuario llega a la pagina principal y no tiene autorizacion", () => {
  it("se le debe preguntar su identidad (nombre)", () => {
    const app = new Aplicacion(new ServicioDeIdentidad())
    app.haPreguntadoAlUsuarioPorSuIdentidad()
  })
})

describe("cuando el usuario provee su nombre para identificarlo", () => {
  it("se le permite ingresar a la sala y muestra mensaje de bienvenida", () => {
    const NOMBRE = "jorge"
    const app = new Aplicacion(new ServicioDeIdentidad())
    app.ingresaNombreParaAutenticarse(NOMBRE)
    app.haMostradoMensajeDeBienvenidaPara(NOMBRE)
  })
})