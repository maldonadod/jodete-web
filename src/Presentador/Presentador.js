import React from "react"

class Presentador {
  constructor(driver, servicioDeIdentidad) {
    this.driver = driver
    this.servicioDeIdentidad = servicioDeIdentidad
  }
  ingresarAUsuarioAutenticado(nombre) {
    this.driver.render(
      <Bienvenida
        nombre={nombre}
      />
    )
  }
  solicitarIdentidad() {
    const cuandoIngresaNombre = nombre => {
      this.servicioDeIdentidad.crearSesion(nombre, this)
    }
    this.driver.render(
      <IdentidadDelUsuario
        cuandoIngresaNombre={cuandoIngresaNombre}
      />
    )
  }
}

function Bienvenida({nombre}) {
  return (
    <div>Bienvenido {nombre}.</div>
  )
}

function IdentidadDelUsuario({ cuandoIngresaNombre }) {
  const label = "Como es tu nombre ?"
  const [nombre, setNombre] = React.useState("")
  function onChange(e) {
    const value = e.target.value
    setNombre(value)
  }
  return (
    <div>
      <label htmlFor="nombre">{label}</label>
      <input id="nombre" type="text" value={nombre} onChange={onChange} />
      <button onClick={() => cuandoIngresaNombre(nombre)}>Ingresar</button>
    </div>
  )
}

export default Presentador;