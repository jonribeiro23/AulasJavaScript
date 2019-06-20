function mudar(obj){
	obj.src = "img/botao_vermelho.png";
}

//===================================

function verPropriedades(obj){
    var aux = "";
    for(var prop in obj){
        aux = aux + prop + " -> " + obj[prop] + "<br>";
    }
    document.write(aux);
}

function teste(){
    //document eh a raiz do DOM.
    //verPropriedades(document.body.children[0].children[1]);
    //var li = document.getElementById("li2");
    var div = document.querySelector(".uma_div");
    div.innerHTML = "MUDADO PELO JS";
    div.style.backgroundColor = "cyan";
    div.style.color = "magenta";
}

function ex1(){
    var li = document.querySelector(".class1");
    li.style.display = "none";
}

function ex2(){
    var li = document.querySelector("li");
    var p = document.querySelector("p");
    li.style.backgroundColor = "yellow";
    p.style.backgroundColor = "yellow";
}

//obj == this
function sumir(obj){
    obj.style.display = "none";
}



//========================================
//Exercício: Ao clicar novamente,
//voltar para a imagem original.
function nomeImagem(obj){
    var aux = obj.src.split("/");
    var nome = aux[aux.length-1];
    return nome;
}

function mudar(obj){
    if(nomeImagem(obj) == "botao.png")
        obj.src = "botaoap.png";
    else
        obj.src = "botao.png"
}