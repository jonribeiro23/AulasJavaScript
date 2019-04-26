function nomearImgs(){
    var imgs = document.querySelectorAll("img");
    for(var i=0; i < imgs.length; i++){
        imgs[i].src = "image" + i + ".png";
    }
}

function getFromServer(){
    return {resp: [
            {city:"SANTOS",lat:-23.9667,long:-46.3333}
           ,{city:"PG",lat:-24.0104,long:-46.4179}
        ]};
}

function buildPage(){
    var table = document.createElement("table");
    var thead = document.createElement("thead");
    var trow = document.createElement("tr");
    var theadCity = document.createElement("th");
    var theadLong = document.createElement("th");
    var theadLat = document.createElement("th");
    theadCity.innerHTML = "Cidade";
    theadLong.innerHTML = "Long";
    theadLat.innerHTML  = "Lat";
    var tbody = document.createElement("tbody");
    var arrayCidade = getFromServer();
    var mediaLat = 0;
    var mediaLong = 0;
    for(var i in arrayCidade.resp){
        var cidade = arrayCidade.resp[i];
        var tr = document.createElement("tr");
        var tdCidade = document.createElement("td");
        var tdLong = document.createElement("td");
        var tdLat = document.createElement("td");
        tdCidade.innerHTML = cidade[i].city;
        tdLong.innerHTML = cidade[i].long;
        tdLat.innerHTML = cidade[i].lat;
        mediaLat += cidade[i].lat;
        mediaLong += cidade[i].long;
        tr.appendChild(tdCidade);
        tr.appendChild(tdLong);
        tr.appendChild(tdLat);
        tbody.appendChild(tr);
    }
    var trm = document.createElement("tr");
    var tdMediaLong = document.createElement("td");
    var tdMediaLat = document.createElement("td");
    tdMediaLat.innerHTML = mediaLat/arrayCidade.resp.length;
    tdMediaLong.innerHTML = mediaLong/arrayCidade.resp.length;
    tbody.appendChild(tdMediaLat);
    tbody.appendChild(tdMediaLong);
    thead.appendChild(theadCity);
    thead.appendChild(theadLong);
    thead.appendChild(theadLat);
    table.appendChild(thead);
    table.appendChild(tbody);
    document.body.appendChild(table);
}

function removerPs(){
    var ps = document.querySelectorAll("p");
    for(var i=0; i < ps.length; i++){
        //ps[i].parentNode.removeChild(ps[i]);
        ps[i].style.display = "none";
    }
}

function foo1(f,g,xs){
    var aux = [];
    for(var i=0; i < xs.length; i++){
        if(f(xs[i]) && g(xs[i]))
            aux.append(xs[i]);
    }
    return aux;
}

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

function foo(f,g,xs){
    if(xs.length == 0)
        return [];
    else{
        if(f(head(xs)) && g(head(xs)))
            return insere(head(xs),foo(f,g,tail(xs)));
        else
            return foo(f,g,tail(xs));
    }
        
}



