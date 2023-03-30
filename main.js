
import { dimeTipoMotor } from "./ejercicios.js/motor.js"
import { esImpar } from "./ejercicios.js/impar.js"
import { añadirParrafo } from "./ejercicios.js/parrafo.js"


document.querySelector('.ejercicio-1').addEventListener('submit', (e) => {
    e.preventDefault()
    dimeTipoMotor()
})

document.querySelector('.ejercicio-2').addEventListener('submit', (e) => {
    e.preventDefault()
    esImpar()
  })


  document.querySelector('.ejercicio-3').addEventListener('submit', (e) => {
    e.preventDefault()
    añadirParrafo()
})


