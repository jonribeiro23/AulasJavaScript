function teste(){
    var lista = [1,2,3,4,5,6,7,8,9,10];
    lista.forEach(function(x){
        document.write(2*x + "<br>");
    });
    
    var ret = lista.map(function(x){
        return 2*x ;
    });
    
    document.write(ret);
}

function teste2(){
    var lista = ["PHP","RUBY","JAVASCRIPT","NODE","C#","PYTHON","ISABELLE","LUA","BRAINFUCK","HASKELL"];
    var filtrado = lista.filter(function(pal){
        return pal.length > 3;
    });
    
    document.write(filtrado);
}

function testeArrowFunction(){
    var lista = ["PHP","RUBY","JAVASCRIPT","NODE","C#","PYTHON","ISABELLE","LUA","BRAINFUCK","HASKELL"];
    var filtrado = lista.filter(pal => pal.length > 3);
    
    document.write(filtrado);
}

function testeReduce(){
    var lista = [1,2,3,4,5,6];
    var res = lista.reduce(function(x,y){
        return x+y;
    },0);
    document.write(res);
}

// Exemplos Javascriptero

function teste3(){
    document.querySelectorAll("li").forEach(function(li){
        li.style.backgroundColor = "yellow";
    });
}


function teste4(){
    //TROCAMOS OS INDICES PELOS ELEMENTOS
    var aux = Array.from(document.querySelectorAll("li"));
    aux.filter(function(x){
        return x.innerHTML != "TRES";
    }).forEach(function(elem){
        elem.style.backgroundColor = "yellow";   
    });
}

function criarEvento(){
    document.querySelector("button")
        .addEventListener("click",teste);
}

function criarEvento2(){
    document.querySelector("button")
        .addEventListener("click",teste);
    document.querySelectorAll("li").forEach(function(li){
        li.addEventListener("click",function(evt){
            alert(evt.target.innerHTML);
        })
    });
}

function criarEvento3(){
    document.querySelector("button")
        .addEventListener("click",teste);
    document.querySelectorAll("li").forEach(function(li){
        li.addEventListener("click",function(evt){
            alert(evt.target.innerHTML);
        })
    });
}

window.onload = criarEvento; 