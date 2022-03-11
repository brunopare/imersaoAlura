/*var listaFilmes = ["Yestarday", "A Chegada", "Escola de Rock"]

 adiciona na última posição da lista 
listaFilmes.push("Harry Potter")

escreve na tela, podemos passar uma tag HTML como parâmetro
document.write("<p>" +listaFilmes[0]+  "</p>")
document.write("<p>" +listaFilmes[1]+  "</p>")
document.write("<p>" +listaFilmes[2]+  "</p>")
document.write("<p>" +listaFilmes[3]+  "</p>")


document.write("<p>" +listaFilmes+  "</p>")

 para i = 0, enquanto i for menor que length da lista, i += 1

for (var i = 0; i< listaFilmes.length; i++){

    document.write("<p>"+ i +"-"+ listaFilmes[i]+"</p>")
}*/

var listaFilmes = ["https://www.folhacg.com.br/wp-content/uploads/2021/10/Dune-Poster.jpg",
"https://www.alamedageek.com.br/wp-content/uploads/2016/10/Confira-o-trailer-e-p%C3%B4ster-de-A-Chegada-evideoclipe.jpg",
"https://img.elo7.com.br/product/original/2657628/big-poster-harry-potter-e-as-reliquias-da-morte-lo01-90x60-presente-geek.jpg",
"https://br.web.img3.acsta.net/medias/nmedia/18/91/90/98/20169244.jpg"]

for (var i = 0; i < listaFilmes.length; i++){
    document.write("<img src=" +listaFilmes[i] +">" )
}
