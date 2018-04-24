$(document).ready(function(){
    $("#animationOverviewAccordHEdit").on('click',function(){
        var html = "<ul class='animationlist'>";
        $('[data-renderjs]').each(function(){
            var parsed = JSON.parse($(this).attr('data-renderjs'));
            for(var i = 0; i < parsed.length; i++)
            {
                var key = Object.keys(parsed[i]).pop();
                var obj = JSON.parse(parsed[i][key]);
                var name = $("#"+obj.selector).attr('data-type')+" - "+$("#"+obj.selector).attr('data-element-id');
                var animatingTime = parseInt(obj.animatingTime);
                var delay = obj.delay / 1000;
                var totalAnimatingTime = animatingTime + delay;

                html +="<li>"+name;
                html +="<ul><li>Delay: "+delay+" seconds</li><li>Animating time: "+animatingTime+" seconds</li>"
                +
                "<li>Total animation time: "+totalAnimatingTime+" seconds</li></ul></li>";

            };
        });
        html +="</ul>";
        $("#animationOverviewAccordEdit").html(html);
    });
});