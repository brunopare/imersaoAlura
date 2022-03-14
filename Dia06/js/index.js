var rafa = {
    nome:"Rafa",
    vitoria: 2,
    empates: 1,
    derrotas: 1,
    pontos: 0
}

var paulo = {
    nome:"Paulo",
    vitoria: 1,
    empates: 1,
    derrotas: 2,
    pontos: 0
}


var maria = {
    nome:"Maria",
    vitoria: 1,
    empates: 1,
    derrotas: 4,
    pontos: 0
}

function calculaPontos(jogador){
    var pontos = (jogador.vitoria * 3) + jogador.empates
    //usando retorno podemos atribuir a função diretamente a uma variável
    return pontos; 
}


//acessando o objeto pontos 
rafa.pontos = calculaPontos(rafa)
paulo.pontos = calculaPontos(paulo)
maria.pontos = calculaPontos(maria)

var jogadores = [rafa, paulo, maria]


function exibeJogadoresNaTela(jogadores){
    var elemento = ""      
    for(var i=0; i < jogadores.length; i++){
        elemento += "<tr><td>"+ jogadores[i].nome+"</td>"
        elemento += "<td>"+jogadores[i].vitoria+"</td>"
        elemento +="<td>"+ jogadores[i].empates+"</td>"
        elemento += "<td>"+jogadores[i].derrotas +"</td>"
        elemento += "<td>"+jogadores[i].pontos+"</td>"
        elemento += "<td><button onClick='adicionarVitoria("+ i +")'>Vitória</button></td>"
        elemento += "<td><button onClick='adicionarEmpate("+ i +")'>Empate</button></td>"
        elemento += "<td><button onClick='adicionarDerrota("+ i +")'>Derrota</button></td>"
        elemento += "</tr>"
    } 
    
    var tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = elemento
}

exibeJogadoresNaTela(jogadores)

function adicionarVitoria(i){
    //jogador no indice i 
    //função recebe um número como parâmetro
    var jogador = jogadores[i]
    jogador.vitoria++
    jogador.pontos = calculaPontos(jogador)
    exibeJogadoresNaTela(jogadores)
}

function adicionarEmpate(i){
    var jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador)
    exibeJogadoresNaTela(jogadores)
}

function adicionarDerrota(i){
    var jogador = jogadores[i]
    jogador.derrotas++
    exibeJogadoresNaTela(jogadores);
}