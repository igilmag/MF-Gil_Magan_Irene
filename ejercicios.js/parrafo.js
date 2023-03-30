'use strict'

export function añadirParrafo() {
    const p = document.createElement('p')
    p.setAttribute('class', 'miParrafo')
    p.innerHTML = `Irene Gil Magán`
    document.body.appendChild(p)
}




