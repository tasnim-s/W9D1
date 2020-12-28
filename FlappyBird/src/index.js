import FlappyBird from './game';
// window.alert('Webpack Running');
const canvas = document.getElementById('bird-game');
const game = new FlappyBird(canvas);
game.restart();