import Presentador from "./Presentador/Presentador"
import Ingresar from "./CasosUso/Ingresar"

async function main(driver, servicioDeIdentidad, servicioJugadoresOnline) {

  const presentador = new Presentador(driver)
  const ingresar = new Ingresar(servicioJugadoresOnline, servicioDeIdentidad, presentador)
  
  servicioJugadoresOnline.observar(servicioDeIdentidad)
  servicioJugadoresOnline.observar(ingresar)
  
  await servicioJugadoresOnline.conectar()
  
  ingresar.iniciar()
}

export default main;