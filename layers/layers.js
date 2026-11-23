ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3844").setExtent([453259.601821, 521545.680369, 464972.228254, 529347.497469]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_2 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_LimitaUATeTerra_3 = new ol.format.GeoJSON();
var features_LimitaUATeTerra_3 = format_LimitaUATeTerra_3.readFeatures(json_LimitaUATeTerra_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_LimitaUATeTerra_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitaUATeTerra_3.addFeatures(features_LimitaUATeTerra_3);
var lyr_LimitaUATeTerra_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitaUATeTerra_3, 
                style: style_LimitaUATeTerra_3,
                popuplayertitle: 'Limita UAT eTerra',
                interactive: true,
                title: '<img src="styles/legend/LimitaUATeTerra_3.png" /> Limita UAT eTerra'
            });
var format_Limitaintravilan_4 = new ol.format.GeoJSON();
var features_Limitaintravilan_4 = format_Limitaintravilan_4.readFeatures(json_Limitaintravilan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_Limitaintravilan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitaintravilan_4.addFeatures(features_Limitaintravilan_4);
var lyr_Limitaintravilan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limitaintravilan_4, 
                style: style_Limitaintravilan_4,
                popuplayertitle: 'Limita intravilan',
                interactive: true,
                title: '<img src="styles/legend/Limitaintravilan_4.png" /> Limita intravilan'
            });
var format_SVZoneverzispecializate_5 = new ol.format.GeoJSON();
var features_SVZoneverzispecializate_5 = format_SVZoneverzispecializate_5.readFeatures(json_SVZoneverzispecializate_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_SVZoneverzispecializate_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SVZoneverzispecializate_5.addFeatures(features_SVZoneverzispecializate_5);
var lyr_SVZoneverzispecializate_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SVZoneverzispecializate_5, 
                style: style_SVZoneverzispecializate_5,
                popuplayertitle: 'SV-Zone verzi specializate',
                interactive: true,
                title: '<img src="styles/legend/SVZoneverzispecializate_5.png" /> SV-Zone verzi specializate'
            });
var format_SVParcurisigradini_6 = new ol.format.GeoJSON();
var features_SVParcurisigradini_6 = format_SVParcurisigradini_6.readFeatures(json_SVParcurisigradini_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_SVParcurisigradini_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SVParcurisigradini_6.addFeatures(features_SVParcurisigradini_6);
var lyr_SVParcurisigradini_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SVParcurisigradini_6, 
                style: style_SVParcurisigradini_6,
                popuplayertitle: 'SV-Parcuri si gradini',
                interactive: true,
                title: '<img src="styles/legend/SVParcurisigradini_6.png" /> SV-Parcuri si gradini'
            });
var format_SVAliniamenteinfrastructura_7 = new ol.format.GeoJSON();
var features_SVAliniamenteinfrastructura_7 = format_SVAliniamenteinfrastructura_7.readFeatures(json_SVAliniamenteinfrastructura_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_SVAliniamenteinfrastructura_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SVAliniamenteinfrastructura_7.addFeatures(features_SVAliniamenteinfrastructura_7);
var lyr_SVAliniamenteinfrastructura_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SVAliniamenteinfrastructura_7, 
                style: style_SVAliniamenteinfrastructura_7,
                popuplayertitle: 'SV-Aliniamente infrastructura',
                interactive: true,
                title: '<img src="styles/legend/SVAliniamenteinfrastructura_7.png" /> SV-Aliniamente infrastructura'
            });
var format_CopaciGiacas_8 = new ol.format.GeoJSON();
var features_CopaciGiacas_8 = format_CopaciGiacas_8.readFeatures(json_CopaciGiacas_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_CopaciGiacas_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CopaciGiacas_8.addFeatures(features_CopaciGiacas_8);
var lyr_CopaciGiacas_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CopaciGiacas_8, 
                style: style_CopaciGiacas_8,
                popuplayertitle: 'Copaci Giacas',
                interactive: true,
                title: '<img src="styles/legend/CopaciGiacas_8.png" /> Copaci Giacas'
            });
