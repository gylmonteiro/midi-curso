function tocarSom (idElementAudio) {
    const elemento = document.querySelector(idElementAudio)
    
    if (elemento != null && elemento.localName === 'audio'){
        elemento.play()
    }
    else {
        console.log('Comando inválido')
    }
    
}

const listaDeTeclas = document.querySelectorAll(".tecla")


for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla =  listaDeTeclas[contador]
    const classTecla = tecla.classList[1]

    // Template string
    const idAudioCompleto = `#som_${classTecla}`

    tecla.onclick = function () {
        tocarSom(idAudioCompleto);
    }

    
    tecla.onkeydown = function (evento) {
        if(evento.code == 'Enter' || evento.code == 'Space'){

            tecla.classList.add('ativa')
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
    }
