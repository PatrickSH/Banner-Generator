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

    /********Fade in*********/

    $(document).on('keyup',"#fade_in_on_hover_duration",function(){
        changeStylesheetRule(s,getActiveElementId(), "transition", "opacity "+$(this).val()+"s");
    });

    $(document).on('change',"#fade_in_on_hover_opacity_from",function(){
        addCurrentElementData("fade_in_on_hover_opacity_from",$(this).val(),"animation");
        changeStylesheetRule(s,getActiveElementId(), "opacity", $(this).val());
    });

    $(document).on('change',"#fade_in_on_hover_opacity_to",function(){
        addCurrentElementData("fade_in_on_hover_opacity_to",$(this).val(),"animation");
        changeStylesheetRule(s,getActiveElementId()+":hover", "opacity", $(this).val());
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
