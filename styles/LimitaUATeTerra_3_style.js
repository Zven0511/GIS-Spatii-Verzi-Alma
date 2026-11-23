var size = 0;
var placement = 'point';

var style_LimitaUATeTerra_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "14.3px \'Times New Roman\', sans-serif";
    var labelFill = "#ff0055";
    var bufferColor = "#000000";
    var bufferWidth = 3.0;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'point';
    if (feature.get("UAT") !== null && resolution > 0 && resolution < 28) {
        labelText = String(feature.get("UAT"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,0,75,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];

    return style;
};
