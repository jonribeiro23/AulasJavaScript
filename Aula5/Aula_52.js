/*function inserir(){
    var p = document.createElement("p");
    p.innerHTML = "P CRIADO!";
    p.style.backgroundColor = "pink";
    document.body.appendChild(p);
}*/

/*function inserir(){
    var p = document.createElement("p");
    p.innerHTML = "P CRIADO!";
    p.style.backgroundColor = "pink";
    var div = document.querySelector("div");
    div.appendChild(p);
}*/

/*function inserir(){
    var p = document.createElement("p");
    p.innerHTML = "P CRIADO!";
    p.style.backgroundColor = "pink";
    var div = document.querySelector("div");
    var btn = document.querySelector("button");
    document.body.insertBefore(p, btn);
}*/

function inserir(){
    var p = document.createElement("p");
    p.innerHTML = "P CRIADO!";
    p.style.backgroundColor = "pink";
    var div = document.querySelector("#div2");
    var btn = document.querySelector("button");
    document.body.insertBefore(p, div.nextSibling);
}