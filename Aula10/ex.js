$(evento);

function evento(){
    //Ex1
    $("#btn1").click(function(){
        $('p').hide();
        $('div').hide();
    });
    //Ex2
    $("p").click(function(){
        if($(this).html() != 'NAO'){
            $(this).css("backgroundColor","yellow");
        }
    });
    //Ex3
    //1ª Forma
    /*$('#btn2').click(function(){
        var r = $('#texto').text;
        if(r.length <= 0){
            $('#texto').css("backgroundColor","yellow");
        }else{
            alert('ndjsnjds');
        }
    });*/
    
    //2ª forma
   $("input:text").focus(function(){
        $(this).css("backgroundColor","white");
    });
    
    $("input:text").blur(function(){
        var texto = $(this).val();
        if(texto != "")
            $(this).css("backgroundColor","yellow");
    });
}