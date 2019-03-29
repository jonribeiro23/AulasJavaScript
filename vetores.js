function teste(){
	var v = [1,2,3];
	
	for(var i = 0; i < v.length; i++){
		console.log(v[i]);
	}

	for(var j in v){
		console.log(v[j]);
	}

	v.push(4,5,6,[12,11,10],true);
	console.log(v);
}

function somarVetor(v){
	var soma = 0
	for(var j in v){
		soma = soma + v[j];
	}
	return soma;
}

function mostraSoma(){
	var v = [1,2,3,4,5,6,7,8,9];
	document.write(somarVetor(v));
}

/*function eliminarVogais(str){
	var aux = " ";
	for(var j in str){
		if(!(str[j] == 'a' || str[j] == 'e' || str[j] == 'i' || str[j] == 'o' || str[j] == 'u')){
			aux = aux + str[j];
		}
	}
	return aux;
}*/

function eliminarVogais(str){
    var aux = "";
    var padrao = /[AEIOUaeiou]/;
    for(var i=0; i < str.length; i++){
        if(!(padrao.test(str[i]))){
            aux = aux + str[i];
        }
    }
    return aux;
}

function validarEmail(str){
	var padrao = /[a-z0-9]+@[a-z0-9]+\.[a-z0-9]{2,}(\.[a-z0-9]{2,})?/;
	return padrao.test(str);
}