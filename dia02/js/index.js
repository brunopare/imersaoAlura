// a função só vai ser executada quando o onClick for "chamado"
function Converter() {
  // recebe o valor do input do HTML pelo id,
  //porém vai imprimir o HTML inteiro em vez de apenas o valor do id
  var valorElemento = document.getElementById("valor");
  //agora sim pega apenas o valor do input
  var valor = valorElemento.value;
  //converter em Float
  var valorDolar = parseFloat(valor);

  var valorReal = valorDolar * 5;
  console.log(valorReal);

  //dnv pega o valor do id correspondente no html
  var valorConvertido = document.getElementById("valorConvertido");
  var resultado = "O resultado em real é: R$ " + valorReal;

  // vai mostrar na tela, pega o resultado e bota dentro da tag de valorConvertido no caso a div
  valorConvertido.innerHTML = resultado;
}

//usamos o .value para tratar o valor dentro do JS, e o .innerHTML para colocar o valor no HTML

//vai ser executado assim que a página for recarregada, antes da função
console.log("teste");

function Temperatura(){
    var temperatura = document.getElementById("temperatura");
    var valorCelcius = temperatura.value

    var fahrenheit = (valorCelcius * (9/5)) + 32

    var temperaturaConvertida = document.getElementById("temperaturaConvertida")
    var resultado = `${valorCelcius}°C é igual a ${fahrenheit}°F`

    temperaturaConvertida.innerHTML = resultado
}