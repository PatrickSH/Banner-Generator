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
        var cssSelector = ".live " + getActiveElementId();
        changeStylesheetRule(s,cssSelector, "opacity", $(this).val());
    });

    $(document).on('keyup',"#fade_in_on_hover_duration",function(){
        var cssSelector = ".live " + getActiveElementId();
        console.log("opacity "+$(this).val()+"s");
        changeStylesheetRule(s,cssSelector, "transition", "opacity "+$(this).val()+"s");
    });

    $(document).on('change',"#fade_in_on_hover_opacity_to",function(){
        addCurrentElementData("fade_in_on_hover_opacity_to",$(this).val(),"animation");
        var cssSelector = ".live " + getActiveElementId()+":hover";
        changeStylesheetRule(s,cssSelector, "opacity", $(this).val());
    });

    /********Fade in on load*********/

    $(document).on('keyup',"#fade_in_on_load_duration",function(){
        addCurrentElementData("fade_in_on_load_duration",$(this).val(),"animation");

        var cssSelector = ".live " + getActiveElementId();
        changeStylesheetRule(s,cssSelector, "transition", "opacity "+$(this).val()+"s");
    });

    $(document).on('keyup',"#fade_in_on_load_delay",function(){
        addCurrentElementData("fade_in_on_load_delay",$(this).val(),"animation");
    });

    $(document).on('change',"#fade_in_on_load_opacity_from",function(){
        addCurrentElementData("fade_in_on_load_opacity_from",$(this).val(),"animation");

        unlockNextElement($(this));
        var cssSelector = ".live " + getActiveElementId();
        changeStylesheetRule(s,cssSelector, "opacity", $(this).val());
    });

    $(document).on('change',"#fade_in_on_load_opacity_to",function(){
        addCurrentElementData("fade_in_on_load_opacity_to",$(this).val(),"animation");

        var dataElementId = getActiveElement().attr('data-element-id');
        var key = "active_fade_in_load";
        var cssSelector = ".live " + getActiveElementId()+"."+key;
        var jsToRender = {delay: $("#fade_in_on_load_delay").val() * 1000,
            selector: getActiveElement().attr('id'),
            animatingTime: $("#fade_in_on_load_duration").val(),
            key: key
        };

        addCurrentElementData("fade_in_on_load_opacity_to",JSON.stringify(jsToRender),"renderjs");
        changeStylesheetRule(s,cssSelector, "opacity", $(this).val());
    });

    /*******Slide in left animation*********/

    $(document).on('keyup',"#slide_in_left_delay",function(){
        addCurrentElementData("slide_in_left_delay",$(this).val(),"animation");
    });

    $(document).on('keyup',"#slide_in_left_duration",function(){
        var cssSelector = ".live " + getActiveElementId();
        var offsetLeft = getActiveElement().css('left');
        var key = "active_slide_in_left";
        addCurrentElementData("slide_in_left_duration",$(this).val(),"animation");

        //Initial values
        changeStylesheetRule(s,cssSelector, "left", "-200px !important");
        changeStylesheetRule(s,cssSelector, "opacity", "0");
        changeStylesheetRule(s,cssSelector, "transition", "left "+$(this).val()+"s");
        //Values once run
        changeStylesheetRule(s,cssSelector+"."+key, "left", offsetLeft+" !important");
        changeStylesheetRule(s,cssSelector+"."+key, "opacity", "1");
        var jsToRender = {delay: $("#slide_in_left_delay").val() * 1000,
            selector: getActiveElement().attr('id'),
            animatingTime: $(this).val(),
            key: key
        };

        addCurrentElementData("slide_in_left_duration",JSON.stringify(jsToRender),"renderjs");
    });

    /*******Slide in right animation*********/

    $(document).on('keyup',"#slide_in_right_delay",function(){
        addCurrentElementData("slide_in_right_delay",$(this).val(),"animation");
    });

    $(document).on('keyup',"#slide_in_right_duration",function(){
        var cssSelector = ".live " + getActiveElementId();
        var offsetRight = getActiveElement().css('right');
        var key = "active_slide_in_right";
        getActiveElement().addClass('remove-left');

        changeStylesheetRule(s,cssSelector+"."+key, "right", offsetRight+" !important");
        addCurrentElementData("slide_in_right_duration",$(this).val(),"animation");

        //Initial values
        changeStylesheetRule(s,cssSelector, "right", "-200px !important");
        changeStylesheetRule(s,cssSelector, "opacity", "0");
        changeStylesheetRule(s,cssSelector, "transition", "right "+$(this).val()+"s");

        //Values once run
        changeStylesheetRule(s,cssSelector+"."+key, "opacity", "1");

        //changeStylesheetRule(s,cssSelector+"."+key, "right", offsetRight+" !important");
        var jsToRender = {delay: $("#slide_in_right_delay").val() * 1000,
            selector: getActiveElement().attr('id'),
            animatingTime: $(this).val(),
            key: key,
        };

        addCurrentElementData("slide_in_right_duration",JSON.stringify(jsToRender),"renderjs");
    });
});
