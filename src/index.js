import ReactDOM from "react-dom";
import ServicioDeIdentidad from "./Identidad/ServicioDeIdentidad";
import "./index.css";
import main from "./main";

class ServicioJugadoresConectados {
  constructor() {
    this.observadores = []
    this.jugadores = []
  }
  agregarObservador(presenter) {
    this.observadores.push(presenter)
    setTimeout(() => {
      presenter.actualizarUsuariosConectados(this.jugadores)
      setTimeout(() => {
        this.jugadores.push({
          nombre: "pepito"
        }, {
          nombre: "menganito"
        })
        presenter.actualizarUsuariosConectados(this.jugadores)
      }, 1000)
    }, 1000)
  }
}

const driver = {
  render(tree) {
    ReactDOM.render(tree, document.getElementById("root"));
  }
}

main(driver, new ServicioDeIdentidad(), new ServicioJugadoresConectados())