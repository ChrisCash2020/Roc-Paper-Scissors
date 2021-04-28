const text = document.querySelector('.fancy');
const stringText = text.textContent;
const splitText = stringText.split('');
text.textContent = '';
for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += '<span>' + splitText[i] + '</span>';
}
let char = 0;
let timer = setInterval(onTick, 50);
function onTick() {
  const span = text.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++;
  if (char === splitText.length) {
    complete();
    return;
  }
}
function complete() {
  const hide = document.querySelector('#hide');
  const fade = document.querySelector('.fadetwo');
  clearInterval(timer);
  timer = null;
  hide.style.position = 'absolute';
  hide.style.left = '-9999px';
  fade.style.opacity = '1';
}

let userChosen;
let computerChosen;
let pScore = 0;
let cScore = 0;
var result = results();
const displayResult = document.getElementById('result');
// const randomNumber = Math.floor(Math.random() * 3);
const possibleChoices = document.querySelectorAll('.choices');

possibleChoices.forEach((possibleChoices) =>
  possibleChoices.addEventListener('click', (e) => {
    userChosen = e.target.id;
    generatedComputerChoice();
    results(this.textContent, computerChosen);
    displayResult.innerHTML = result;
  })
);

function generatedComputerChoice() {
  const randomNumber = Math.round(Math.random() * 2);
  if (randomNumber === 0) {
    return (computerChosen = 'rock');
  } else if (randomNumber === 1) {
    return (computerChosen = 'paper');
  } else if (randomNumber === 2) {
    return (computerChosen = 'scissors');
  }
}
const updateScore = () => {
  const playerScore = document.querySelector('.player-score b');
  const computerScore = document.querySelector('.computer-score b');
  playerScore.textContent = pScore;
  computerScore.textContent = cScore;

  if (pScore === 5) {
    return youWon();
  } else if (cScore === 5) {
    return youLost();
  }
};

function results() {
  if (userChosen === 'rock' && computerChosen === 'paper') {
    result = 'You Lost';
    cScore++;
    updateScore();
    return;
  } else if (userChosen === 'rock' && computerChosen === 'scissors') {
    result = 'You Win!';
    pScore++;
    updateScore();
    return;
  } else if (userChosen === 'rock' && computerChosen === 'rock') {
    result = "It's a tie";
    return;
  } else if (userChosen === 'paper' && computerChosen === 'paper') {
    result = "It's a tie";
    return;
  } else if (userChosen === 'paper' && computerChosen === 'scissors') {
    result = 'You Lost';
    cScore++;
    updateScore();
    return;
  } else if (userChosen === 'paper' && computerChosen === 'rock') {
    result = 'You Win!';
    pScore++;
    updateScore();
    return;
  } else if (userChosen === 'scissors' && computerChosen === 'paper') {
    result = 'You Win!';
    pScore++;
    updateScore();
    return;
  } else if (userChosen === 'scissors' && computerChosen === 'scissors') {
    result = "It's a tie";
    return;
  } else if (userChosen === 'scissors' && computerChosen === 'rock') {
    result = 'You Lost';
    cScore++;
    updateScore();
    return;
  }
}

function youWon() {
  const bg = document.querySelector('body');
  const fadetwo = document.querySelector('.fadetwo');
  const heading = document.querySelector('.heading');
  const hidetwo = document.querySelector('.hidetwo');
  const h = document.querySelector('html');
  fadetwo.style.position = 'absolute';
  fadetwo.style.left = '-9999px';
  heading.innerHTML = 'Congrats';
  heading.style.textShadow = '3px 3px 1px #949494';
  bg.style.animation = 'none';
  hidetwo.style.position = 'static';
  h.style.boxShadow = 'inset 0px 20px 60px gold';
}
var mySong = document.getElementById('mySong');
var icon = document.getElementById('icon');

icon.onclick = function () {
  if (mySong.paused) {
    mySong.play();
    icon.src = './Robo-img1/pause.png';
  } else {
    mySong.pause();
    icon.src = './Robo-img1/play.png';
  }
};

function youLost() {
  const bg = document.querySelector('body');
  const fadetwo = document.querySelector('.fadetwo');
  const heading = document.querySelector('.heading');
  const h = document.querySelector('html');
  const blood = document.querySelector('.blood');
  const song = document.querySelector('#play-audio');
  fadetwo.style.position = 'absolute';
  fadetwo.style.left = '-9999px';
  heading.style.position = 'absolute';
  heading.style.left = '-9999px';
  bg.style.animation = 'none';
  h.style.boxShadow = 'inset 0px 20px 60px #fc0000';
  blood.innerHTML = 'Game Over';
  song.style.position = 'absolute';
  song.style.left = '-9999px';
}
