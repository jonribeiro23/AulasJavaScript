function remove(){
    var p = document.querySelectorAll('p');
    for(k in p){
        document.body.removeChild(p[k]);
    }
}