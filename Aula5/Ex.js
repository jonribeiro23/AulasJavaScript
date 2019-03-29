function teste(){
    var lis = document.querySelectorAll("div, span");
    for(var i=0 ; i < lis.length; i++){
        lis[i].style.display = "none";
    }
}

function pintar(obj){
    obj.style.backgroundColor = "yellow";
}

function validar(obj){
    var num = obj.value;
    if(num > 0)
        obj.style.backgroundColor = "green";
    else 
        obj.style.backgroundColor = "red";
}