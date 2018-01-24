
/**
 * Refreshes our current element list
 */
function refreshElementList()
{
    $(".banner-element-holder").empty();
    $(".banner-element").each(function(){
        $(".banner-element-holder").append("<p data-element-id='"+$(this).attr('data-element-id')+"'>"+$(this).attr('data-type')+" - "+$(this).attr('data-element-id')+"</p>");
    });
}
