/*function montarPagina(pagina){
    document.write(pagina);
}

//description-noticia
function sendReq() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        montarPagina(this.responseText);
      }
    };
  
  xhttp.open("GET", "https://fatecrl.edu.br/", true);
  xhttp.send();
}

function teste(){
    sendReq();
}

function criarEvento(){
    document.querySelector("button").addEventListener("click",function(){
        teste();
    })
}

window.onload = criarEvento;*/



/*function montarPagina(pagina){
    var parser = new DOMParser();
    var documento = parser.parseFromString(pagina, "text/html");
    documento.querySelectorAll(".description-noticia").forEach(function(div){
        var p = div.children[1].innerHTML;
        var div2 = document.createElement("div");
        div2.innerHTML = p;
        document.body.appendChild(div2);
    });
}

//description-noticia
function sendReq() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        montarPagina(this.responseText);
      }
    };
  
  xhttp.open("GET", "https://fatecrl.edu.br/", true);
  xhttp.send();
}

function teste(){
    sendReq();
}

function criarEvento(){
    document.querySelector("button").addEventListener("click",function(){
        teste();
    })
}

window.onload = criarEvento;*/




/*function montarPagina(pagina){
    var parser = new DOMParser();
    var documento = parser.parseFromString(pagina, "text/html");
    documento.querySelectorAll(".noticias-direita").forEach(function(div){
        var as = div.children;
        Array.from(as).forEach(function(a){
            var noticia = a.children;
            Array.from(noticia).forEach(x => document.body.appendChild(x));
        })
        //var div2 = document.createElement("div");
        //div2.innerHTML = p;
        //document.body.appendChild(div2);
    });
}

//description-noticia
function sendReq() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        montarPagina(this.responseText);
      }
    };
  
  xhttp.open("GET", "https://fatecrl.edu.br/", true);
  xhttp.send();
}

function teste(){
    sendReq();
}

function criarEvento(){
    document.querySelector("button").addEventListener("click",function(){
        teste();
    })
}

window.onload = criarEvento;*/




function montarPagina(pagina){
    var parser = new DOMParser();
    var documento = parser.parseFromString(pagina, "text/html");
    documento.querySelectorAll(".noticias-direita").forEach(function(div){
        var as = div.children;
        Array.from(as).forEach(function(a){
            var noticia = a.children;
            Array.from(noticia).forEach(x => document.body.appendChild(x));
        })
        //var div2 = document.createElement("div");
        //div2.innerHTML = p;
        //document.body.appendChild(div2);
    });
}

//description-noticia
function sendReq() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        //montarPagina(this.responseText);
        alert("OI");
      }
    };
  
  xhttp.open("GET", "https://yesodaula-romefeller.c9users.io/url/s/receita.economia.gov.br/", true);
  xhttp.send();
}

function teste(){
    sendReq();
}

function criarEvento(){
    document.querySelector("button").addEventListener("click",function(){
        teste();
    })
}

window.onload = criarEvento;