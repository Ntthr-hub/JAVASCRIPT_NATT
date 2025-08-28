//console.log( "saludos desde vc code")
alert( "saludos desde vc code")
// hacer comentarios en una linea
/* hacer comentarios para muchas lineas*/
/** comentarios
 * hace la diferencia
 */
// control + shift comenta a muchas lineas marcadas

// TIPOS DE DATOS
 console.log( typeof 20) // para saber que tipo de datyo es
// COLECCION DE DATOS -ARRAYS - ARREGLO 
//tienen un identificador +caracterizticas+ y un valor
console.log(typeof ["NAT1", "NAT2", "NAT3", "NAT4"]); 
console.log(typeof [1, 2, 3, 4, 5]); 

// ejemplo de objeto

// null es un objeto pero no tiene identificadores mi valor
// DECLARACION Y ASIGNACION
//var natali = "NATALI HUAR "
let natali = "NATALI HUAR2"
console.log(natali)
// cambio de valores a una varibale
 let nat = "panda"
 let maribel = nat
 // cambiamos el valor de nat
 nat = "pil" // solo cambia nat a amribel no le afecta
 //por mas que sea maribel = nat
 maribel = "pilfrut"
 console.log(nat)
 console.log(maribel)

 // CONSTANTES
 const natali_huar = "persona"

// CLASE 8/20/2025
// operaciones aritmeticas
let a = 5
let b = 6

console.log(a+b)
// operaciones de asignación
a**=b // la operación es 5^6 y eso se almacena en a

// concatenación lo realizas con el +
nombre = "natali"
apellido = "huarachi"
nombreCompleto = nombre + " "+ apellido
console.log(nombreCompleto)

let backstike= `Me llamo ${nombre} y mi apellido es ${apellido}`
console.log(backstike)
// OPERADORES DE COMPARACIÓN
let c = 10
let d = 20
console.log(d == c)
/** Es igual ==
 *  Es estrictamente igual ===
 *  Es diferente !=
 *  Es estrictamente diferente !==
 *  Mayor que >=
 *  Menor que <=
 */
/**OPERADORES LÓGICOS
 * and &&
 * or ||
 */
 
// condicionales
let edad = 18
let persona = "natali huar"
if (edad > 18 && edad < 100){
    console.log(`${persona} es mayor de edad `)
}
 if ( edad < 18 && edad >0){
    console.log(`${persona} Eres menor de edad`)
 } else {
    console.log(`${persona} Legalmente eres mayor de edad `)
 }

 // SWITCH - CASE
 personalidad = "enojado"
 switch (personalidad){
    case "alegre" :
        console.log("eres alegria")
        break
    case "disgusto" :
        console.log("eres desagrado")
        break
    default:
        console.log(" eres furia")
 }

 // CICLOS LOOPS O BUCLES
 // for 
 //FUNCIONES DE PRIMERA CLASE
 function natlinombre (nombre , apellido){
    return `${nombre} ${apellido}`
 }
 let natalillamar = natlinombre// con () saldria undefined xq guardaria la ejecución de la función
 console.log(natalillamar ("natali","huarachi"))

// FUNCIONES ANONIMAS
let sumar = function(a, b, c){
    return a*b*c
}
let resultofadd= sumar( 2, 4, 1)
console.log(resultofadd)

/*(function(a, b, c){
    console.log(a+b+c)
}(1, 1, 4)) */// declaras la función y al mismo tiempo la ejecutas
// esta función anonima se realizaba en los inicios de la progra
//FUNCIONES CON CONSTANTES
const hoby = function(serie){

    console.log(`La serie es : ${serie}`)
}
 console.log(hoby)
 // usamos constate ya que la función no va cambiar talvez si 
 //los valores que devuelva pero la fuunción en NO

// COLLECIÓN DE DATOS
// arrays
// 1er emtodo nos permite agregar metodos al array
 let amigues = ["diana", "lucas", "robert"]
 console.log(amigues)
//amigues.push("natali") // incorpora un nuevo elemento
let dato = amigues.slice(0, 2)
 console.log(dato)
 // FOR EACH
 amigues.forEach(amigue=> console.log(amigue))
 let datoo = amigues.map(amigue=> `HOLI ${amigue}`)
 console.log(amigues)
 console.log(datoo)
 //foreach esta descontinuado . map es el más utilizado hoy en día
 // .MAP te devuelve un array nuevo osea manejas dos arrays 
 // filter  te devuelve un nuevo array sin afectar el anterior
 //filtra los metodos de una array segun una comparación
 //find , includes, some , every
 // include es igual , encambio some se puede comparar
 // cevery compara que todos los datos cumplan con una condición
 