class ServicioDeIdentidad {
  autorizarIngreso(ingresar) {
    ingresar.solicitarIdentidad()
  }
  crearSesion(nombre, ingresar, usuariosRegistrados = []) {
    if (usuariosRegistrados.includes(nombre)) {

      ingresar.solicitarOtroNombre(nombre)
    } else {

      ingresar.ingresoAutorizado({
        nombre
      })
    }
  }
}

export default ServicioDeIdentidad;