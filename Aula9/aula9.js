/*function teste(){
    var aluno = {nome:"TESTE",
                 idade:18,
                 mostrarNome: function(){
                     alert(this.nome);
                 }};
    aluno.mostrarNome();
    var Gato = function(nome,raca){
        this.nome = nome;
        this.raca = raca;
        this.miar = function(){
            alert(this.nome + " : MIAU");
        }
    };
    var branco = new Gato("Branco","SRD");
    branco.miar();
}

function criarEvento(){
    document.querySelector("button").addEventListener("click",function(){
        teste();
    })
}

window.onload = criarEvento;*/



/*function teste(){
    var Gato = function(nome,raca){
        this.nome = nome;
        this.raca = raca;
        this.miar = function(){
            alert(this.nome + " : MIAU");
        }
    };
    var g = new Gato("Loki","Persa");
    var branco = new Gato("Branco","SRD");
    branco.miar();
    g.miar();
    Gato.prototype.mostrarRaca = function(){
        alert(this.raca);  
    };
    branco.mostrarRaca();
    g.mostrarRaca();
}

function criarEvento(){
    document.querySelector("button").addEventListener("click",function(){
        teste();
    })
}

window.onload = criarEvento;*/




/*function teste(){
    Array.prototype.lol = function(){
        alert("OI");
    }
    ([2,3,4,4,5]).lol();
}

function criarEvento(){
    document.querySelector("button").addEventListener("click",function(){
        teste();
    })
}

window.onload = criarEvento;*

/*============================================*/
/*BIMAP*/
/*============================================*/

function teste(){
    Object.prototype.bimap = function(f,g){
        var arr = Object.entries(this);
        var aux = {};
        for(var i=0; i<arr.length;i++){
            aux[f(arr[i][0])] = g(arr[i][1]) 
        }
        return aux;
    };
    var a = ({nome:"TESTE",idade:19}).bimap(x => x.split("").reverse().concat(""),y => y + 19);
    for(var indice in a){
        document.write(indice + " " + a[indice] + "<br>");
    }
}

function criarEvento(){
    document.querySelector("button").addEventListener("click",function(){
        teste();
    })
}

window.onload = criarEvento;