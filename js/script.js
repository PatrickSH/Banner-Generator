$(document).ready(function(){

    var banner = $("#banner");

    function elementId()
    {
        var highestId = 0;
        $(".banner-element").each(function(){
            highestId = parseInt($(this).attr('data-element-id'));
        });
        var nextId = highestId + 1;
        return nextId;
    }

    /****Settings */
    $("#show-grid-lines").on('click',function(){
        if($(this).is(':checked')){
            banner.append('<div class="grid"></div>');
        }else{
            $("#banner .grid").remove();
        }
    });


    $(".dimensions input").on('keyup',function(){
        banner.height($("#height").val());
        banner.width($("#width").val());
    });

    $("#bg_color, #txt_color").on('change',function(){
        banner.css({
            "background-color" : $("#bg_color").val(),
            "color" : $("#txt_color").val(),
        });
    });

    $("#add_text").on('click',function(){
        switch($("#txt_type").val()){
            case "p":
                banner.append("<p class='dragger draggable ui-widget-content banner-element' data-element-id='"+elementId()+"'>"+$("#txt").val()+"</p>");
                $('.draggable').draggable({containment:"#banner"});
                break;
            case "h1":
                banner.append("<h1 class='dragger draggable ui-widget-content banner-element' data-element-id='"+elementId()+"'>"+$("#txt").val()+"</h1>");
                $('.draggable').draggable({containment:"#banner"});
                break;
            case "h2":
                banner.append("<h2 class='dragger draggable ui-widget-content banner-element' data-element-id='"+elementId()+"'>"+$("#txt").val()+"</h2>");
                $('.draggable').draggable({containment:"#banner"});
                break;
        }
        $("#txt").val("");
       
    });

    $("#banner").children().each(function(){
        if(!$(this).hasClass('grid')){
            $(this).draggable();
        }
    });
 
});