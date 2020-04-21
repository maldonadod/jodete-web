import React from "react"
import "./FormularioIdentidad.css"

function FormularioIdentidad({ ingresarFormulario, mensajeNombreInvalido }) {
  const [nombre, mutarNombre] = React.useState("")
  return (
    <div className="formulario-de-identidad">
      {mensajeNombreInvalido && <div>{mensajeNombreInvalido}</div>}
      <div className="form">
        <label htmlFor="nombre">Cuál es tu nombre ?</label>
        <input autoFocus id="nombre" type="text" value={nombre} onChange={(e) => mutarNombre(e.target.value)} />
        <button className="boton-ingresar" onClick={() => ingresarFormulario(nombre)}>Ingresar</button>
      </div>
    </div>
  )
}

export default FormularioIdentidad;