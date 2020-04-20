import React from "react"

function FormularioIdentidad({ ingresarFormulario }) {
  const [nombre, mutarNombre] = React.useState("")
  return (
    <div>
      <label htmlFor="nombre">Cual es tu nombre ?</label>
      <input id="nombre" type="text" value={nombre} onChange={(e) => mutarNombre(e.target.value)} />
      <button onClick={() => ingresarFormulario(nombre)}>Ingresar</button>
    </div>
  )
}

export default FormularioIdentidad