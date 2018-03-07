$(document).ready(function() {
    var s = document.styleSheets[0];
    //Set relavant for
    $(".texts").attr('data-relevant-for',JSON.stringify([
        'text'
    ]));

    $(".graphics").attr('data-relevant-for',JSON.stringify([
        'text','video',
        'image'
    ]));

    $(".txt_holder").attr('data-relevant-for',JSON.stringify([
        'text'
    ]));

    $(".animation").attr('data-relevant-for',JSON.stringify([
        'text','video',
        'image'
    ]));

    $(".bg_color_holder").attr('data-relevant-for',JSON.stringify([
    ]));

    $(".txt_type_holder").attr('data-relevant-for',JSON.stringify([
        'text'
    ]))

    $(".txt_color_holder").attr('data-relevant-for',JSON.stringify([
        'text'
    ]));

    $(".txt_style_holder").attr('data-relevant-for',JSON.stringify([
        'text'
    ]));

    $(".font_css_link_holder").attr('data-relevant-for',JSON.stringify([
        'text'
    ]));

    $(".font_css_family_holder").attr('data-relevant-for',JSON.stringify([
        'text'
    ]));

    $(".image_rotation_holder").attr('data-relevant-for',JSON.stringify([
        'image'
    ]));

    $(".image_width_holder").attr('data-relevant-for',JSON.stringify([
        'image'
    ]));

    $(".image_greyscale_holder").attr('data-relevant-for',JSON.stringify([
        'image'
    ]));

    $(".image_greyscale_holder").attr('data-relevant-for',JSON.stringify([
        'text','image',
        'video'
    ]));


    $(".blur_holder").attr('data-relevant-for',JSON.stringify([
        'text'
    ]));
    /**Edit actions****/

    function showAllEditingFields()
    {
        $(".banner-edit-element div").show(); //Show all our editing options from the start
    }

    /**
     * Determine editing fields to show based on JSON relevans on object
     * @param relevans : what relevans we will look for
     */
    function determineEditingFieldsToShow(relevans)
    {
        showAllEditingFields();

        $(".banner-edit-element div").each(function(){ //Hide editing options that is not relevant for our current object
            var relevansFor = $(this).attr('data-relevant-for');
            if(typeof relevansFor !== "undefined"){
                relevansFor = JSON.parse(relevansFor);
                if(relevansFor.indexOf(relevans) == -1){ // Not relevant for our current item - hide
                    $(this).hide();
                }
            }
        });
    }

    /**
     * Rotation of element option
     */
    $("#rotation").on('keyup',function(){
        changeStylesheetRule(s,getActiveElementId(), "transform", 'rotate('+$(this).val()+'deg)');
        addCurrentElementData("rotation",$(this).val());
    });

    /**
     * Setting width of element option
     */
    $("#image_width").on('keyup',function(){
        changeStylesheetRule(s,getActiveElementId(), "max-width", $(this).val()+"px");
        addCurrentElementData("image_width",$(this).val());
    });

    /**
     * Seeting greyscale on element option
     */
    $("#image_greyscale").on('keyup',function(){
        changeStylesheetRule(s,getActiveElementId(), "filter", "grayscale("+$(this).val()+"%)");
        addCurrentElementData("image_greyscale",$(this).val());
    });

    /**
     * Setting blur on element
     */
    $("#blur").on('keyup',function(){
        changeStylesheetRule(s,getActiveElementId(), "filter", "blur("+$(this).val()+"px)");
        addCurrentElementData("blur",$(this).val());
    });

    /**
     * Setting element opacity
     */
    $("#element_opacity").on('keyup',function(){
        if($(this).val() == ""){
            changeStylesheetRule(s,getActiveElementId(), "opacity", "1");
        }else{
            changeStylesheetRule(s,getActiveElementId(), "opacity", '0.'+$(this).val());
            addCurrentElementData("element_opacity",$(this).val());
        }
    });

    $("#txt_style").on('change',function(){
        changeStylesheetRule(s,getActiveElementId(), "text-decoration", $(this).val());
        addCurrentElementData("txt_style",$(this).val());
    });

    /**
     * Toggles active element on banner
     */
    $(document).on('click','.banner-element-holder li',function(){
        var elementUid = $(this).attr('data-element-id');
        var relevans = $("#banner [data-element-id="+elementUid+"]").attr('data-relevans');
        clearAllFields();
        if($(this).hasClass('active-in-element-list')){ //We pressed active element
            $(".banner-element-holder li").removeClass('active-in-element-list');
            $("#banner").children().removeClass('active-banner-element');
            showAllEditingFields();
        }else{
            $(".banner-element-holder li").removeClass('active-in-element-list');
            $(this).addClass('active-in-element-list');
            $("#banner").children().removeClass('active-banner-element');
            $("#banner [data-element-id='"+elementUid+"']").addClass('active-banner-element');

            determineEditingFieldsToShow(relevans);
        }
        getCurrentElementData("animation");
        getCurrentElementData();
    });
});
