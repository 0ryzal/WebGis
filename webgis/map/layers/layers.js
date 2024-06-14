var wms_layers = [];


        var lyr_Basemap_0 = new ol.layer.Tile({
            'title': 'Basemap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BatasKelurahan_1 = new ol.format.GeoJSON();
var features_BatasKelurahan_1 = format_BatasKelurahan_1.readFeatures(json_BatasKelurahan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKelurahan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKelurahan_1.addFeatures(features_BatasKelurahan_1);
var lyr_BatasKelurahan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKelurahan_1, 
                style: style_BatasKelurahan_1,
                popuplayertitle: "Batas Kelurahan",
                interactive: false,
                title: '<img src="styles/legend/BatasKelurahan_1.png" /> Batas Kelurahan'
            });
var format_Pengepul_2 = new ol.format.GeoJSON();
var features_Pengepul_2 = format_Pengepul_2.readFeatures(json_Pengepul_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pengepul_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pengepul_2.addFeatures(features_Pengepul_2);
var lyr_Pengepul_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pengepul_2, 
                style: style_Pengepul_2,
                popuplayertitle: "Pengepul",
                interactive: true,
                title: '<img src="styles/legend/Pengepul_2.png" /> Pengepul'
            });
var format_TambakKeputih_3 = new ol.format.GeoJSON();
var features_TambakKeputih_3 = format_TambakKeputih_3.readFeatures(json_TambakKeputih_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TambakKeputih_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TambakKeputih_3.addFeatures(features_TambakKeputih_3);
var lyr_TambakKeputih_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TambakKeputih_3, 
                style: style_TambakKeputih_3,
                popuplayertitle: "Tambak Keputih",
                interactive: true,
                title: '<img src="styles/legend/TambakKeputih_3.png" /> Tambak Keputih'
            });

lyr_Basemap_0.setVisible(true);lyr_BatasKelurahan_1.setVisible(true);lyr_Pengepul_2.setVisible(true);lyr_TambakKeputih_3.setVisible(true);
var layersList = [lyr_Basemap_0,lyr_BatasKelurahan_1,lyr_Pengepul_2,lyr_TambakKeputih_3];
lyr_BatasKelurahan_1.set('fieldAliases', {'GID_4': 'GID_4', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', });
lyr_Pengepul_2.set('fieldAliases', {'Name': 'Name', 'Harga_Udan': 'Harga_Udan', 'Harga_Band': 'Harga_Band', 'Pembayaran': 'Pembayaran', 'No__Whatsa': 'No__Whatsa', });
lyr_TambakKeputih_3.set('fieldAliases', {'ID': 'ID', 'Status Hak': 'Status Hak', 'Pengelolaa': 'Pengelolaa', 'Jenis Budi': 'Jenis Budi', 'Luas (m2)': 'Luas (m2)', 'Luas (Ha)': 'Luas (Ha)', 'Intensif B': 'Intensif B', 'Tradisiona': 'Tradisiona', 'Max Banden': 'Max Banden', 'Min Banden': 'Min Banden', 'Intensif U': 'Intensif U', 'Tradisiona_1': 'Tradisiona_1', 'Min Udang ': 'Min Udang ', 'Max Udang ': 'Max Udang ', });
lyr_BatasKelurahan_1.set('fieldImages', {'GID_4': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'GID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'NAME_4': 'TextEdit', 'VARNAME_4': 'TextEdit', 'TYPE_4': 'TextEdit', 'ENGTYPE_4': 'TextEdit', 'CC_4': 'TextEdit', });
lyr_Pengepul_2.set('fieldImages', {'Name': 'TextEdit', 'Harga_Udan': 'TextEdit', 'Harga_Band': 'TextEdit', 'Pembayaran': 'TextEdit', 'No__Whatsa': 'TextEdit', });
lyr_TambakKeputih_3.set('fieldImages', {'ID': 'TextEdit', 'Status Hak': 'TextEdit', 'Pengelolaa': 'TextEdit', 'Jenis Budi': 'TextEdit', 'Luas (m2)': 'TextEdit', 'Luas (Ha)': 'TextEdit', 'Intensif B': 'TextEdit', 'Tradisiona': 'TextEdit', 'Max Banden': 'TextEdit', 'Min Banden': 'TextEdit', 'Intensif U': 'TextEdit', 'Tradisiona_1': 'TextEdit', 'Min Udang ': 'TextEdit', 'Max Udang ': 'TextEdit', });
lyr_BatasKelurahan_1.set('fieldLabels', {'GID_4': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'NAME_4': 'no label', 'VARNAME_4': 'no label', 'TYPE_4': 'no label', 'ENGTYPE_4': 'no label', 'CC_4': 'no label', });
lyr_Pengepul_2.set('fieldLabels', {'Name': 'inline label - visible with data', 'Harga_Udan': 'inline label - visible with data', 'Harga_Band': 'inline label - visible with data', 'Pembayaran': 'inline label - visible with data', 'No__Whatsa': 'inline label - visible with data', });
lyr_TambakKeputih_3.set('fieldLabels', {'ID': 'inline label - visible with data', 'Status Hak': 'inline label - visible with data', 'Pengelolaa': 'inline label - visible with data', 'Jenis Budi': 'inline label - visible with data', 'Luas (m2)': 'inline label - visible with data', 'Luas (Ha)': 'inline label - visible with data', 'Intensif B': 'inline label - visible with data', 'Tradisiona': 'inline label - visible with data', 'Max Banden': 'inline label - visible with data', 'Min Banden': 'inline label - visible with data', 'Intensif U': 'inline label - visible with data', 'Tradisiona_1': 'inline label - visible with data', 'Min Udang ': 'inline label - visible with data', 'Max Udang ': 'inline label - visible with data', });
lyr_TambakKeputih_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});