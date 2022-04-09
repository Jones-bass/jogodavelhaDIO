var jogador = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');

mudarJogador('x')

function squareHash(id) {

  var square = document.getElementById(id);

  square.innerHTML = jogador;
  square.style.color = '#000';
}

function mudarJogador(valor){
  jogador = valor;
  jogadorSelecionado.innerHTML = jogador;
}