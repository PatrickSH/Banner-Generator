$(document).ready(function() {

    var stylesheetDocument = false; //If false we use style in style tag if true we use stylesheet
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

        }else{ //We want to use styletag make it.
            var style = "<style>";
                for(var i = 0; i < s.cssRules.length; i++){
                    style += s.cssRules[i]["cssText"];
                }
            style += "</style>";

            return style;
        }
    }

    /**
     * Gets banner html
     * @returns {jQuery|HTMLElement}
     */
    function getBannerHtml()
    {
        var bannerHtml = $($("#banner").get(0).outerHTML); //Make object we can play with that wont affect actual banner
        removeGrid(bannerHtml); //Remove grid

        return bannerHtml;
    }

    /**
     * Wraps in html mandatory tags
     * @returns {string}
     */
    function wrapHtml()
    {
        var html = "<!DOCTYPE html>";
            html += "<head>";
            html += prepareStyle();
            html += "</head>";
            html += "<body>";
            html += getBannerHtml().toHtml();
            html += "</body>";
            html += "</html>";

        return html;
    }

    $(document).on('click','#exportAsIframe',function(){
        var html = "<iframe src='about:blank'>";
            html += wrapHtml();
            html += "</iframe>";
        $("#iframeCode").text(html);
        $("#doneExport").modal();

    });


});
