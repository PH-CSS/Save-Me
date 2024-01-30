const BotaoPlayPause = document.getElementById('play-pause')
const audioCapitulo = document.getElementById('audio-capitulo')

const NumeroCapitulos = 10;
let MusicaPlayPause = 0;


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


BotaoPlayPause.addEventListener('click', TocarOuPausar);




