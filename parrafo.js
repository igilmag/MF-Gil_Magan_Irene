'use strict'

function createParagraph () {
    const p = document.createElement('p')
    p.setAttribute('class', 'miParrafo')
    p.innerHTML = `Irene Gil Magán`
    document.body.appendChild(p)
}

document.querySelector('#btn1')
.addEventListener('click',createParagraph)

