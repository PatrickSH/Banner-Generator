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

    function fade_in_on_hover(obj)
    {
        /*fade_in_on_hover_opacity_from*/
        addCurrentElementData("fade_in_on_hover_opacity_from",obj.fade_in_on_hover_opacity_from.val(),"animation");
        var cssSelector = ".live " + getActiveElementId();
        changeStylesheetRule(s,cssSelector, "opacity", obj.fade_in_on_hover_opacity_from.val());
        /*fade_in_on_hover_duration*/
        changeStylesheetRule(s,cssSelector, "transition", "opacity "+obj.fade_in_on_hover_duration.val()+"s");
        /*fade_in_on_hover_opacity_to*/
        addCurrentElementData("fade_in_on_hover_opacity_to",obj.fade_in_on_hover_opacity_to.val(),"animation");
        cssSelector = ".live " + getActiveElementId()+":hover";
        changeStylesheetRule(s,cssSelector, "opacity", obj.fade_in_on_hover_opacity_to.val());

    }

    function fade_in_on_load(obj)
    {
        /*fade_in_on_load_duration*/
        addCurrentElementData("fade_in_on_load_duration",obj.fade_in_on_load_duration.val(),"animation");
        var cssSelector = ".live " + getActiveElementId();
        changeStylesheetRule(s,cssSelector, "transition", "opacity "+obj.fade_in_on_load_duration.val()+"s");

        /*fade_in_on_load_delay*/
        addCurrentElementData("fade_in_on_load_delay",obj.fade_in_on_load_delay.val(),"animation");

        /*fade_in_on_load_opacity_from*/
        addCurrentElementData("fade_in_on_load_opacity_from",obj.fade_in_on_load_opacity_from.val(),"animation");
        cssSelector = ".live " + getActiveElementId();
        changeStylesheetRule(s,cssSelector, "opacity", obj.fade_in_on_load_opacity_from.val());

        /*fade_in_on_load_opacity_to*/
        addCurrentElementData("fade_in_on_load_opacity_to",obj.fade_in_on_load_opacity_to.val(),"animation");

        var dataElementId = getActiveElement().attr('data-element-id');
        var key = "active_fade_in_load";
        cssSelector = ".live " + getActiveElementId()+"."+key;
        var jsToRender = {delay: obj.fade_in_on_load_delay.val() * 1000,
            selector: getActiveElement().attr('id'),
            animatingTime: obj.fade_in_on_load_duration.val(),
            key: key
        };

        addCurrentElementData("fade_in_on_load_opacity_to",JSON.stringify(jsToRender),"renderjs");
        changeStylesheetRule(s,cssSelector, "opacity", obj.fade_in_on_load_opacity_to.val());


    }

    function slide_in_left(obj)
    {
        /*slide_in_left_delay*/
        addCurrentElementData("slide_in_left_delay",obj.slide_in_left_delay.val(),"animation");
        /*slide_in_left_duration*/
        var cssSelector = ".live " + getActiveElementId();
        var offsetLeft = getActiveElement().css('left');
        var key = "active_slide_in_left";
        addCurrentElementData("slide_in_left_duration",obj.slide_in_left_duration.val(),"animation");

        //Initial values
        changeStylesheetRule(s,cssSelector, "left", "-200px !important");
        changeStylesheetRule(s,cssSelector, "opacity", "0");
        changeStylesheetRule(s,cssSelector, "transition", "left "+obj.slide_in_left_duration.val()+"s");
        //Values once run
        changeStylesheetRule(s,cssSelector+"."+key, "left", offsetLeft+" !important");
        changeStylesheetRule(s,cssSelector+"."+key, "opacity", "1");
        var jsToRender = {delay: obj.slide_in_left_delay.val() * 1000,
            selector: getActiveElement().attr('id'),
            animatingTime: obj.slide_in_left_duration.val(),
            key: key
        };

        addCurrentElementData("slide_in_left_duration",JSON.stringify(jsToRender),"renderjs");

    }

    function slide_in_right(obj)
    {
        /*slide_in_right_delay*/
        addCurrentElementData("slide_in_right_delay",obj.slide_in_right_delay.val(),"animation");

        /*slide_in_right_duration*/
        var cssSelector = ".live " + getActiveElementId();
        var offsetRight = getActiveElement().css('right');
        var key = "active_slide_in_right";
        getActiveElement().addClass('remove-left');

        changeStylesheetRule(s,cssSelector+"."+key, "right", offsetRight+" !important");
        addCurrentElementData("slide_in_right_duration",obj.slide_in_right_duration.val(),"animation");

        //Initial values
        changeStylesheetRule(s,cssSelector, "right", "-200px !important");
        changeStylesheetRule(s,cssSelector, "opacity", "0");
        changeStylesheetRule(s,cssSelector, "transition", "right "+obj.slide_in_right_duration.val()+"s");

        //Values once run
        changeStylesheetRule(s,cssSelector+"."+key, "opacity", "1");

        //changeStylesheetRule(s,cssSelector+"."+key, "right", offsetRight+" !important");
        var jsToRender = {delay: obj.slide_in_right_delay.val() * 1000,
            selector: getActiveElement().attr('id'),
            animatingTime: obj.slide_in_right_duration.val(),
            key: key,
        };

        addCurrentElementData("slide_in_right_duration",JSON.stringify(jsToRender),"renderjs");

    }


    /********Fade in on hover*********/

    $(document).on('change',"#fade_in_on_hover_opacity_from",function(){
        unlockNextElement($(this));
    });

    $(document).on('change',"#fade_in_on_hover_opacity_to",function(){
        var obj = {
            fade_in_on_hover_opacity_from : $("#fade_in_on_hover_opacity_from"),
            fade_in_on_hover_duration : $("#fade_in_on_hover_duration"),
            fade_in_on_hover_opacity_to : $(this)
        }
        fade_in_on_hover(obj);
    });

    /********Fade in on load*********/

    $(document).on('change',"#fade_in_on_load_opacity_from",function(){
        unlockNextElement($(this));
    });

    $(document).on('change',"#fade_in_on_load_opacity_to",function(){
        var obj = {
            fade_in_on_load_opacity_to : $(this),
            fade_in_on_load_opacity_from : $("#fade_in_on_load_opacity_from"),
            fade_in_on_load_delay : $("#fade_in_on_load_delay"),
            fade_in_on_load_duration : $("#fade_in_on_load_duration")
        };

        fade_in_on_load(obj);
    });

    /*******Slide in left animation*********/
    

    $(document).on('keyup',"#slide_in_left_duration",function(){
        var obj = {
            slide_in_left_delay : $("#slide_in_left_delay"),
            slide_in_left_duration : $("#slide_in_left_duration")
        }
        slide_in_left(obj);
    });

    /*******Slide in right animation*********/

    $(document).on('keyup',"#slide_in_right_duration",function(){
        var obj = {
            slide_in_right_duration : $(this),
            slide_in_right_delay : $("#slide_in_right_delay")
        }
        slide_in_right(obj);
    });
});
