import React from "react"

function UsuariosConectados({ jugadores = [] }) {
  return jugadores.length === 0
  ? (
    <NoHayJugadoresConectados />
  ) : <JugadoresConectados jugadores={jugadores} />
}

function NoHayJugadoresConectados() {
  return (
    <div>No hay usuarios conectados...</div>
  )
}
function JugadorConectado({ jugador }) {
  return (
    <div>{jugador.nombre}</div>
  )
}
function JugadoresConectados({ jugadores }) {
  return jugadores
    .map(jugador => (
      <JugadorConectado key={jugador.nombre} jugador={jugador} />
    ))
}

export default UsuariosConectados;