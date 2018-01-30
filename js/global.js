var standardClasses = "dragger draggable ui-widget-content banner-element";

/**
 * Refreshes our current element list
 */
function refreshElementList()
{
    $(".banner-element-holder").empty();
    var html = '<ul class="list-group">';
    $(".banner-element").each(function(){
        html += "<li class='list-group-item' data-element-id='"+$(this).attr('data-element-id')+"' >"+$(this).attr('data-type')+" - "+$(this).attr('data-element-id')+"</li>";
    });
    html +='</ul>';
    $(".banner-element-holder").append(html);
}

/**
 * Makes as new unique element Id
 */
function elementId()
{
    var highestId = 0;
    $(".banner-element").each(function(){
        highestId = parseInt($(this).attr('data-element-id'));
    });
    var nextId = highestId + 1;
    return nextId;
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