/*function mult(x,y){
    return x*y;
}

function teste(){
    var dobro = function(x){
        return 2*x;
    }(5);
    
    var triplo = x => 3*x
    
    //alert(dobro(5));
    //alert(triplo(9));
    //alert(mult);
    alert(dobro);
}*/


//Função como parâmetro
/*

function foo(f, g){
    return f(5) + g(3);
}

function somar(x){
    return function(y){
        return x + y;
    }
} // currying

function teste(){
    var res = foo(function(x){
        return x+2;
    },function(x){
        return 3*x
    });
    alert(res);
    
    var s = somar(1);
    alert(s(3));
    
    var z = somar(7)(5);
    alert(z);
} */

// Funções recurssivas
function head(v){
    return v[0];
}

function tail(v){
    return v.slice(1);
}

function insere(x,v){
    v.unshift(x);
    return v;
}

function map(f,v){
    if(v.length == 0)
        return [];
    else
        return insere(f(head(v)),map(f,tail(v)));
}

function teste(){

}

