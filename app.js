'use strict'

const botaoMostrarNumeros = document.getElementById('botao-mostrar-numeros')
const botaoMostrarNumerosPares = document.getElementById('botao-mostrar-numeros-pares')
const botaoMostrarNumerosMultiplicados = document.getElementById('botao-mostrar-numeros-multiplicados')
const botaoMostrarNumerosÍmpares = Document.getElementById('botao-mostrar-numeros-impares')
const botaoMostrarNumerosMultiplos3e5 = document.getElementById('botao-container-mostrar-numeros-multiplos-3e5')
const botaoMostrarNumerosMultiplos5e3 = document.getElementById('botao-container-mostrar-numeros-multiplos-5e3')

function containermostrarnumeros(){
    const numeros = document.getElementById('numeros').value.split(',')
    const ultimoI = numeros.length
    const container = document.getElementById('container-mostrar-numeros')

    container.replaceChildren('')
    for(let i=0; i < ultimoI; i++){
        const novoSpan = document.createElement('span')
        novoSpan.textContent = numeros[i]
        container.appendChild(novoSpan)
    }
}
function mostrarNumerosPares(){
    const numeros = document.getElementById('numeros').value.split(',')
    const ultimoI = numeros.length
    const container = document.getElementById('container-mostrar-numeros-pares')

    container.replaceChildren('')
    for(let i=0; i < ultimoI; i++){
        if(numeros[i]% 2 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[i]
            container.appendChild(novoSpan)
        }
    }
}

function mostrarNumerosMultiplicados(){
    const numeros = document.getElementById('numeros').value.split(',')
    const ultimoI = numeros.length
    const container = document.getElementById('container-mostar-numeros-multiplicados')

    container.replaceChildren('')
    for(let i=0; i < ultimoI; i++){
            numeros[1] = numeros[1] *3
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[i]
            container.appendChild(novoSpan)
        
    }
}

function mostrarNumerosMultiplos3e5(){
    const numeros = document.getElementById('numeros').value.split(',')
    const ultimoI = numeros.length
    const container = document.getElementById('container-mostar-numeros-multiplicados')

    container.replaceChildren('')
    for(let i=0; i < ultimoI; i++){
            numeros[1] = numeros[1] *3
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[i]
            container.appendChild(novoSpan)
        
    }
}

function mostrarNumerosMultiplos5e3(){
    const numeros = document.getElementById('numeros').value.split(',')
    const ultimoI = numeros.length
    const container = document.getElementById('container-mostar-numeros-multiplicados')

    container.replaceChildren('')
    for(let i=0; i < ultimoI; i++){
            numeros[1] = numeros[1] *3
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[i]
            container.appendChild(novoSpan)
        
    }
}
function mostrarNumerosPrimos(){
    const numeros = document.getElementById('numeros').value.split(',')
    const ultimoI = numeros.length
    const container = document.getElementById('container-mostar-numeros-multiplicados')

    container.replaceChildren('')
    for(let i=0; i < ultimoI; i++){
            numeros[1] = numeros[1] *3
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[i]
            container.appendChild(novoSpan)
        
    }
}

function botaoMostrarNumerosImpares

botaoMostrarNumeros.addEventListener('click', mostarNumeros)
botaoMostrarNumerosPares.addEventListener('click', mostarNumerosPares)
botaoMostrarNumerosMultiplicados.addEventListener('click', mostarNumerosMultiplicados)
botaoMostrarNumerosÍmpares.addEventListener('click', MostrarNumerosImpares)
botaoMostrarNumerosMultiplos3e5.addEventListener('click', MostrarNumerosMultiplos3e5)
botaoMostrarNumerosMultiplos5e3.addEventListener('click', MostrarNumerosMultiplos3e5)