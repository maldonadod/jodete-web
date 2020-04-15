import Presentador from "./Presentador/Presentador"

function main(driver, servicioDeIdentidad, servicioJugadoresConectados) {
  const presentador = new Presentador(driver, servicioJugadoresConectados)
  servicioDeIdentidad.autorizar(presentador)
}

export default main;