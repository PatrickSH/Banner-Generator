var animationObj;
var animationJs;
var variable;

function getNeededAnimation(js,obj)
{
    animationObj = obj;
    animationJs = js;
    variable = uniqueId();

    var theAnimation; //Holds animation javascript

    var key = obj.key;
    if(obj.delay == 0) // we dont want delay
        key = key+"_no_delay";

    switch (key){
        case "active_fade_in_load_no_delay":
            theAnimation = active_fade_in_load_no_delay();
            break;
        case "active_fade_in_load":
            theAnimation = active_fade_in_load();
            break;
        case "active_slide_in_left_no_delay":
            theAnimation = active_slide_in_left_no_delay();
            break;
        case "active_slide_in_left":
            theAnimation = active_slide_in_left();
            break;
        case "active_slide_in_right_no_delay":
            theAnimation = active_slide_in_right_no_delay();
            break;
        case "active_slide_in_right":
            theAnimation = active_slide_in_right();
            break;
    }

    return theAnimation;
}


function active_fade_in_load_no_delay()
{
    animationJs += "var "+variable+" = document.getElementById('"+animationObj.selector+"');";
    animationJs += variable+'.className += " '+animationObj.key+'"';

    return animationJs;
}

function active_fade_in_load()
{
    animationJs += "setTimeout(function(){";
    animationJs += "var "+variable+" = document.getElementById('"+animationObj.selector+"');";
    animationJs += variable+'.className += " '+animationObj.key+'"';
    animationJs += "},"+animationObj.delay+");";

    return animationJs;
}

function active_slide_in_left_no_delay()
{
    animationJs += "var "+variable+" = document.getElementById('"+animationObj.selector+"');";
    animationJs += variable+'.className += " '+animationObj.key+'"';

    return animationJs;
}

function active_slide_in_left()
{
    animationJs += "setTimeout(function(){";
    animationJs += "var "+variable+" = document.getElementById('"+animationObj.selector+"');";
    animationJs += variable+'.className += " '+animationObj.key+'"';
    animationJs += "},"+animationObj.delay+");";

    return animationJs;
}

function active_slide_in_right_no_delay()
{
    animationJs += "var "+variable+" = document.getElementById('"+animationObj.selector+"');";
    animationJs += variable+'.className += " '+animationObj.key+'"';

    return animationJs;
}

function active_slide_in_right()
{
    animationJs += "setTimeout(function(){";
    animationJs += "var "+variable+" = document.getElementById('"+animationObj.selector+"');";
    animationJs += variable+'.className += " '+animationObj.key+'"';
    animationJs += "},"+animationObj.delay+");";

    return animationJs;
}
