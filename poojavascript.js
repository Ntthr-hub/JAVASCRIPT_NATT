/*paradigmas, se usa para realizar algo especifico sobre una tarea*/
// estandar que hay que seguir, sel elije una camino , son secuencias ya metodos para llegar a ese objetivo
// PARADIGMA ORIENTADO A OBJETOS

const objetonat = {
  // atributos
  nombre : "natali",
  ci : 9916967, 
  carrera : "sistemas",
  hermanos : ["1a", "2b", "3c"],
  todonat : {
    info : " natali huar",
    edad : 44

  }
}

console.log(objetonat.todonat);
console.log(objetonat["carrera"])

/* ----------------------------------------------*/
 //FUNCIONES CONSTRUCTORAS- te perrmiten tener un molde

function Venta(producto, precio, marca, activo){
  //arguementos opcionales
this.producto = producto,
this.precio = precio,
this.marca = marca
this.activo = activo
}
//llamando a la función
console.log(new Venta("Leche", 7, "Pil", true))
//CLASES
class Usuario{
  constructor (nombre, apellido, correo, activo, profesion){
  //estos arguementos son opcionales
this.a = nombre,
this.b = apellido,
this.c = correo,
this.activo = activo
//this.profesion = profesion

}
//instancias un objeto al usar new, 
// se declara una isntacnia apartir de una clase
/*const natali = new Usuario("Nat","Huar", "nathura@gmail.com", true)
 console.log(natali)*/

 // METODOS 
 presentarse() {
  return `Hola , soy ${this.a} ${this.b} y mi correo es : ${this.c} `
 }
   getA() {
    return this.a
  }
  getB() {
   return this.b
  }
   setA(nuevosnombres){
  
   }


}
//// HERENCIA - metodos y atributos
class PeronNat extends Usuario {
  constructor (nombre, apellido, correo, activo, profesion){
  super(nombre, apellido, correo, activo)
  this.profesion =  profesion
}
}
// ESTO ES PARA LLAMAR A LA CLASE
//const natali = new Usuario("Nat","Huar", "nathura@gmail.com", true)
// console.log(natali)
// console.log(natali.presentarse())

 //ENCONTRAMOS DOS TIPOS DE METODOS GETTERS Y SETTERS
 //GET = obtener
 //SET= dar - asignar
//  console.log(`${natali.getA()} ${natali.getB()}`)
  ///////// HERENCIA LLAMANDO Y HACIENDO CORRER POR CONSOLA

const natali = new PeronNat("Nat","Huar", "nathura@gmail.com", true,"Auditor")
// console.log(natali)
 console.log(natali)
 