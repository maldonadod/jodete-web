class ServicioDeIdentidad {
  autorizar(presenter) {
    presenter.solicitarIdentidad(this)
  }
  crearSesion(nombre, presenter) {
    presenter.ingresarAUsuarioAutenticado(nombre)
  }
}

export default ServicioDeIdentidad;