class EstablecerConexion {
  constructor(conexion, presenter) {
    this.conexion = conexion
    this.presenter = presenter
  }
  async iniciar(callback) {
    this.presenter.mostrarEstableciendoConexion()
    try {
      const room = await this.conexion.conectar()
      callback(room)
    } catch (error) {
      this.presenter.mostrarConexionFallida(error)
    }
  }
}

export default EstablecerConexion;