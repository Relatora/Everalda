// Not included in the project ... this is used within the menu plugin which is also not included in the project
(function ($) {
    $.fn.highlightMenu = function (options) {
        var defaults = $.extend({
            'bgColor': '#333',               //Lime Green Background
            'color': '#ffffff',                 //Superman Red ;)
            'hoverBgColor': '#333',
            'hoverColor': '#ffffff',
            'linkWidth': '125px',
            'fontFamily': '"Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif',
            'fontSize': '1em',
        }, options);
        return this.each(function () {
            $('nav').css({
                "list-style": "none",
                "margin": "0",
                "padding": "0",
                "width": "100%",
                "display": "table",
                "table-layout": "fixed",
                "background-color": "#333",
                "overflow": "hidden",
                // "margin-bottom": "9em",
                // "overflow": "auto"
            });
            $("nav li").css({
                "display": "table-cell",
                "float": "left",
                "height": "3em",
                "text-align": "center",
                // "vertical-align": "middle",
                "padding-bottom": "20px",
                // "padding-right": "1px",
                "padding-left": "5px"
            });

            $("nav li:first-child").css({
                "padding-left": "0"
            });

            $("nav li a").css({
                "width": "100%",
                "display": "block",
                "height": "100%",
                "line-height": "3em",
                "text-decoration": "none",
                // "overflow":"auto",
                // "font-weight": "bold"
            });

            $("nav li a.active").css({
                "background-color": "#ff00aa",
                "color": "#ffffff"
            });

            $("nav li a:hover:not(.active)").css({
                "background-color": "#ff00aa",
                "color": "#ffffff"
            });

        })
            ;
    }
})(jQuery);