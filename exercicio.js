function olerite(obj){
	var m = "";
	for(var k in obj){
		m = obj[k].nome + " - " + obj[k].salarioHora + " - " + obj[k].qtHoras + "<br>";
		document.write(m);
	}
}

function maior(obj){
	var m = 0;
	var s = 0;
	var n = "";
	for(k in obj){
		s = obj[k].salarioHora * obj[k].qtHoras;
		if(m < s){
			m = s;
			n = obj[k].nome;
		}
	}
	return m;
}

function maiorSalario(obj){
	var m = 0;
	var s = 0;
	var n = "";
	for(k in obj){
		s = obj[k].salarioHora * obj[k].qtHoras;
		if(m < s){
			m = s;
			n = obj[k].nome;
		}
	}
	document.write("<br>O maior salário é de " + n + ". Valor: " + m);
}

function menorSalario(obj){
	var m = maior(dados());
	var s = 0;
	var n = "";

	for(k in obj){
		s = obj[k].salarioHora * obj[k].qtHoras;
		if(m > s){
			m = s;
			n = obj[k].nome;
		}
	}
	document.write("<br>O menor salário é de " + n + ". Valor: " + m);
}

function media(obj){
	var media = 0;
	var salario = 0;
	soma = 0;
	for (var i = obj.length - 1; i >= 0; i--) {
		salario = obj[i].salarioHora*obj[i].qtHoras;
		soma = soma + salario;
	}
	document.write("<br>A média salarial é: " + soma/obj.length);
}

function funcionarios(){
	olerite(dados());

	maiorSalario(dados());

	menorSalario(dados());

	media(dados());
}

function dados(){
	return [{"nome":"Jão","salarioHora":25.60,"qtHoras":25}
			,{"nome":"Julia","salarioHora":12.00,"qtHoras":40}
			,{"nome":"Pietro","salarioHora":30.60,"qtHoras":20}
			,{"nome":"Henley","salarioHora":120.58,"qtHoras":19}
			,{"nome":"Vinicius","salarioHora":25.65,"qtHoras":25}];
}