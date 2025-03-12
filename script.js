const html = document.querySelector('html');

const image = document.querySelector('.app__image');

const title = document.querySelector('.app__title');

const timer = document.querySelector('#timer');

const duracaoFoco = 1500; 
const duracaoDescansoCurto = 300; 
const duracaoDescansoLongo = 900; 

const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const iniciarBt = document.querySelector('#start-pause');

focoBt.addEventListener('click', () => {
  html.setAttribute('data-contexto', 'foco');
});

curtoBt.addEventListener('click', () => {
  html.setAttribute('data-contexto', 'descanso-curto');
});

longoBt.addEventListener('click', () => {
  html.setAttribute('data-contexto', 'descanso-longo');
});

startBt.addEventListener('click', () => {

})