class ServicioDeIdentidad {
  autorizar(presenter) {
    presenter.solicitarIdentidad()
  }
  crearSesion(nombre, presenter) {
    presenter.ingresarAUsuarioAutenticado(nombre)
  }
}

export default ServicioDeIdentidad;