$(document).ready(function() {

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

});
