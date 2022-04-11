var player, winner = null; 
var selectPlayer = document.getElementById('select-player');
var selectWinner = document.getElementById('select-winner');
var squares = document.getElementsByClassName('square');

changePlayer('X')

function squareHash(id) {

  var square = document.getElementById(id);
  if(square.innerHTML !== '-') { // Condição para que só haja uma letra
    return;
  }
 
  square.innerHTML = player;
  square.style.color = '#000';

  if(player === 'X') { // Condição para para a escolha da letra de cada jogador
    player = 'O';
  } else {
    player = 'X';
  }

  changePlayer(player);
  checkWinner();
}

function changePlayer(valor){
  player = valor;
  selectPlayer.innerHTML = player;
}

function checkWinner() {
  var square1 = document.getElementById(1);
  var square2 = document.getElementById(2);
  var square3 = document.getElementById(3);
  var square4 = document.getElementById(4);
  var square5 = document.getElementById(5);
  var square6 = document.getElementById(6);
  var square7 = document.getElementById(7);
  var square8 = document.getElementById(8);
  var square9 = document.getElementById(9);

  if(checkSequence(square1, square2, square3)) {
    changeColor(square1, square2, square3);
    changerWinner(square1); 
  }

  if(checkSequence(square4, square5, square6)) {
    changeColor(square4, square5, square6);
    changerWinner(square4); 
    return;
  }

  if(checkSequence(square7, square8, square9)) {
    changeColor(square7, square8, square9);
    changerWinner(square7); 
    return;
  }

  if(checkSequence(square1, square5, square9)) {
    changeColor(square1, square5, square9);
    changerWinner(square1); 
    return;
  }

  if(checkSequence(square3, square5, square7)) {
    changeColor(square3, square5, square7);
    changerWinner(square3); 
    return;
  }

  
  if(checkSequence(square1, square4, square7)) {
    changeColor(square1, square4, square7);
    changerWinner(square1); 
    return;
  }

  if(checkSequence(square2, square5, square8)) {
    changeColor(square2, square5, square8);
    changerWinner(square2); 
    return;
  }

  if(checkSequence(square3, square6, square9)) {
    changeColor(square3, square6, square9);
    changerWinner(square2); 
    return;
  }

  if(checkSequence(square1, square4, square7)) {
    changeColor(square1, square4, square7);
    changerWinner(square1); 
  }
}

function changerWinner(square) {
  winner = square.innerHTML;
  selectWinner.innerHTML = winner;

}

function changeColor(square1, square2, square3) {
  square1.style.background = '#0f0';
  square2.style.background = '#0f0';
  square3.style.background = '#0f0';
}

function checkSequence(square1, square2, square3) {
  var checking = false;

  if(square1.innerHTML !== '-' && square1.innerHTML === square2.innerHTML && square2.innerHTML === square3.innerHTML) {
    checking = true;
  }
  return checking;
}