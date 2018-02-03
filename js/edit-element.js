$(document).ready(function() {

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


    /**Edit actions****/

    function showAllEditingFields()
    {
        $(".banner-edit-element div").show(); //Show all our editing options from the start
    }

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
     * Toggles active element on banner
     */
    $(document).on('click','.banner-element-holder li',function(){
        var elementUid = $(this).attr('data-element-id');
        var relevans = $("#banner [data-element-id="+elementUid+"]").attr('data-relevans');
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
    });
});
