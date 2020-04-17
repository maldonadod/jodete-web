class ServicioDeIdentidad {
  constructor() {
    this.usuariosRegistrados = []
  }
  autorizarIngreso(ingresar) {
    ingresar.solicitarIdentidad()
  }
  crearSesion(nombre, ingresar) {
    if (this.usuariosRegistrados.includes(nombre)) {

      ingresar.solicitarOtroNombre(nombre)
    } else {

      ingresar.ingresoAutorizado(nombre)
    }
  }
  registrarUsuario(nombre) {
    this.usuariosRegistrados.push(nombre)
  }
}

export default ServicioDeIdentidad;