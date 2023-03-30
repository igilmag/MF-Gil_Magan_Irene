'use strict'

export function esImpar() {
  let numeroImpar = document.querySelector('#numero-impar')
  let mensajeImpar = document.querySelector('#mensaje-impar')
  let expReg = /^[0-9]*$/
  let numero = numeroImpar.value

  if (expReg.test(Number(numero)) && numero > 0) {
    if (Number(numero) % 2 === 0) {
      mensajeImpar.innerHTML = `El número ${numero} NO es impar`
    } else {
      mensajeImpar.innerHTML = `El número ${numero} SÍ es impar`
    }
  } else {
    mensajeImpar.innerHTML = `Formato no aceptado`
    return
  }
}




