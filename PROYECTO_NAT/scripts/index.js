// este sera el puntero , donde todo va correr
//alert("hola desde index")

import Curso from "../clases/curso.js"
// instanaciamos objetos de la clase curso
const javascripts = new Curso("JAVASCRIPT Nivel1 Intermedio", "https://cursoscortos.posgradoupea.edu.bo/assets/img/banner_cursos/JAVASCRIP_V8_2025_08_08_16_10_01.jpeg", 6)
const typescript = new Curso("TYPESCRIPT desde cero", "https://cursoscortos.posgradoupea.edu.bo/assets/img/banner_cursos/React%20_V4_2025_08_22_16_44_43.jpeg", 1)
const elemnat = document.getElementById("cursos")
// imprime un curso en el dom , recibiendo el poster nombre y cantidad
function natmostrandoCursos( cursopedir){
const natalibaby = document.createElement("div")
natalibaby.classList.add("card")
natalibaby.innerHTML= `
<div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
<img src = "${cursopedir.getPoster()}" alt= "${Curso.getNombre}"/>
</div>
<div class="card__data s-border s-radius-br s-radius-bl s-pxy-2"></div>
<h3class="t5 s-mb-2 s-center">${cursopedir.getNombre()}</h3>
<span> Cantidad de Clases : ${cursopedir.getClases()}</span>
`
elemnat.appendChild (natalibaby)// tendremos un dic para cada curso con el natalibaby

}
// lalamaos a la fución natmostrandoCursos
natmostrandoCursos(javascripts)
natmostrandoCursos(typescript)

