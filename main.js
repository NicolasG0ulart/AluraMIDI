function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if(elemento === null){
        // alert('Elemento não encontrado')
        console.log('Elemento não encontrado')
    }else{
        elemento.play();
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for(let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const IdAudio = `#som_${instrumento}`
    
    tecla.onclick = function (){ 
        tocaSom(IdAudio)
    }

    tecla.onkeydown = function (event){
        
        if(event.code === 'Space' || event.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}
