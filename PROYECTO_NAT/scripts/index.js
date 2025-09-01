// este sera el puntero, donde todo va a correr
// alert("hola desde index")

import Curso from "../clases/curso.js"

// instanciamos objetos de la clase curso
const javascripts = new Curso(
  "JAVASCRIPT Nivel1 Intermedio", 
  "https://cursoscortos.posgradoupea.edu.bo/assets/img/banner_cursos/JAVASCRIP_V8_2025_08_08_16_10_01.jpeg", 
  6
)

const typescript = new Curso(
  "TYPESCRIPT desde cero", 
  "https://cursoscortos.posgradoupea.edu.bo/assets/img/banner_cursos/React%20_V4_2025_08_22_16_44_43.jpeg", 
  1
)

const elemCursos = document.getElementById("cursos")

// Función que imprime un curso en el DOM
function mostrarCurso(curso) {
  const div = document.createElement("div")
  div.classList.add("card")
  div.innerHTML = `
    <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img src="${curso.getPoster()}" alt="${curso.getNombre()}"/>
    </div>
    <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 class="t5 s-mb-2 s-center">${curso.getNombre()}</h3>
      <span>Cantidad de Clases: ${curso.getClases()}</span>
    </div>
  `
  elemCursos.appendChild(div)
}

// Mostrar los cursos precargados
mostrarCurso(javascripts)
mostrarCurso(typescript)

// Manejar el formulario (si existe en tu HTML)
const formulario = document.getElementById("formCursos")
if(formulario){
  formulario.addEventListener("submit", e => {
    e.preventDefault()
    const target = e.target
    const curso = new Curso(
      target.nombreCurso.value,
      target.posterCurso.value,
      Number(target.clasesCurso.value)
    )
    mostrarCurso(curso) // se agrega al instante al DOM
    formulario.reset()
  })
}
