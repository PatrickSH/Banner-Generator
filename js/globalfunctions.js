
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

/**
 * Checks if a given assest is loaded
 */
function isAssetLoaded(url, tagName, prop)
{
    var assets = document.getElementsByTagName(tagName);
    for (var i = assets.length; i--;) {
        if (assets[i][prop] == url) return true;
    }
    return false;
}