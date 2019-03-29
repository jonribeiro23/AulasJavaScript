function parOuImpar(){
	var n1 = parseInt(prompt("Digite um nº"));

	if(n1%2 == 1){
		alert("O número é ímpar.");
	}else{
		alert("O número é par");
	}
}

function imc(){
	var peso = parseFloat(prompt("Digite seu peso"));
	var altura = parseFloat(prompt("Digite sua altura em metros"));
	var imc = parseFloat(peso/(altura^2));
	alert("Seu IMC é: " + imc);
}
