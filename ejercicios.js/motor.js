'use strict'

export function dimeTipoMotor() {

    let input = document.querySelector('#tipo-motor')
    let mensajeMotor = document.querySelector('#mensaje-motor')
    switch (Number(input.value)) {

        case 0:
            mensajeMotor.innerHTML = `No hay establecido un valor definido para el tipo de bomba.`
            break

        case 1:
            mensajeMotor.innerHTML = `La bomba es una bomba de agua.`
            break

        case 2:
            mensajeMotor.innerHTML = `La bomba es una bomba de gasolina.`
            break

        case 3:
            mensajeMotor.innerHTML = `La bomba es una bomba de hormigón.`
            break

        case 4:
            mensajeMotor.innerHTML = `La bomba es una bomba de pasta alimenticia.`
            break

        default:
            mensajeMotor.innerHTML = `No existe un valor válido para tipo de bomba.`
            break
    }


}






