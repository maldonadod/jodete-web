import ReactDOM from "react-dom";
import ServicioDeIdentidad from "./Identidad/ServicioDeIdentidad";
import "./index.css";
import main from "./main";
import ServicioJugadoresOnline from "./JugadoresOnline/ServicioJugadoresOnline";
import RoomFactory from "./JugadoresOnline/RoomFactory";

const driver = {
  render(tree) {
    ReactDOM.render(tree, document.getElementById("root"));
  }
}



main(driver, new ServicioDeIdentidad(), new ServicioJugadoresOnline(new RoomFactory()))