var carta1 = {
    nome: "Bulbasauro",
    atributos:{
        ataque: 7,
        defesa: 8,
        magia: 6
    }
};

var carta2 = {
    nome: "Darth Vader",
    atributos:{
        ataque: 9,
        defesa: 8,
        magia: 2
    }
};


var carta3 = {
    nome: "Shiryu de Dragão",
    atributos:{
        ataque: 5,
        defesa: 9,
        magia: 10,
    }
};

var cartas = [carta1,carta2,carta3]

//declarando variáveis sem valor, não é necessário colocar "var carta = 0"
var cartaMaquina 
var cartaJogador

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random()*3);

    cartaMaquina = cartas[numeroCartaMaquina]
    console.log(cartaMaquina)
}

//console.log(carta1.atributos.ataque)

