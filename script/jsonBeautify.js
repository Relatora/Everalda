$(document).ready(function () {         // jQuery detects the state of readiness for code to execute safely
    $("#json_beautify").jsonToWeb({     // Plugin invocation inside a container having this class
        // Compulsory settings
        imagesPath: 'images/strollers/',  //Image path must be specified and image names correspond to product/employee/...
        jsonSource: 'http://12.42.204.30:7251/strollers.json',  // source can be a json array or a json address
        jsonParametersHTML: 'Stock number,Quantity on hand,Size,Color',   // No name included
        jsonParametersJSON: 'stock_number,QOH,size,color',  // length should be same as it's HTML counterpart for cohesion
        nameParameterJSON: 'name',       // will be the title of the box and image
        containerId: 'json_beautify',    // this is the class name of the div container in your html file

        // Optional - Box settings
        bgColor: '#dfe3e6',
        color: '#cc1c0d',
        boxBg: '#333',
        boxShadow: '3em 3em 3em #4C4F4D',
        boxBorderColor: '#ff69eb',
        boxBorderWidth: 'thick',
        textMarginLeft: '4.5em',
    });
});



