Dropzone.autoDiscover = false;
$(document).ready(function(){
    var banner = $(".banner");
    var s = document.styleSheets[0];

    /**
     * Toggles gridlines
     */
    $("#show-grid-lines").on('click',function(){
        if($(this).is(':checked')){
            banner.append('<div class="grid"></div>');
        }else{
            $("#banner .grid").remove();
        }
    });

    /**
     * Sets height and width of banner
     */
    $(".dimensions input").on('keyup',function(){
        changeStylesheetRule(s,"#banner", "width", $("#width").val()+"px");
        changeStylesheetRule(s,"#banner", "height", $("#height").val()+"px");
    });

    /**
     * Set background color and color of texts
     */
    $("#bg_color, #txt_color").on('change',function(){
        changeStylesheetRule(s,"#banner", "background-color", $("#bg_color").val());
        changeStylesheetRule(s,"#banner", "color", $("#txt_color").val());
    });

    /**
     * Adds texts
     */
    $("#add_text").on('click',function(){
        switch($("#txt_type").val()){
            case "p":
                banner.append("<p id='"+uniqueId()+"' class='banner-text-element "+standardClasses+"' data-type='Header paragrah' data-relevans='text' data-element-id='"+elementId()+"'>"+$("#txt").val()+"</p>");
                $('.draggable').draggable({containment:"#banner"});
                break;
            case "h1":
                banner.append("<h1 id='"+uniqueId()+"' class='banner-text-element "+standardClasses+"' data-type='Header 1' data-relevans='text' data-element-id='"+elementId()+"'>"+$("#txt").val()+"</h1>");
                $('.draggable').draggable({containment:"#banner"});
                break;
            case "h2":
                banner.append("<h2 id='"+uniqueId()+"' class='banner-text-element "+standardClasses+"' data-type='Header 2' data-relevans='text' data-element-id='"+elementId()+"'>"+$("#txt").val()+"</h2>");
                $('.draggable').draggable({containment:"#banner"});
                break;
        }
        $("#txt").val("");
        refreshElementList();
    });

    /**
     * Makes sure we have draggable class
     */
    $("#banner").children().each(function(){
        if(!$(this).hasClass('grid')){
            $(this).draggable();
        }
    });

    /**
     * Adds CSS font link
     */
    $("#font_css_link").on('keyup',function(){
        if(!isAssetLoaded($(this).val(), 'link', 'href') && $(this).val() != ""){
            $("head").prepend("<link href='"+$(this).val()+"' rel='stylesheet'>");
        }
    });

    /**
    * Adds CSS font family
    */
    $("#font_css_family").on('keyup',function(){
        if($(this).val() != ""){
            changeStylesheetRule(s,"#banner", "font-family", $(this).val());
        }
    });

    /**
     * Set banner border
     */
    $("#banner_border_color").on('change',function(){
        changeStylesheetRule(s,"#banner", "border", $("#banner_border_width").val()+"px solid "+$(this).val());
    });

    /**
     * Add text decoration
     */
    $("#txt_style").on('change',function(){
        console.log($(this).val());
        changeStylesheetRule(s,getActiveElementId(), "text-decoration", $(this).val());
    });
    var dropObj = {
        url: $("#file-upload").attr('action'),
        acceptedFiles: "image/jpeg,image/png,image/gif,video/mp4,audio/mpeg",
        init: function () {
            this.on("complete", function (file) {
                var path = file.xhr.response;
                var fileType = file.type.split('/')[0];
                switch(fileType){
                    case "image":
                        banner.append("<img id='"+uniqueId()+"' class='banner-image-element "+standardClasses+"' data-relevans='image' src='"+path+"' alt='' data-type='Image' data-element-id='"+elementId()+"'/>");
                        $('.draggable').draggable({containment:"#banner"});
                        break;
                    case "video":
                        break;
                    case "audio":
                        break;
                }
                refreshElementList();
            });
        }
    };
    var myDropzone = new Dropzone("#file-upload", dropObj);
});
