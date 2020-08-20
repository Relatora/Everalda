// Comments are substituted by a read me document found inside the script folder - Animation is at the bottom of the page
// Animations here are not included in documentation - Only for project purposes - may pursue future animation support
// Hover your mouse over the image then out - then over 2 or 3 - Que events - hope you like it! - Products page
(function ($) {
    $.fn.jsonToWeb = function (options) {
        var defaults = $.extend({
            'textFloat': 'left',
            'textPaddingRight': '.5em',
            'textAlign': 'right',
            'textWidth': '12em',
            'textFamily': '"Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif',
            'textMarginLeft': '0px',
            'textMarginRight': '0px',
            'textMargin': '0 auto',
            'textSize': '.9em',

            'boxBg': '#4e6ec4',
            'boxTextColor': '#FFFFFF',
            'boxBorderColor': '#000000',
            'boxBorderWidth': 'thin',
            'boxBorderRadius': '0 5em 0em 5em',
            'boxShadow': '1em 1em 1em #4C4F4D',
            'boxPadding': '0.5em',
            'boxPaddingLeft': '35%;',
            'boxPaddingRight': '6em',
            'boxFontSize': '1.2em',
            'boxTextShadow': '2px 2px #000000',
            'boxMarginLeft': '25%',
            'boxMarginRight': '0',
            'boxFloat': 'left',
            'boxWidth': '25%',
            'boxPaddingTop': '2%',
            'boxPaddingBottom': '2%',

            'containerHeight': '18em',

            'imagesPath': 'images/strollers/',  //Image path must be specified and image names correspond to product/employee/...
            'jsonSource': 'strollers.json',  // source can be a json array or a json address
            'jsonParametersHTML': 'Stock number,Quantity on hand,Size,Color',   // No name included
            'jsonParametersJSON': 'stock_number,QOH,size,color',  // length should be same as it's HTML counterpart for cohesion
            'nameParameterJSON': 'name',   // will be the title of the box and image
            'containerId': 'json_beautify'
        }, options);

        var o = defaults;
        var paramsHTML = o.jsonParametersHTML.split(',');
        var paramsJSON = o.jsonParametersJSON.split(',');
        var strSpans = "";
        var i = 0;

        return $.getJSON(o.jsonSource, function (data) {
            $.each(data, function () {
                $.each(this, function (key, value) {
                    strSpans = "";
                    var sn = value.stock_number;

                    for (i = 0; i < paramsHTML.length; i++) {
                        strSpans = strSpans + "<span class='textInBox'>" + paramsHTML[i] + ":</span>" + value[paramsJSON[i]] + "<br>";
                    }

                    var control =
                        "<article id='bounce'>" +
                        "<h3 style='font-size: 1.7em'>" +
                        // "<a href='#A" + value[o.nameParameterJSON] + "' style='font-size: 1.7em; font-weight:none'>" +
                        value[o.nameParameterJSON] +
                        // "</a>" +
                        "</h3>" +
                        "<div style='height:" + o.containerHeight + "'>" +
                        "<div class='itemsBox'>" +
                        strSpans +
                        "</div>" +
                        "<div>" +
                        "<img src='" + o.imagesPath + value[o.nameParameterJSON] + ".jpg' style=' float:right; margin-right:12%; width:260px;position:relative; z-index: 0;' class='imgAnim'>" +
                        "</div>" + "<br style='clear:both'" +
                        "</div>" +
                        "</article>";
                    $("#" + o.containerId).append(
                        control
                    );
                });
            });

            $(".textInBox")
                .css('font-family', o.textFamily)
                .css('float', o.textFloat)
                .css('padding-right', o.textPaddingRight)
                .css('text-align', o.textAlign)
                .css('width', o.textWidth)
                .css('margin', o.textMargin)
                .css('margin-left', o.textMarginLeft)
                .css('font-size', o.textSize)
                .css('margin-right', o.textMarginRight)
                ;

            $(".itemsBox")
                .css('transform', 'translateY(50%)')
                .css('position', 'relative')
                .css('float', o.boxFloat)
                .css('background-color', o.boxBg)
                .css('color', o.boxTextColor)
                .css('border-radius', o.boxBorderRadius)
                .css('box-shadow', o.boxShadow)
                .css('padding', o.boxPadding)
                .css('padding-left', o.boxPaddingLeft)
                .css('padding-right', o.boxPaddingRight)
                .css('font-size', o.boxFontSize)
                .css('text-shadow', o.boxTextShadow)
                .css('margin-left', o.boxMarginLeft)
                .css('width', o.boxWidth)
                .css('padding-top', o.boxPaddingTop)
                .css('padding-bottom', o.boxPaddingBottom)
                .css('border-color', o.boxBorderColor)
                .css('border-width', o.boxBorderWidth)
                .css('z-index', '1')
                ;

            // Page load json rendering animation
            $(".imgAnim").animate(
                { opacity: 1, left: "-=600" }, 0, "easeInExpo")
                .animate(
                    { left: "+=600", opacity: 1 }, 1000, "easeOutExpo");

            $(".itemsBox").animate(
                { opacity: .1, left: "+=300" }, 0, "easeInExpo")
                .animate(
                    { left: "-=300", opacity: 1 }, 1000, "easeOutExpo");

            // hover over product images and they will grow and shrink back with cool animations
            $(".imgAnim").mouseenter(function () {
                $(this).animate(
                    { width: "305", marginTop: "-3.2em", left: "+=100" }, 500, "easeInExpo");
                $('html,body').css('cursor', 'pointer');

                // uncomment the following for interesting blurring effects, has some after effects 
                // $('h3, h1, img').wrap('<div class="blur-all">');
                // $('.itemsBox').wrap('<div class="blur-all">');
                // $(this).unwrap();
            });

            $(".imgAnim").mouseleave(function () {
                $(this).animate(
                    { width: "260", marginTop: "+=3.2em", left: "-=100" }, 500, "easeInExpo");

                $(this).animate(
                    { opacity: 1, left: "-=600" }, 500, "easeInExpo")
                    .animate(
                        { left: "+=600", opacity: 1 }, 1000, "easeOutExpo");

                $(".itemsBox").animate(
                    { opacity: .9, left: "+=300" }, 500, "easeInOutCubic")
                    .animate(
                        { left: "-=300", opacity: 1 }, 1000, "easeInOutCubic");
                $('html,body').css('cursor', 'default');

                // uncomment the following for interesting blurring effects, as some after effects 
                // $('h3, h1, img').unwrap();
                // $('.itemsBox').unwrap();
            });
        });
    }
})(jQuery);