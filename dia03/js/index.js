
    // gera um numero aleatório entre 0 e 10
   
    var numeroSecreto =  3//parseInt(Math.random() * 11)
    var tentativa = 4
function Chutar(){
    //seleciona o elemento HTML pelo id
    var elementoResultado = document.getElementById("resultado")
    var elementoTentativa = document.getElementById("tentativa")
    var elementoSegundos = document.getElementById("segundos")
    var elementoDiferenca = document.getElementById("diferenca")
    
    var chute = parseInt(document.getElementById("valor").value)
    



    if(chute == numeroSecreto){
        //imprime o texto dentro da tag onde o id é "resultado"
        elementoResultado.innerHTML = "Você acertou !"
        elementoSegundos.innerHTML = "A página vai ser recarregada em 3 segundos e um novo número vai ser gerado."
        setTimeout(function(){
            window.location.reload();
        }, 3000)
    }else if(chute > 10 || chute < 0){
        elementoResultado.innerHTML = "Somente números de 0 a 10 !"
    }
    else{
        tentativa -= 1

        if(tentativa <=0){
            elementoTentativa.innerHTML = "Suas tentativas acabaram tente novamente!"
            elementoSegundos.innerHTML = "A página vai ser recarregada em 3 segundos e um novo número vai ser gerado."
            // recarrega a página após 3s 
            setTimeout(function(){
                window.location.reload();
            }, 3000)


        }else{
            elementoResultado.innerHTML = `Errou !`
            elementoTentativa.innerHTML = `Você tem ${tentativa} tentativas`

            if(chute < numeroSecreto){
                elementoDiferenca.innerHTML = "O seu número é MENOR que o número secreto!"
            }else{
                elementoDiferenca.innerHTML = "O seu número é MAIOR que o número secreto! "
            }


        }
      

      

    }

    console.log(numeroSecreto)
}