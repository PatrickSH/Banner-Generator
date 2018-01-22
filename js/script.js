$(document).ready(function(){

    var banner = $("#banner");

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
                banner.append("<p class='dragger draggable ui-widget-content'>"+$("#txt").val()+"</p>");
                break;
            case "h1":
                banner.append("<h1 class='dragger draggable ui-widget-content'>"+$("#txt").val()+"</h1>");
                break;
            case "h2":
                banner.append("<h2 class='dragger draggable ui-widget-content'>"+$("#txt").val()+"</h2>");
                break;
        }
    });

    $( ".dragger" ).draggable({ containment: "#banner", scroll: false });
});