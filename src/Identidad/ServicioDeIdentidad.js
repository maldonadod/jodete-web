class ServicioDeIdentidad {
  autorizarIngreso(ingresar) {
    ingresar.solicitarIdentidad()
  }
  actualizarJugadoresOnline(jugadoresOnline) {
    this.jugadoresOnline = jugadoresOnline.map(jugador => jugador.nombre)
  }
  crearSesion(nombre, ingresar) {
    if (this.jugadoresOnline.includes(nombre)) {

      ingresar.solicitarOtroNombre(nombre)
    } else {

      ingresar.ingresoAutorizado({
        nombre
      })
    }
  }
}

export default ServicioDeIdentidad;