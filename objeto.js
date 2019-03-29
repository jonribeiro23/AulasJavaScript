function quadroGeral(vetObj){
	var aux = "";
	for (var i = 0; i < vetObj.length; i++) {
		var media = 0.5*(vetObj[i].p1 + vetObj[i].p2);
		if(media >= 6)
			aux = aux + vetObj[i].nome + "Aprovado <br>";
		else
			aux = aux + vetObj[i].nome + "Sub <br>";
	}
	document.write(aux);
}

function teste(){
	quadroGeral([{"nome":"Aluno1","p1":6,"p2":6}
			,{"nome":"Aluno2","p1":4,"p2":7}
			,{"nome":"Aluno3","p1":2.5,"p2":3}
			,{"nome":"Aluno4","p1":5.5,"p2":6}
			,{"nome":"Aluno5","p1":10,"p2":10}]);
}

function percorrer(obj){
var aux = "";
	for(var k in obj){
		aux = aux + k + " -> " +  obj[k] + "<br>";
	}
	document.write(aux);
}

function testeObj(){
	//percorrer({"nome":"teste","idade":25,"salario":10000});
	percorrer(document);
}