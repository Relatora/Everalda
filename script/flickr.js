$(document).ready(function () {
    // variable deceleration
    var searchTerm;
    var counter = 0;

    $("#search").focus();                       //Brings focus to search textbox
    animation();    // Calls animation function

    // This function takes in a search tag and renders the result using Lightbox 2 plugin
    $("#btnSearch").click(function () {
        searchTerm = "";        // initializes searchTerm variable
        if ($("#search").val() == "") { alert("You must enter one or more tags!"); } else {     // Alerts the user that nothing was entered in the search field
            searchTerm = $("#search").val(); var url =  // loads searchTerm with the flickr url injected with the search tag
                "http://api.flickr.com/services/feeds/photos_public.gne?" + "format=json&jsoncallback=?&tags=" + searchTerm + "&tagmode=all";
            $.getJSON(url, function (data) {            // gets the json data returned from flickr
                var html = " <div style='width:90%; margin:0 auto'><h1>Flickr Results</h1>";    // initializes html string
                $.each(data.items, function (i, item) { // Iterates through json data building html result
                    counter = counter + 1;  //counter for images
                    html += "<a href='" + item.media.m + "' data-title='" + item.title + "' data-lightbox='image-" + counter + "'>" + "<img src='" + item.media.m + "' alt='" + item.title +
                        "' style='padding:1.5%'></a>";
                });
                html += "</div>"
                // alert(html);
                $("#photos").html(html);    // Adds html to container with the id photos
            });
        }
    });
    function animation() {
        // Animating the search box container on page load
        $(".flick").animate(
            { opacity: .1, left: "+=600" }, 1500, "easeInExpo")
            .animate(
                { left: "-=350", opacity: 1 }, 1000, "easeOutExpo");
        // .delay(5000).finish();

        // Animations for search button
        // ----------------------------------------------------
        $("#btnSearch").mouseenter(function () {
            $(this).animate({fontSize:'20px', width:'150px'}, 200).stop();
            $('html,body').css('cursor', 'pointer');
        });

        $("#btnSearch").focus(function () {
            $(this).animate({fontSize:'20px', width:'150px'}, 200).stop();
            $('html,body').css('cursor', 'pointer');
        });

        $("#btnSearch").mouseleave(function () {
            $(this).animate({fontSize:'14px',width:'75px'}, 200);
            $('html,body').css('cursor', 'default');
        });

        $("#btnSearch").blur(function () {
            $(this).animate({fontSize:'14px',width:'75px'}, 200);
            $('html,body').css('cursor', 'default');
        });
        // ----------------------------------------------------
    }
});