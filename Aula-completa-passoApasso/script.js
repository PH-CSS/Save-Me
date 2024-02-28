const BotaoPlayPause = document.getElementById('play-pause');
const audioCapitulo = document.getElementById('audio-capitulo');
const botaoProximaFaixa = document.getElementById('proximo');
const botaoFaixaAnterior = document.getElementById('anterior')
const nomeCapitulo = document.getElementById("capitulo");

const NumeroCapitulos = 10;
let MusicaPlayPause = 0;
let capituloAtual = 1;

function tocarFaixa() {
    audioCapitulo.play();
        BotaoPlayPause.classList.remove('bi-play-circle-fill');
        BotaoPlayPause.classList.add('bi-pause-circle-fill');
}


function pausarFaixa() {
    audioCapitulo.pause();
     BotaoPlayPause.classList.add('bi-play-circle-fill');
        BotaoPlayPause.classList.remove('bi-pause-circle-fill');
}

function TocarOuPausar() {  
    if (MusicaPlayPause === 0 ){

    tocarFaixa();
    MusicaPlayPause = 1;

} else{

        pausarFaixa();
        MusicaPlayPause = 0;

    }
}




function proximaFaixa() {
    
    if (capituloAtual=== NumeroCapitulos) {
        capituloAtual = 1;
    }   else{     
        capituloAtual = capituloAtual + 1;
    }
    
    audioCapitulo.src = 'Aula-completa-passoApasso/books/dom-casmurro/' + capituloAtual +'.mp3';
    nomeCapitulo.innerText = "Foi para o Capítulo " + capituloAtual;
}


function faixaAnterior() {
    
    if (capituloAtual == 1) {

        capituloAtual = NumeroCapitulos;

    }   else{     
        capituloAtual = capituloAtual - 1;
    }
    
    audioCapitulo.src = 'Aula-completa-passoApasso/books/dom-casmurro/' + capituloAtual +'.mp3';
    nomeCapitulo.innerText = "Voltou para Capítulo " + capituloAtual;
    
}



        BotaoPlayPause.addEventListener('click', TocarOuPausar);

        botaoProximaFaixa.addEventListener('click', proximaFaixa);

        botaoFaixaAnterior.addEventListener('click', faixaAnterior);



