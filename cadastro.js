let readlineSync = require('readline-sync');
var nomePeca;
var pesoPeca;
var capacidade = 10;

nomePeca = readlineSync.question("Digite o nome da peça: ");
pesoPeca = readlineSync.question("Digite o peso da peça: ");

if(pesoPeca > 100){
    //condição verdeira
    if(capacidade > 10){
        //condição verdeira
        console.log("Não Cadastrar, Capacidade máxima atingida!!!");
    }else if(nomePeca.length < 3){
        //condição falsa
        console.log("não Cadastrar, nome inválido!");
    }else{
        console.log("Peça cadastrada com SUCESSO!!!");
    }
}else{
    //condição falsa
    console.log("Não Cadastrar, peso insuficiente!");
}