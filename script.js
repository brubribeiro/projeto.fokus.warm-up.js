const html = document.querySelector('html');

const image = document.querySelector('.app__image');

const title = document.querySelector('.app__title');

const timer = document.querySelector('#timer');

const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const iniciarBt = document.querySelector('#start-pause');
const buttons = document.querySelectorAll('.app__card-button');

const musicFocoInput = document.querySelector('#alternar-musica');

const music = new Audio('/sons/luna-rise-part-one.mp3');

const duracaoFoco = 1500;
const duracaoDescansoCurto = 300;
const duracaoDescansoLongo = 900;

music.loop = true;

focoBt.addEventListener('click', () => {
  changeContexto('foco');
  focoBt.classList.add('active');
});

curtoBt.addEventListener('click', () => {
  changeContexto('descanso-curto');
  curtoBt.classList.add('active');
});

longoBt.addEventListener('click', () => {
  changeContexto('descanso-longo');
  longoBt.classList.add('active');
});

musicFocoInput.addEventListener('change', () => {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
});

function changeContexto(contexto) {
  html.setAttribute('data-contexto', contexto);
  image.setAttribute('src', `/imagens/${contexto}.png`);
  buttons.forEach(function (bt) { 
    bt.classList.remove('active') 
  });

  switch (contexto) {
    case "foco":
      title.innerHTML = `Otimize sua produtividade,<br><strong class='app__title-strong'>mergulhe no que importa.</strong>`;
      break;

    case "descanso-curto":
      title.innerHTML = `Que tal dar uma respirada?<br><strong class='app__title-strong'>Faça uma pausa curta!</strong>`;
      break;

    case "descanso-longo":
      title.innerHTML = `Hora de voltar à superfície.<br><strong class='app__title-strong'>Faça uma pausa longa.</strong>`;
      break;
  }
}