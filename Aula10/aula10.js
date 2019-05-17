$(evento)

function evento(){
    $("#teste").click(function(){
        $("#div1").append("<p> ... </p>");
    });
    $("#oper").click(function(){
        var n1 = parseInt($("#n1").val());
        var n2 = parseInt($("#n2").val());
        $("#res").val(n1+n2);
        $("#res").css("backgroundColor","yellow")
    });
    $("#limpar").click(function(){
        $("input").val("");
        $("#res").css("backgroundColor","white");
    });
}




/*$(evento)

function evento(){
    //$("p").click(function(){
    //    $(this).html("clicado");
    //});
    $("#p1").click(function(){
        $(this).html(1+parseInt($(this).html()));
    });
}*/






/**
$(".classe1").dblclick(function(){
        alert($(this).html());
    });
    $("p").click(function(){
        $(this).css("backgroundColor","yellow");
    });
    $("button").dblclick(function(){
        $("p").hide();
    })
    $("button").click(function(){
        $(".classe").hide();
    });

**/





/*$(evento)

function evento(){
    $(".classe1").dblclick(function(){
        alert($(this).html());
    });
    $("p").click(function(){
        $(this).css("backgroundColor","yellow");
    });
    $("button").dblclick(function(){
        $("p").hide();
    })
    $("button").click(function(){
        $(".classe").hide();
    });
}*/

/**function evento(){
    document.querySelectorAll("p").forEach(function(p){
        p.addEventListener("click",function(evt){
            evt.target.style.backgroundColor = "yellow";
        });
    })
}

window.onload = evento;
**/


/*$(evento)

function evento(){
    $("p").click(function(){
        $(this).css("backgroundColor","yellow");
    });
    $("button").dblclick(function(){
        $("p").hide();
    })
}*/

/*$(evento)

function evento(){
    $("p").click(function(){
        $(this).css("backgroundColor","yellow");
    });
}*/

/**function evento(){
    document.querySelectorAll("p").forEach(function(p){
        p.addEventListener("click",function(evt){
            evt.target.style.backgroundColor = "yellow";
        });
    })
}

window.onload = evento;
**/