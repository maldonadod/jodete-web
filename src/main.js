import Presentador from "./Presentador/Presentador"

function main(driver, servicioDeIdentidad, servicioJugadoresOnline) {
  const presentador = new Presentador(driver, servicioJugadoresOnline)
  servicioDeIdentidad.autorizar(presentador)
}

export default main;