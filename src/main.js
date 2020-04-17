import Presentador from "./Presentador/Presentador"
import Ingresar from "./CasosUso/Ingresar"

function main(driver, servicioDeIdentidad, servicioJugadoresOnline) {

  const presentador = new Presentador(driver)
  new Ingresar(servicioJugadoresOnline, servicioDeIdentidad, presentador).iniciar()
}

export default main;