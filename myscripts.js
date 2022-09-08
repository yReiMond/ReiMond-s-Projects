function Converter() {
    var valorReal = document.getElementById("valor");
    console.log(valorReal);
    var valor = valorReal.value;
    var valorEmRealNumerico = parseFloat(valor);
    var valorDolar = valorEmRealNumerico / 5;
    var valorConvertidoDolar = document.getElementById("valorConvertido");
  
    valorConvertidoDolar.innerHTML =
      "O valor de  " + valorEmRealNumerico + "R$ em dolar é de U$" + valorDolar;
  }  