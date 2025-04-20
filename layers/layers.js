ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([-49341.240375, 8312904.118294, 1216033.178790, 8727026.655475]);
var wms_layers = [];


        var lyr_EsriTopographic_0 = new ol.layer.Tile({
            'title': 'Esri Topographic',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_AYACUCHO_1 = new ol.format.GeoJSON();
var features_AYACUCHO_1 = format_AYACUCHO_1.readFeatures(json_AYACUCHO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_AYACUCHO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AYACUCHO_1.addFeatures(features_AYACUCHO_1);
var lyr_AYACUCHO_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AYACUCHO_1, 
                style: style_AYACUCHO_1,
                popuplayertitle: 'AYACUCHO',
                interactive: true,
    title: 'AYACUCHO<br />\
    <img src="styles/legend/AYACUCHO_1_0.png" /> A-a<br />\
    <img src="styles/legend/AYACUCHO_1_1.png" /> Ad-c<br />\
    <img src="styles/legend/AYACUCHO_1_2.png" /> Ao-b<br />\
    <img src="styles/legend/AYACUCHO_1_3.png" /> C_poblados<br />\
    <img src="styles/legend/AYACUCHO_1_4.png" /> Fv3-a<br />\
    <img src="styles/legend/AYACUCHO_1_5.png" /> Fvs-a<br />\
    <img src="styles/legend/AYACUCHO_1_6.png" /> Lagunas<br />\
    <img src="styles/legend/AYACUCHO_1_7.png" /> Llo-b<br />\
    <img src="styles/legend/AYACUCHO_1_8.png" /> Nv<br />\
    <img src="styles/legend/AYACUCHO_1_9.png" /> Vc-d<br />\
    <img src="styles/legend/AYACUCHO_1_10.png" /> Vc-e<br />\
    <img src="styles/legend/AYACUCHO_1_11.png" /> Vg-a<br />\
    <img src="styles/legend/AYACUCHO_1_12.png" /> Vs1-d<br />\
    <img src="styles/legend/AYACUCHO_1_13.png" /> Vs1-e<br />\
    <img src="styles/legend/AYACUCHO_1_14.png" /> Vs2-d<br />\
    <img src="styles/legend/AYACUCHO_1_15.png" /> Vs2-e<br />\
    <img src="styles/legend/AYACUCHO_1_16.png" /> Vs2d-e<br />\
    <img src="styles/legend/AYACUCHO_1_17.png" /> Vs3-d<br />\
    <img src="styles/legend/AYACUCHO_1_18.png" /> Vs3-e<br />\
    <img src="styles/legend/AYACUCHO_1_19.png" /> Vsa-b<br />\
    <img src="styles/legend/AYACUCHO_1_20.png" /> VsA1-e<br />\
    <img src="styles/legend/AYACUCHO_1_21.png" /> VsA2-d<br />\
    <img src="styles/legend/AYACUCHO_1_22.png" /> VsA2-e<br />\
    <img src="styles/legend/AYACUCHO_1_23.png" /> Vso-c<br />' });

lyr_EsriTopographic_0.setVisible(true);lyr_AYACUCHO_1.setVisible(true);
var layersList = [lyr_EsriTopographic_0,lyr_AYACUCHO_1];
lyr_AYACUCHO_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SIMBOLO_': 'SIMBOLO_', 'REGION': 'REGION', 'FORMAS_DEL': 'FORMAS_DEL', 'Area': 'Area', 'Perimetro': 'Perimetro', });
lyr_AYACUCHO_1.set('fieldImages', {'OBJECTID': 'Hidden', 'SIMBOLO_': 'Hidden', 'REGION': 'TextEdit', 'FORMAS_DEL': 'TextEdit', 'Area': 'TextEdit', 'Perimetro': 'TextEdit', });
lyr_AYACUCHO_1.set('fieldLabels', {'REGION': 'inline label - visible with data', 'FORMAS_DEL': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perimetro': 'inline label - visible with data', });
lyr_AYACUCHO_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});