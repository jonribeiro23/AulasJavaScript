function teste(){
	var n1 = prompt("Digite um número");
	var n2 = prompt("Digite outro número");
	maior(n1,n2);
}

function maior(n1,n2){
	var n1 = parseInt(n1);
	var n2 = parseInt(n2);

	if(n1 > n2){
		alert("O maior é " + n1);
	}else{
		alert("O maior é " + n2);
	}

}

// ==============================================

function ex2(){
    var p = prompt("Digite peso: ");
    var a = prompt("Digite altura: ");
    var imc = p/(a*a);
    if(imc < 18){
        alert("Abaixo do peso");
    }else if (imc < 25){
        alert("Saudavel");
    }else{
        alert("Acima do peso");
    }
}

function ehPar(n){
    return n % 2 == 0
}

function ex1(){
    var n = parseInt(prompt("Digite um n: "));
    if(ehPar(n)){
        alert("alert eh par");
    }else{
        alert("alert eh ímpar");
    }
}

//11322
function maior(n1,n2){
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    if(n1 > n2){
        alert("O maior eh " + n1);
    }else{
        alert("O maior eh " + n2);
    }
}

//01012
function teste(){
    //0 e 1
    var n1 = prompt("Digite um número: ");
    var n2 = prompt("Digite outro número: ");
    maior(n1,n2);
}

// =================================================

function validarEmail(str){
    var padrao = /[a-z0-9]+@[a-z0-9]+\.[a-z0-9]{2,}(\.[a-z0-9]{2,})?/;
    return padrao.test(str);
}

function eliminarVogais(str){
    var aux = "";
    var padrao = /[AEIOUaeiou]/
    for(var i=0; i < str.length; i++){
        if(!(padrao.test(str[i]))){
            aux = aux + str[i];
        }
    }
    return aux;
}

function somarVetor(v){
    var soma = 0;
    for(var i=0; i < v.length; i++){
        soma = soma + v[i];
    }
    return soma
}

function teste(){
    document.write(validarEmail("awk@fateccom.jp"));
}