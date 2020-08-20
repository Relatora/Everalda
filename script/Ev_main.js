$(document).ready(function () { // jQuery detects the state of readiness for code to execute safely

    initialize();   //calls initialize function

});

function initialize() {

    // Animation of subtitle found under Everalda banner at the top of every webpage
    $("#subtitle").animate(
        { opacity: 0.2, left: "+=275" }, 1000, "easeInExpo")
        .animate({ opacity: 1, fontSize: "145%", left: "-=275" }, 1000, "easeOutExpo");

    // Animation of the navigation menu
    $("#menuwrapper").animate(
        { opacity: 0.2, height: "toggle" }, 500, "easeInExpo")
        .animate({ opacity: 1, height: "toggle" }, 1000, "easeOutExpo");

    // Animation of the blue box container
    $(".blue").animate(
        { opacity: 0.2 }, 500, "easeOutBounce")
        .animate({ opacity: 1 }, 1000, "easeOutBounce");

    // Subtle animation over H1
    $("#bounce h1").hover(function () {
        $(this).animate(
            { fontSize: "200%", opacity: .2, left: "+=275" }, 2000, "easeInExpo")
            .animate(
                { fontSize: "175%", left: "-=275", opacity: 1 }, 1000, "easeOutExpo")
            .delay(5000).stop();

    }); // end hover

    // Animation for shrinking all containers following a H3 on page load
    $("#bounce h3").each(function () {
        // element == this
        $(this).next().slideUp(2000, "easeInBounce");
    });

    // Following the previous animation expanding all containers bringing them to normal. Cool effect!
    $("#bounce h3").each(function () {
        // element == this
        $(this).next().slideDown(2000, "easeOutBounce");
    });

    // The use of easing on H3 click to close and expand. Can be viewed on About Everalda and Meet Our Team.
    $("#bounce h3").click(function () {
        if ($(this).attr("class") == "minus") {
            $(this).next().slideDown(1000, "easeOutBounce");
            $(this).toggleClass('minus');
        }
        else {
            $(this).next().slideUp(1000, "easeInBounce");
            $(this).toggleClass('minus');
        }
    });

    // created as a quick fix for the creation of the Flickr page navigation menu item.
    $(".dropbtn, .drop").mouseenter(function () {
        $("nav div").addClass("dropdown");
    });

    // hide the flickr menu item
    $(".dropbtn").mouseleave(function () {
        $("nav div").removeClass("dropdown");


    });
}
