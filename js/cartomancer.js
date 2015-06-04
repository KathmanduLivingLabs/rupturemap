var dhadingdata = {
"type": "FeatureCollection",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
                                                                                
"features": [
{ "type": "Feature", "properties": { "ele": 1407.336968, "time": "2015\/05\/29 23:53:17", "magvar": null, "geoidheight": null, "name": "Photo", "cmt": null, "desc": null, "src": null, "link1_href": "2015-05-30_05-38-17.jpg", "link1_text": "2015-05-30_05-38-17.jpg", "link1_type": null, "link2_href": null, "link2_text": null, "link2_type": null, "sym": null, "type": null, "fix": null, "sat": 0, "hdop": null, "vdop": null, "pdop": null, "ageofdgpsdata": null, "dgpsid": null }, "geometry": { "type": "Point", "coordinates": [ 84.906811966131471, 28.069658706675639 ] } },
{ "type": "Feature", "properties": { "ele": 1419.609373, "time": "2015\/05\/29 23:56:31", "magvar": null, "geoidheight": null, "name": "Photo", "cmt": null, "desc": null, "src": null, "link1_href": "2015-05-30_05-41-31.jpg", "link1_text": "2015-05-30_05-41-31.jpg", "link1_type": null, "link2_href": null, "link2_text": null, "link2_type": null, "sym": null, "type": null, "fix": null, "sat": 0, "hdop": null, "vdop": null, "pdop": null, "ageofdgpsdata": null, "dgpsid": null }, "geometry": { "type": "Point", "coordinates": [ 84.906910904064162, 28.070023254658057 ] } },
{ "type": "Feature", "properties": { "ele": 1423.960129, "time": "2015\/05\/30 01:54:30", "magvar": null, "geoidheight": null, "name": "Photo", "cmt": null, "desc": null, "src": null, "link1_href": "2015-05-30_07-39-30.jpg", "link1_text": "2015-05-30_07-39-30.jpg", "link1_type": null, "link2_href": null, "link2_text": null, "link2_type": null, "sym": null, "type": null, "fix": null, "sat": 0, "hdop": null, "vdop": null, "pdop": null, "ageofdgpsdata": null, "dgpsid": null }, "geometry": { "type": "Point", "coordinates": [ 84.906077468376139, 28.074162141937819 ] } },
{ "type": "Feature", "properties": { "ele": 1558.779715, "time": "2015\/05\/30 02:54:54", "magvar": null, "geoidheight": null, "name": "Photo", "cmt": null, "desc": null, "src": null, "link1_href": "2015-05-30_08-39-54.jpg", "link1_text": "2015-05-30_08-39-54.jpg", "link1_type": null, "link2_href": null, "link2_text": null, "link2_type": null, "sym": null, "type": null, "fix": null, "sat": 0, "hdop": null, "vdop": null, "pdop": null, "ageofdgpsdata": null, "dgpsid": null }, "geometry": { "type": "Point", "coordinates": [ 84.91138422832158, 28.077729840179401 ] } },
{ "type": "Feature", "properties": { "ele": 1558.871415, "time": "2015\/05\/30 02:55:06", "magvar": null, "geoidheight": null, "name": "Photo", "cmt": null, "desc": null, "src": null, "link1_href": "2015-05-30_08-40-06.jpg", "link1_text": "2015-05-30_08-40-06.jpg", "link1_type": null, "link2_href": null, "link2_text": null, "link2_type": null, "sym": null, "type": null, "fix": null, "sat": 0, "hdop": null, "vdop": null, "pdop": null, "ageofdgpsdata": null, "dgpsid": null }, "geometry": { "type": "Point", "coordinates": [ 84.911383978151761, 28.077730505748598 ] } },
{ "type": "Feature", "properties": { "ele": 1560.283636, "time": "2015\/05\/30 02:56:11", "magvar": null, "geoidheight": null, "name": "Photo", "cmt": null, "desc": null, "src": null, "link1_href": "2015-05-30_08-41-11.jpg", "link1_text": "2015-05-30_08-41-11.jpg", "link1_type": null, "link2_href": null, "link2_text": null, "link2_type": null, "sym": null, "type": null, "fix": null, "sat": 0, "hdop": null, "vdop": null, "pdop": null, "ageofdgpsdata": null, "dgpsid": null }, "geometry": { "type": "Point", "coordinates": [ 84.911440043073313, 28.077841869712728 ] } },
{ "type": "Feature", "properties": { "ele": 1561.125857, "time": "2015\/05\/30 02:56:25", "magvar": null, "geoidheight": null, "name": "Photo", "cmt": null, "desc": null, "src": null, "link1_href": "2015-05-30_08-41-25.jpg", "link1_text": "2015-05-30_08-41-25.jpg", "link1_type": null, "link2_href": null, "link2_text": null, "link2_type": null, "sym": null, "type": null, "fix": null, "sat": 0, "hdop": null, "vdop": null, "pdop": null, "ageofdgpsdata": null, "dgpsid": null }, "geometry": { "type": "Point", "coordinates": [ 84.911389408099154, 28.077843657189479 ] } }
]
};




$(document).ready(function() {
    $(".numberCircle").hide();

    var nepalBorderLatLngArray = [];

    

    var cartograph = new Map({
        "basemaps": {
            "OpenStreetMap": {
                "tileLayer": L.TileLayer.boundaryCanvas("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                    boundary: nepalBorderLatLngArray,
                    doubleClickZoom: false
                })
            },
            "Satellite Imagery": {
                "tileLayer": new L.Google()
            }
        }
    });
    $("#map").find("a.leaflet-control-zoom-out").text("–");
    var map = cartograph.getMap();

$(map._container).find(".leaflet-map-pane").dblclick(function(){
map.setZoom(map.getZoom()+1);
});

var geojson = L.geoJson(dhadingdata, {
    onEachFeature: function(feature, layer){
        console.log(feature);
        var marker = L.marker(feature.geometry.coordinates.reverse(),{
            icon: L.icon({
                iconUrl: "img/markers/survey-approved/medium.svg"
            })
        })
        marker.on("click", function(e){
            new SplashScreen(MediaDocument("pictures/"+feature.properties["link1_href"])).appendTo("body");
        });
        marker.addTo(map);
    }
});

var districtsBasemap = L.tileLayer("http://raw.githubusercontent.com/jedi-Knight/Maps-of-Nepal/v2/nepal-districts-vdcs/{z}/{x}/{y}.png", {});
map.addLayer(districtsBasemap);
$(districtsBasemap._container).addClass("overlay-tiles districts").css("z-index", 2);

var osmBasemap = L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {});
//map.addLayer(osmBasemap);
//$(osmBasemap._container).addClass("overlay-tiles districts").css("z-index", 1);

var basemaps = {
"OpenStreetMap": osmBasemap,
"Satellite Imagery": new L.Google()
};


L.control.layers(basemaps,{},{
    position: "bottomleft",
    collapsed: false
}).addTo(map);

osmBasemap.addTo(map);

L.control.scale().addTo(map);






   

    /*$("#slider").on("mouseleave", function(){
        if(!mouseoverTriggered) return;
        intervalID = setInterval(function(){
            if(sliderfocusout){
            $("#slider").addClass("inactive");
            mouseoverTriggered = 0;
            }
            clearInterval(intervalID);
        }, 10000);
    });*/


});

$.fn.attrByFunction = function(fn) {
    return $(this).each(function() {
        $(this).attr(fn.call(this));
    });
};
