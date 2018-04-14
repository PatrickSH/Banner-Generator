/**
 * Makes a random class for element
 * @returns {string}
 */
function uniqueId()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    text = text.toLowerCase();
    return text+""+Math.floor(Math.random() * 10000000)+""+Math.round(+new Date()/1000)+""+text;
}

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

function getActiveElement()
{
    return $("body .active-banner-element");
}

function getActiveElementId()
{
    return "#"+getActiveElement().attr('id');
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


/**
 * Saves data on element in json element based on key / value
 * @param key
 * @param value
 */
function addCurrentElementData(key,value,dataAttrName)
{
    if(dataAttrName === undefined){ //If is undefined we use default which is element-data
        dataAttrName = "element-data";
    }

    if(getActiveElement().attr("data-"+dataAttrName) && getActiveElement().attr("data-"+dataAttrName) != ""){
        var currentData = JSON.parse(getActiveElement().attr("data-"+dataAttrName));
        for(var i = 0; i < currentData.length; i++)
        {
            if(currentData[i][key]){
                currentData.splice(i,1);
            }
        }
    }else{
        var currentData = [];
    }
    var obj = {};
    obj[key] = value;

    currentData.push(obj);
    currentData = JSON.stringify(currentData);

    getActiveElement().attr("data-"+dataAttrName,currentData);
}

/**
 * Gets all data for current element
 */
function getCurrentElementData(dataAttrName)
{
    if(dataAttrName === undefined){ //If is undefined we use default which is element-data
        dataAttrName = "element-data";
    }

    if(getActiveElement().attr("data-"+dataAttrName) && getActiveElement().attr("data-"+dataAttrName) != ""){
        var data = JSON.parse(getActiveElement().attr("data-"+dataAttrName));
        for(var i = 0; i < data.length; i++)
        {
            for(var k in data[i])
            {
            console.log(k,data[i][k]);
                $("#"+k).val(data[i][k]);
            }
        }
    }
}

function clearAllFields()
{
    $(".banner-edit-element input, .banner-edit-element select").val("");
}

function unlockNextElement(el)
{
    el.parent().next().children(2).last().attr('disabled',false);
}
