$(document).ready(function() {
    var s = document.styleSheets[0];
    /*******All*************/
    $(document).on('click','.animationBox',function(){
        clearAllFields();
        var animationName = $(this).attr('data-animation-name');
        $(".animation_setting[data-animation-name="+animationName+"]").css('display','none');
        if($(this).hasClass('activeAnimation')){
            $(this).removeClass('activeAnimation')
        }else{
            $(this).addClass('activeAnimation');
            $(".animation_setting[data-animation-name="+animationName+"]").css('display','flex');
        }
        getCurrentElementData("animation");
    });

    /********Fade in on hover*********/

    $(document).on('change',"#fade_in_on_hover_opacity_from",function(){
        addCurrentElementData("fade_in_on_hover_opacity_from",$(this).val(),"animation");
        unlockNextElement($(this));
        changeStylesheetRule(s,getActiveElementId(), "opacity", $(this).val());
    });

    $(document).on('keyup',"#fade_in_on_hover_duration",function(){
        unlockNextElement($(this));
        changeStylesheetRule(s,getActiveElementId(), "transition", "opacity "+$(this).val()+"s");
    });

    $(document).on('change',"#fade_in_on_hover_opacity_to",function(){
        addCurrentElementData("fade_in_on_hover_opacity_to",$(this).val(),"animation");
        changeStylesheetRule(s,getActiveElementId()+":hover", "opacity", $(this).val());
    });

    /********Fade in on load*********/

    $(document).on('keyup',"#fade_in_on_load_duration",function(){
        addCurrentElementData("fade_in_on_load_duration",$(this).val(),"animation");

        changeStylesheetRule(s,getActiveElementId(), "transition", "opacity "+$(this).val()+"s");
    });

    $(document).on('keyup',"#fade_in_on_load_delay",function(){
        addCurrentElementData("fade_in_on_load_delay",$(this).val(),"animation");
    });

    $(document).on('change',"#fade_in_on_load_opacity_from",function(){
        addCurrentElementData("fade_in_on_load_opacity_from",$(this).val(),"animation");

        unlockNextElement($(this));
        changeStylesheetRule(s,getActiveElementId(), "opacity", $(this).val());
    });

    $(document).on('change',"#fade_in_on_load_opacity_to",function(){
        addCurrentElementData("fade_in_on_load_opacity_to",$(this).val(),"animation");

        var dataElementId = getActiveElement().attr('data-element-id');
        var key = "active_fade_in_load";
        var cssSelector = getActiveElementId()+"."+key;
        var jsToRender = {delay: $("#fade_in_on_load_delay").val(), selector: getActiveElement().attr('id'), key: key};

        addCurrentElementData("fade_in_on_load_opacity_to",JSON.stringify(jsToRender),"renderjs");
        changeStylesheetRule(s,cssSelector, "opacity", $(this).val());
    });





    /*******Slide in right animation*********/

    $(document).on('change',"#slide_in_right_opacity_from",function(){
        addCurrentElementData("slide_in_right_opacity_from",$(this).val(),"animation");
    });

    $(document).on('change',"#slide_in_right_opacity_to",function(){
        addCurrentElementData("slide_in_right_opacity_to",$(this).val(),"animation");
    });

    $(document).on('keyup',"#slide_in_right_duration",function(){
        addCurrentElementData("slide_in_right_duration",$(this).val(),"animation");
    });

    var offsetLeft = getActiveElement().css('left');

    /*changeStylesheetRule(s,getActiveElementId(), "left", "0px"); //Set left out of screen
    changeStylesheetRule(s,getActiveElementId(), "opacity", "0"); //Set opacity
    changeStylesheetRule(s,getActiveElementId(), "transition", "left 0.5s"); //Set duration of transistion
    setTimeout(function(){
        changeStylesheetRule(s,getActiveElementId(), "left", offsetLeft+"px"); //Set duration of transistion
    },2000);*/

});
