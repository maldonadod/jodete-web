import Aplicacion from "./Aplicacion"

describe("Ingresa al sistema proveyendo su nombre", () => {
  it("debe dar la bienvenida al usuario", async () => {

    const nombre = "jorge"

    const app = new Aplicacion()

    await app.haMostradoFormularioDeIdentidad()
    
    app.ingresarIdentidad(nombre)

    await app.haMostradoBienvenidaPara(nombre)
  })
})