// Not included in the project - instead checkout the jsonToWeb plugin 
// This was a first attempt that is NOT integrated in the project
$(document).ready(function(){
    // $(".scroll-box").hover(function () {
    //     $(this).animate({width:'toggle'},350);
    //   });
    //$.getJSON("http://12.42.204.30:7251/team.json", function(data) {
        x = "QOH"
   $.getJSON("team.json", function(data) {
        $.each(data, function() {
            $.each(this, function(key, value) {
                var sn = value.stock_number;
                //alert("<img src='images/" + value.name + ".jpg'>");
                $("#team").append(
                    "<article id='A" + sn + "'>" +
                        "<h3>" + 
                        //font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                            "<a href='#A" + sn + "' style='font-size: 1.7em; font-weight:none'>" +
                                value.name +
                            "</a>" +
                        "</h3>" + 
                        "<div class='scroll-box' style='height:18em'>" +
                            "<div class='productBlue' style='width:25%; float:left; transform:translateY(50%); padding-top:2%; padding-bottom:2%'>" +
                                "<span class='blueberry'>Stock number:</span>" + sn  + "<br>" +
                                "<span class='blueberry'>Quantity on hand:</span>" + value[x] + "<br>" +
                                "<span class='blueberry'>size:</span>" + value.size + "<br>" +
                                "<span class='blueberry'>color:</span>" + value.color +
                            "</div>" + 
                            "<div>" + 
                                "<img src='images/strollers/" + value.name + ".jpg' style=' float:right; width:260px'>" +
                            "</div>" + "<br style='clear:both'" +
                        "</div>" +
                    "</article>"
                );
            });
        });
    });
});