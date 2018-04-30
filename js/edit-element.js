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

    $(".media-dimensions").attr('data-relevant-for',JSON.stringify([
        'video', 'image'
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

    $(".txt_color_single_holder").attr('data-relevant-for',JSON.stringify([
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

    $(".font_css_link_single_holder").attr('data-relevant-for',JSON.stringify([
        'text'
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
        $(".banner-edit-element > div").show(); //Show all our editing options from the start
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
                console.log(relevansFor,relevans);
                if(relevansFor.indexOf(relevans) == -1){ // Not relevant for our current item - hide
                    $(this).hide();
                }else{
                    $(this).show();
                }
            }
        });
    }


    $.get("http://api.danban.dev.cc/fonts/google/get",{},function(data){
        for(var i = 0; i < data.items.length; i++){
            var current = data.items[i];
            $("#font_css_link").append('<option value="'+current.family+'">'+current.family+'</option>');
            $("#font_css_link_single").append('<option value="'+current.family+'">'+current.family+'</option>');
        }
    });

    /**
     * Rotation of element option
     */
    $("#rotation").on('keyup',function(){
        changeStylesheetRule(s,getActiveElementId(), "transform", 'rotate('+$(this).val()+'deg)');
        addCurrentElementData("rotation",$(this).val());
    });


    /**
     * Adds CSS font link to single element
     */
    $(document).on('change',"#font_css_link_single",function(){
        var link = 'https://fonts.googleapis.com/css?family='+$(this).val();
        $("link[data-family='"+$(this).val()+"']").remove();
        $("head").prepend("<link href='"+link+"' rel='stylesheet' data-type='google-font' data-family='"+$(this).val()+"'>");
        changeStylesheetRule(s,getActiveElementId(), "font-family", $(this).val());

        addCurrentElementData("font_css_link_single",$(this).val());
    });

    /**
     * Changes text color of single element
     */
    $(document).on('change','#txt_color_single',function(){
        changeStylesheetRule(s,getActiveElementId(), "color", $(this).val());
        addCurrentElementData("txt_color_single",$(this).val());
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
     * Deletes a banner element
     */
    $(document).on('click',".trash-item",function () {
        var element_id = $(this).attr('data-trash-element');
        swal({
            title: "Are you sure?",
            text: "This action cannot be undone!",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                $("[data-element-id='"+element_id+"']").remove();
            }
        });
    });

    /**
     * Changes text on change to text edit box
     */
    $(document).on('keyup','#txtEdit',function () {
        getActiveElement().text($(this).val());
    })

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
        if(currentElHasRelevans("text")){ //If this is a text field we want to assing that text to edit box.
            $("#txtEdit").text(getActiveElement().text());
        }
        getCurrentElementData("animation");
        getCurrentElementData();
    });
});
