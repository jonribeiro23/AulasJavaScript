// Não é a forma mais correta, pois as tags são elementos híbridos contendo vetores e elementos numéricos
/*function teste(){
    var lis = document.querySelectorAll("li");
    var aux = "";
    for(var v in lis){
        aux = aux + v + " -> " + lis[v] + "<br>";
    }
    document.write(aux);
}*/

function teste(){
    var lis = document.querySelectorAll("p, li");
    for(var i=0 ; i < lis.length; i++){
        lis[i].style.backgroundColor = "yellow";
        lis[i].innerHTML = "ITERADO!";
    }
}

/*

1) Ao clicar em um botão, todas as divs
e os spans deverão sumir.

2) Em um campo numérico, em sua saída, 
uma validação deverá ser feita.
Se o número digitado for maior que zero, deixe a 
cor-de-fundo em verde, se for menor em vermelho.
No mesmo campo, ao entrar, a caixa deverá ficar amarela.

*/