var format_CopaciSmig_9 = new ol.format.GeoJSON();
var features_CopaciSmig_9 = format_CopaciSmig_9.readFeatures(json_CopaciSmig_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_CopaciSmig_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CopaciSmig_9.addFeatures(features_CopaciSmig_9);
var lyr_CopaciSmig_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CopaciSmig_9, 
                style: style_CopaciSmig_9,
                popuplayertitle: 'Copaci Smig',
                interactive: true,
                title: '<img src="styles/legend/CopaciSmig_9.png" /> Copaci Smig'
            });
var format_CopaciAlma_10 = new ol.format.GeoJSON();
var features_CopaciAlma_10 = format_CopaciAlma_10.readFeatures(json_CopaciAlma_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_CopaciAlma_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CopaciAlma_10.addFeatures(features_CopaciAlma_10);
var lyr_CopaciAlma_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CopaciAlma_10, 
                style: style_CopaciAlma_10,
                popuplayertitle: 'Copaci Alma',
                interactive: true,
                title: '<img src="styles/legend/CopaciAlma_10.png" /> Copaci Alma'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_GoogleSatelliteHybrid_2.setVisible(true);lyr_LimitaUATeTerra_3.setVisible(true);lyr_Limitaintravilan_4.setVisible(true);lyr_SVZoneverzispecializate_5.setVisible(true);lyr_SVParcurisigradini_6.setVisible(true);lyr_SVAliniamenteinfrastructura_7.setVisible(true);lyr_CopaciGiacas_8.setVisible(true);lyr_CopaciSmig_9.setVisible(true);lyr_CopaciAlma_10.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleMaps_1,lyr_GoogleSatelliteHybrid_2,lyr_LimitaUATeTerra_3,lyr_Limitaintravilan_4,lyr_SVZoneverzispecializate_5,lyr_SVParcurisigradini_6,lyr_SVAliniamenteinfrastructura_7,lyr_CopaciGiacas_8,lyr_CopaciSmig_9,lyr_CopaciAlma_10];
