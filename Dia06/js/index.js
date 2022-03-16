var jogadores = []

//cria o objeto jogador vazio 
function construtorJogador(nome,icon){

    return(
        jogador = {
        icon: icon,
        nome: nome,
        partidas: 0, 
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        jogos:0,
        pontos:0
    })
    
}

//adiciona o jogador na lista de jogadores 
function adicionaJogador(){
    //pega o valor dos campos nome e foto
    nome = document.getElementById("nomeJogador").value
    icon = document.getElementById("fotoJogador").value
    if(nome == "" || icon == ""){
        alert("Obrigatório preencher.")
    }else{
        jogadores.push(construtorJogador(nome,icon));

        //limpa os campos
        document.getElementById("nomeJogador").value=""
        document.getElementById("fotoJogador").value=""

    }
    exibeJogadoresNaTela(jogadores);
}



function calculaPontos(jogador){
    var pontos = ((jogador.vitorias * 3) + (jogador.empates)) - (jogador.derrotas);
    //usando retorno podemos atribuir a função diretamente a uma variável
    return pontos; 
}


//acessando o objeto pontos 
function exibeJogadoresNaTela(jogadores){
    var elemento = ""      
    for(var i=0; i < jogadores.length; i++){
        elemento += "<tr><td><img src='"+ jogadores[i].icon+"'></td>"
        elemento += "<td>"+ jogadores[i].nome+"</td>"
        elemento += "<td>"+jogadores[i].vitorias+"</td>"
        elemento +="<td>"+ jogadores[i].empates+"</td>"
        elemento += "<td>"+jogadores[i].derrotas +"</td>"
        elemento += "<td>"+jogadores[i].jogos+"</td>"
        elemento += "<td>"+jogadores[i].pontos+"</td>"
        elemento += "<td><button onClick='adicionarVitoria("+ i +")'>Vitória</button></td>"
        elemento += "<td><button onClick='adicionarEmpate("+ i +")'>Empate</button></td>"
        elemento += "<td><button onClick='adicionarDerrota("+ i +")'>Derrota</button></td>"
        elemento += "<td><button onClick='zerarPontos("+ i +") '>Zerar Pontos</button></td>"
        elemento += "<td><button onClick='apagaJogador("+ i +") '>Apagar Jogador</button></td>"
        elemento += "</tr>"
    } 
    
    var tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = elemento
    console.log(jogadores)
}

exibeJogadoresNaTela(jogadores)

function adicionarVitoria(i){
    //jogador no indice i 
    //função recebe um número como parâmetro
    var jogador = jogadores[i]
    jogador.vitorias++
    controleJogos()
    jogador.pontos = calculaPontos(jogador)
    
    for(var x = 0; x < jogadores.length; x++){
        if (jogadores[x] != jogadores[i]){
            jogadores[x].derrotas++
            jogadores[x].pontos--
        }
    }
    exibeJogadoresNaTela(jogadores)
}

function adicionarEmpate(i){
    jogadores.empates++
    controleJogos()

    for(var x=0; x<jogadores.length; x++){
        jogadores[x].empates++
        jogadores[x].pontos = calculaPontos(jogadores[x])
    }
    exibeJogadoresNaTela(jogadores)
}

function adicionarDerrota(i){
    var jogador = jogadores[i]
    jogador.derrotas++
    jogador.pontos--
    controleJogos()
    exibeJogadoresNaTela(jogadores);
}

function controleJogos(){
    for(var i =0; i<jogadores.length; i++){
        jogadores[i].jogos++
    }
}

function zerarPontos(i){
    var jogador = jogadores[i]
    jogador.vitorias = 0
    jogador.empates = 0
    jogador.pontos = 0 
    jogador.jogos = 0
    exibeJogadoresNaTela(jogadores);
}

function zeraPontosTodos(){
    for(var x = 0; x < jogadores.length; x++){
        jogadores[x].vitorias = 0
        jogadores[x].empates = 0
        jogadores[x].derrotas = 0
        jogadores[x].jogos = 0
        jogadores[x].pontos = 0
    }

    exibeJogadoresNaTela(jogadores)
}

function limpaJogadores(){
    jogadores = []
    exibeJogadoresNaTela(jogadores)
}

function apagaJogador(i){
    var index = jogadores.indexOf(i)
    jogadores.splice(index, 1)
    exibeJogadoresNaTela(jogadores)
}