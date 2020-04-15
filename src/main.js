import Presentador from "./Presentador/Presentador"

function main(driver, servicioDeIdentidad) {
  const presentador = new Presentador(driver, servicioDeIdentidad)
  servicioDeIdentidad.autorizar(presentador)
}

export default main;