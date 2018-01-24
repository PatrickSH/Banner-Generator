$(document).ready(function(){

    var banner = $("#banner");

    /**
     * Makes as new unique element Id
     */
    function elementId()
    {
        var highestId = 0;
        $(".banner-element").each(function(){
            highestId = parseInt($(this).attr('data-element-id'));
        });
        var nextId = highestId + 1;
        return nextId;
    }

    /**
     * Toggles gridlines
     */
    $("#show-grid-lines").on('click',function(){
        if($(this).is(':checked')){
            banner.append('<div class="grid"></div>');
        }else{
            $("#banner .grid").remove();
        }
    });

    /**
     * Toggles active element on banner
     */
    $(document).on('click','.banner-element-holder p',function(){
        var elementUid = $(this).attr('data-element-id');
        $("#banner").children().removeClass('active-banner-element');
        $("#banner [data-element-id='"+elementUid+"']").addClass('active-banner-element');
    });

    /**
     * Sets height and width of banner
     */
    $(".dimensions input").on('keyup',function(){
        banner.height($("#height").val());
        banner.width($("#width").val());
    });

    /**
     * Set background color and color of texts
     */
    $("#bg_color, #txt_color").on('change',function(){
        banner.css({
            "background-color" : $("#bg_color").val(),
            "color" : $("#txt_color").val(),
        });
    });

    /**
     * Adds texts
     */
    $("#add_text").on('click',function(){
        switch($("#txt_type").val()){
            case "p":
                banner.append("<p class='dragger draggable ui-widget-content banner-element' data-type='Header paragrah' data-element-id='"+elementId()+"'>"+$("#txt").val()+"</p>");
                $('.draggable').draggable({containment:"#banner"});
                break;
            case "h1":
                banner.append("<h1 class='dragger draggable ui-widget-content banner-element' data-type='Header 1' data-element-id='"+elementId()+"'>"+$("#txt").val()+"</h1>");
                $('.draggable').draggable({containment:"#banner"});
                break;
            case "h2":
                banner.append("<h2 class='dragger draggable ui-widget-content banner-element' data-type='Header 2' data-element-id='"+elementId()+"'>"+$("#txt").val()+"</h2>");
                $('.draggable').draggable({containment:"#banner"});
                break;
        }
        $("#txt").val("");
        refreshElementList();
    });

    /**
     * Makes sure we have draggable class
     */
    $("#banner").children().each(function(){
        if(!$(this).hasClass('grid')){
            $(this).draggable();
        }
    });

    /**
     * Adds CSS font link
     */
    $("#font_css_link").on('keyup',function(){
        if(!isAssetLoaded($(this).val(), 'link', 'href') && $(this).val() != ""){
            $("head").prepend("<link href='"+$(this).val()+"' rel='stylesheet'>");
        }
    });

    /**
    * Adds CSS font link
    */
    $("#font_css_family").on('keyup',function(){
        if($(this).val() != ""){
            banner.css('font-family',$(this).val());
        }
    });
 
});