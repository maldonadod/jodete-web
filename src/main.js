import Presentador from "./Presentador/Presentador"
import Ingresar from "./CasosUso/Ingresar"

async function main(driver, servicioDeIdentidad, servicioJugadoresOnline) {

  const presentador = new Presentador(driver)
  await servicioJugadoresOnline.conectar(new Ingresar(servicioJugadoresOnline, servicioDeIdentidad, presentador))
}

export default main;