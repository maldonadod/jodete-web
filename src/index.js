import ReactDOM from "react-dom";
import "./index.css";
import main from "./CasosUso/main";
import ColyseusConexion from "./EstablecerConexion/ColyseusConexion";

const conexion = new ColyseusConexion()

const driver = {
  render(tree) {
    ReactDOM.render(tree, document.getElementById("root"));
  }
}

main(driver, conexion)