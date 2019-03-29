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