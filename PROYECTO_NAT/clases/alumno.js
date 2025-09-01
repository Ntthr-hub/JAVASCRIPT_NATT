import Usuario from "./usuario.js"

export default class Alumno extends Usuario {
  constructor(nombres, apellidos, correo, activo, cursosTomados = []) {
    super(nombres, apellidos, correo, activo)
    this.cursosTomados = cursosTomados
  }

  getCursosTomados() {
    return this.cursosTomados
  }

  agregarCursoTomado(curso) {
    this.cursosTomados.push(curso)
  }
}
