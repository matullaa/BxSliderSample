$(document).ready(function () {

    $(document).ready(function () {

        var slider = $('.bxslider').bxSlider(
            {
                slideWidth:730,
                captions:true,
                adaptiveHeight:true,
                height:220

            }
        );
        $.getJSON('images/data.json', function (data) {
                var output = "";
                for (var i in data.ImageList) {
                    output += "<li><img src=" + data.ImageList[i].source + " title=" + data.ImageList[i].title + "/></li>";
                }
                //output += "</ul>";
                $('.bxslider').append(output);
                slider.reloadSlider();
            }
        );

    });
});