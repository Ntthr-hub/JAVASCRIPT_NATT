export default class Curso {
    constructor(nombre, poster, clases){
     this.nombres = nombre
     this.posters = poster
     this.clases = clases
     this.inscritos = []// inicamos con un array vacio
    // inscritos isn necesidad de iniciar de los parametros del constructor
    }

// crearemos los metodos
 getNombre(){
    return this.nombres
 }

 getPoster(){
    return this.posters
 }
getClases(){
    return this.clases
 }
 getInscritos() {
    return this.inscritos
}
 setNombre(nombre){
    this.nombres = nombre
 }
setPoster(poster){
    this.posters= poster
 }
 setClases(clases){
    this.clases = clases
 }
 setInscritos(lista) {
    this.inscritos = lista
}

}