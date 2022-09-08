var numRandom = parseInt(Math.random() * 11);
var numSaber = numRandom;
function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  if (chute == numRandom) {
    document.getElementById("resultado").innerHTML =
      "Você acertou! <br> Parabéns!";
  } else 
    if (chute < 0 || chute > 10) {
    document.getElementById("resultado").innerHTML =
      "Número de 0 a 10.. <br> Você é cego?";
  } else 
    if (chute>numRandom) {
    document.getElementById("resultado").innerHTML =
      "Você errou :( <br> O número é menor que " + chute;
    } else {
    document.getElementById("resultado").innerHTML =
      "Você errou :( <br> O número é maior que " + chute;
  }
}
function sortear() {
  numRandom = parseInt(Math.random() * 11);
  if (numSaber !== numRandom) {
    document.getElementById("saber").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
  }
}
function saber() {
  var numSaber = numRandom;
  document.getElementById("saber").innerHTML =
    "Você não sabe brincar? <br> O número é " + numSaber;
}
