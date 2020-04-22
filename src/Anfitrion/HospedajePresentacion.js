import React from "react"
import Bienvenida from "./UI/Bienvenida"
import ListaDeJugadores from "./UI/ListaDeJugadores"

class HospedajePresentacion {
  constructor(ui) {
    this.ui = ui
  }
  mostrarBievenida(nombre) {
    this.ui.render(
      <div>
        <Bienvenida nombre={nombre} />
      </div>
    )
  }
  mostrarOponentes(nombre, jugadoresOnline) {
    const oponentes = excluirJugadorPorNombre(nombre, jugadoresOnline)
    this.ui.render(
      <div>
        <Bienvenida nombre={nombre} />
        <ListaDeJugadores nombresJugadores={oponentes} />
      </div>
    )
  }
}

function excluirJugadorPorNombre(nombre, jugadoresOnline) {
  return jugadoresOnline.reduce((acc, jugador) => {
    if (jugador.nombre !== nombre) {
      return [...acc, jugador.nombre]
    }
    return acc
  }, [])
}

export default HospedajePresentacion;