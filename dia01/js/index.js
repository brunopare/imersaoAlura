const nome = 'Bruno';
var mostra = document.querySelector('h1 span');
var notaPrimeiroBimestre = 9.4355;
var notaSegundoBimestre = 7.234;
var notaTerceiroBimestre = 4.234;
var notaQuartoBimestre = 2.183;
var notaFinal = (notaPrimeiroBimestre+notaSegundoBimestre+notaTerceiroBimestre+notaQuartoBimestre) / 4 ;



var notaFixada = notaFinal.toFixed(1)



console.log(`Bem vindo ${nome}`);
console.log(`A nota do ${nome} é ${notaFixada} `);

if (notaFinal <6){
    console.log("Aluno Reprovado!")
}
if(notaFinal >= 6){
    console.log("Aluno Aprovado!")
}




//comentários em javaScritp

