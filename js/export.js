$(document).ready(function() {

    var stylesheetDocument = false; //If false we use style in style tag if true we use stylesheet
    var scriptDocument = false;
    var base64Images = false;
    var cdnImages = false;
    var localImages = false;
    var s = document.styleSheets[0]; //Our styles


    $.fn.extend({
        toHtml: function() {
            return this.get(0).outerHTML; //Make object into HTML
        },

        toHtmlElement: function(){
            return $(this);
        }
    });

    /**
     * Removes grid on banner if present
     * @param banner
     */
    function removeGrid(banner)
    {
        if(banner.children('.grid'))
        {
            banner.children('.grid').remove();
        }
    }

    /**
     * Prepare style for our banner.
     * @returns {string}
     */
    function prepareStyle()
    {
        if(stylesheetDocument){ //We want to use styledocument send ajax request to server
            var style = "<link href='style.css' type='text/css' rel='stylesheet'/>";
            stylesheetDocument = "";
            for(var i = 0; i < s.cssRules.length; i++){
                stylesheetDocument += s.cssRules[i]["cssText"];
            }

            return style;
        }else{ //We want to use styletag make it.
            var style = "<style>";
                for(var i = 0; i < s.cssRules.length; i++){
                    style += s.cssRules[i]["cssText"];
                }
            style += "</style>";

            return style;
        }
    }

    function prepareJs()
    {
        if(scriptDocument){
        }else{
            var js = 'window.onload = function(e){ '

            $('[data-renderjs]').each(function(){
                var parsed = JSON.parse($(this).attr('data-renderjs'));
                for(var i = 0; i < parsed.length; i++)
                {
                    var key = Object.keys(parsed[i]).pop();
                    var obj = JSON.parse(parsed[i][key]);
                    js = getNeededAnimation(js,obj);
                };
            });

            js +="}";

            return "<script>"+js+"</script>";
        }


    }

    /**
     * Gets banner html
     * @returns {jQuery|HTMLElement}
     */
    function getBannerHtml()
    {
        var bannerHtml = $($("#banner").get(0).outerHTML); //Make object we can play with that wont affect actual banner
        $(bannerHtml).addClass('live');
        $(bannerHtml).css('position','relative !important');
        $(bannerHtml).find('.remove-left').css('left','');
        removeGrid(bannerHtml); //Remove grid

        return bannerHtml;
    }

    function getFontLinks()
    {
        var htm = "";
        $("link[data-type=google-font]").each(function(){
           htm += $(this).get(0).outerHTML;
        });

        return htm;
    }

    /**
     * Wraps in html mandatory tags
     * @returns {string}
     */
    function wrapHtml()
    {
        var html = "<!DOCTYPE html>";
            html += "<head>";
            html += getFontLinks();
            html += prepareStyle();
            html += prepareJs();
            html += "</head>";
            html += "<body>";
            html += getBannerHtml().toHtml();
            html += "</body>";
            html += "</html>";

        return html;
    }

    /**
     * Generates Iframe code
     */
    $(document).on('click','#exportAsIframe',function(){
        stylesheetDocument = false;
        var html = "<iframe src='about:blank' srcdoc='"+wrapHtml()+"'>";
            html += "</iframe>";
        $("#iframeCode").text(html);
        $("#doneExport").modal();
    });

    /*
    Runs banner for testing in new tab
     */
    $(document).on('click','#run-animations',function(){
        var wnd = window.open("about:blank", "");
        wnd.document.write(wrapHtml());
        wnd.document.close();
    });

    /**
     * Exports index.html with <style>
     */
    $(document).on('click','#exportAsInlineCSS',function(){
        stylesheetDocument = false;
        $.post("http://api.danban.dev.cc/file/textfile/store",{code: wrapHtml()},function(){
            $("#doneExport").modal();
        });
    });

    /**
     * Exports with stylesheet and index.html
     */
    $(document).on('click','#exportAsSeperateCSS',function(){
        stylesheetDocument = true;
        var html = wrapHtml();
        $.post("http://api.danban.dev.cc/file/textfile/store",{css_type: "document", css: stylesheetDocument, code: html},function(){
            $("#doneExport").modal();
        });
    });


});
