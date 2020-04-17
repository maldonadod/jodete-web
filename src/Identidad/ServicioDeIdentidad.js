class ServicioDeIdentidad {
  autorizarIngreso(ingresar) {
    ingresar.solicitarIdentidad()
  }
  crearSesion(nombre, ingresar) {
    ingresar.ingresoAutorizado(nombre)
  }
}

export default ServicioDeIdentidad;