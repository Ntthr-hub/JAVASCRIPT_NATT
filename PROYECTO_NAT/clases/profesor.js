import Usuario from "./usuario.js"

export default class Profesor extends Usuario {
  constructor(nombres, apellidos, correo, activo, cursosDictados = [], calificacion = 0) {
    super(nombres, apellidos, correo, activo)
    this.cursosDictados = cursosDictados
    this.calificacion = calificacion
  }

  getCursosDictados() {
    return this.cursosDictados
  }

  agregarCursoDictado(curso) {
    this.cursosDictados.push(curso)
  }

  getCalificacion() {
    return this.calificacion
  }

  setCalificacion(nuevaCalificacion) {
    this.calificacion = nuevaCalificacion
  }
}
