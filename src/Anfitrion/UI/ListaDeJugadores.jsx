import React from "react"

function ListaDeJugadores({ nombresJugadores }) {
  return (
    <div data-testid="oponentes">
      {nombresJugadores.map(nombre => {
        return (
          <div key={nombre}>{nombre}</div>
        )
      })}
    </div>
  )
}

export default ListaDeJugadores;