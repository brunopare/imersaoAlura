function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  var nomeFilme = document.getElementById("nome").value;
  if (filmeFavorito == "" || nomeFilme == "") {
    return alert("Obrigatório inserir um filme e nome");
  }

  //se não for um link do tipo imagem vai retornar um erro
  if (
    filmeFavorito.endsWith(".jpg") ||
    filmeFavorito.endsWith(".png") ||
    filmeFavorito.endsWith(".svg")
  ) {
    //vai mandar o filmefavorito para ser executado na função filme
    ListaFilmesTela(filmeFavorito,nomeFilme);
  } else {
    alert("Apenas formatos de imagens .jpg - .png - .svg");
  }
  //Apaga o texto do input quando adicionar(alterar o valor)
  document.getElementById("filme").value = "";
  document.getElementById("nome").value = "";
}

//Espera o parâmetro filme para ser executada
function ListaFilmesTela(filme,nome) {
  //pega o endereço da imagem e joga dentro de uma tag img
  var elementoFilmeFavorito = `<img src="${filme}">`;
  var elementoNomeFilme = `<h1 class="page-title">${nome}</h1>`;
  var elementoListaFilmes = document.getElementById("listaFilmes");
  var listaNomes = document.getElementById("listaNome");
  //vai mostrar  o elemenetoFilmeFavorito na div listaFilmes
  // caso um novo filme for adicionado ele não apaga o último
  elementoListaFilmes.innerHTML =  elementoListaFilmes.innerHTML + elementoFilmeFavorito + listaNomes.innerHTML + elementoNomeFilme;
  //listaNomes.innerHTML =  listaNomes.innerHTML + elementoNomeFilme;
}
