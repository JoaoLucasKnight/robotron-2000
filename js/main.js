const robotron = document.querySelector('#robotron')

robotron.addEventListener ("click", dizOi)

function dizOi () {
    alert ("Que foi ?");
}

/*
diminuir.addEventListener("click", () => {manipulaDados("diminuir")})
adionar.addEventListener("click", () => {manipulaDados("adicionar")})

const adionar =  document.querySelector("#adicionar")
const diminuir = document.querySelector("#diminuir")

// .addEventListener = Serve para escutar eventos do tipo click
// para executar um pedaço do codigo é nescessario extrai para uma função 
// Splice serve para tira algo com dois atributos primeiro definir posição segundo a quantidade de item 
*/


//Proxima aula 


const controle = document.querySelectorAll("[data-controle]")

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
       manipulaDados(evento.target.textContent, evento.target.parentNode)
       atualizarPecas(evento.target.dataset.pecas) 
    })
})


function manipulaDados (operador,controle) {
    
    const valor = controle.querySelector("[data-contador]")

    if ( operador === "-" ){
        valor.value =  parseInt(valor.value) -1;
    }else {
        valor.value =  parseInt(valor.value) +1;
    }
}

const pecas = {
        "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

const estatiscas = document.querySelectorAll("[data-estatisticas]") 



function atualizarPecas (peca){
    estatiscas.forEach((elemento)=>{
        elemento.textContent = parseInt(elemento.textContent)  + pecas[peca][elemento.dataset.estatisticas]
    })
}