lyr_LimitaUATeTerra_3.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'Supr.[ha]': 'Supr.[ha]', 'UAT': 'UAT', });
lyr_Limitaintravilan_4.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'Supr.[ha]': 'Supr.[ha]', 'Localitate': 'Localitate', });
lyr_SVZoneverzispecializate_5.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'Localitate': 'Localitate', 'Supr.[mp]': 'Supr.[mp]', });
lyr_SVParcurisigradini_6.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'Localitate': 'Localitate', 'Supr.[mp]': 'Supr.[mp]', });
lyr_SVAliniamenteinfrastructura_7.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'Localitate': 'Localitate', 'Supr.[mp]': 'Supr.[mp]', });
lyr_CopaciGiacas_8.set('fieldAliases', {'Nr. ID': 'Nr. ID', 'Specie': 'Specie', 'Diam. [cm]': 'Diam. [cm]', 'Inaltim[m]': 'Inaltim[m]', 'Stare': 'Stare', 'X [m]': 'X [m]', 'Y [m]': 'Y [m]', 'Z [m]': 'Z [m]', });
lyr_CopaciSmig_9.set('fieldAliases', {'Nr. ID': 'Nr. ID', 'Specie': 'Specie', 'Diam. [cm]': 'Diam. [cm]', 'Inaltim[m]': 'Inaltim[m]', 'Stare': 'Stare', 'X [m]': 'X [m]', 'Y [m]': 'Y [m]', 'Z [m]': 'Z [m]', });
lyr_CopaciAlma_10.set('fieldAliases', {'Nr. ID': 'Nr. ID', 'Specie': 'Specie', 'Diam. [cm]': 'Diam. [cm]', 'Inaltim[m]': 'Inaltim[m]', 'Stare': 'Stare', 'X [m]': 'X [m]', 'Y [m]': 'Y [m]', 'Z [m]': 'Z [m]', });
lyr_LimitaUATeTerra_3.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'Supr.[ha]': 'TextEdit', 'UAT': 'TextEdit', });
lyr_Limitaintravilan_4.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'Supr.[ha]': 'TextEdit', 'Localitate': 'TextEdit', });
lyr_SVZoneverzispecializate_5.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'Localitate': 'TextEdit', 'Supr.[mp]': 'TextEdit', });
lyr_SVParcurisigradini_6.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'Localitate': 'TextEdit', 'Supr.[mp]': 'TextEdit', });
lyr_SVAliniamenteinfrastructura_7.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'Localitate': 'TextEdit', 'Supr.[mp]': 'TextEdit', });
lyr_CopaciGiacas_8.set('fieldImages', {'Nr. ID': 'TextEdit', 'Specie': 'TextEdit', 'Diam. [cm]': 'TextEdit', 'Inaltim[m]': 'TextEdit', 'Stare': 'TextEdit', 'X [m]': 'TextEdit', 'Y [m]': 'TextEdit', 'Z [m]': 'TextEdit', });
lyr_CopaciSmig_9.set('fieldImages', {'Nr. ID': 'TextEdit', 'Specie': 'TextEdit', 'Diam. [cm]': 'TextEdit', 'Inaltim[m]': 'TextEdit', 'Stare': 'TextEdit', 'X [m]': 'TextEdit', 'Y [m]': 'TextEdit', 'Z [m]': 'TextEdit', });
lyr_CopaciAlma_10.set('fieldImages', {'Nr. ID': 'TextEdit', 'Specie': 'TextEdit', 'Diam. [cm]': 'TextEdit', 'Inaltim[m]': 'TextEdit', 'Stare': 'TextEdit', 'X [m]': 'TextEdit', 'Y [m]': 'TextEdit', 'Z [m]': 'TextEdit', });
lyr_LimitaUATeTerra_3.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'Supr.[ha]': 'inline label - visible with data', 'UAT': 'inline label - visible with data', });
lyr_Limitaintravilan_4.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'Supr.[ha]': 'inline label - visible with data', 'Localitate': 'inline label - visible with data', });
lyr_SVZoneverzispecializate_5.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'Localitate': 'inline label - visible with data', 'Supr.[mp]': 'inline label - visible with data', });
lyr_SVParcurisigradini_6.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'Localitate': 'inline label - visible with data', 'Supr.[mp]': 'inline label - visible with data', });
lyr_SVAliniamenteinfrastructura_7.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'Localitate': 'inline label - visible with data', 'Supr.[mp]': 'inline label - visible with data', });
lyr_CopaciGiacas_8.set('fieldLabels', {'Nr. ID': 'inline label - visible with data', 'Specie': 'inline label - visible with data', 'Diam. [cm]': 'inline label - visible with data', 'Inaltim[m]': 'inline label - visible with data', 'Stare': 'inline label - visible with data', 'X [m]': 'inline label - visible with data', 'Y [m]': 'inline label - visible with data', 'Z [m]': 'inline label - visible with data', });
lyr_CopaciSmig_9.set('fieldLabels', {'Nr. ID': 'inline label - visible with data', 'Specie': 'inline label - visible with data', 'Diam. [cm]': 'inline label - visible with data', 'Inaltim[m]': 'inline label - visible with data', 'Stare': 'inline label - visible with data', 'X [m]': 'inline label - visible with data', 'Y [m]': 'inline label - visible with data', 'Z [m]': 'inline label - visible with data', });
lyr_CopaciAlma_10.set('fieldLabels', {'Nr. ID': 'inline label - visible with data', 'Specie': 'inline label - visible with data', 'Diam. [cm]': 'inline label - visible with data', 'Inaltim[m]': 'inline label - visible with data', 'Stare': 'inline label - visible with data', 'X [m]': 'inline label - visible with data', 'Y [m]': 'inline label - visible with data', 'Z [m]': 'inline label - visible with data', });
lyr_CopaciAlma_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});