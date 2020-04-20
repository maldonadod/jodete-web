import ReactDOM from "react-dom";
import "./index.css";
import main from "./CasosUso/main";

const driver = {
  render(tree) {
    ReactDOM.render(tree, document.getElementById("root"));
  }
}

main(driver)