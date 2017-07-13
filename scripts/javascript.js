


function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(41.878114, -87.629798),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}