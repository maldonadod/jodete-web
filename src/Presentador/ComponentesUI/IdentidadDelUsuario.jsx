import React from "react";

function IdentidadDelUsuario({ cuandoIngresaNombre }) {
  const label = "Como es tu nombre ?";
  const [nombre, setNombre] = React.useState("");
  function onChange(e) {
    const value = e.target.value;
    setNombre(value);
  }
  return (
    <div>
      <label htmlFor="nombre">{label}</label>
      <input id="nombre" type="text" value={nombre} onChange={onChange} />
      <button onClick={() => cuandoIngresaNombre(nombre)}>Ingresar</button>
    </div>
  );
}

export default IdentidadDelUsuario