function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(41.878114, -87.629798),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

var divs = ["pizzas", "salads", "starter"];
var visibleDivId = null;
function menuChange(divId) {
    if (visibleDivId === divId) {

    } else {
        visibleDivId = divId;
    }
    hideNonVisibleDivs();
}
function hideNonVisibleDivs() {
    var i, divId, div;
    for (i = 0; i< divs.length; i++) {
        divId = divs[i];
        div = document.getElementById(divId);
        if (visibleDivId === divId) {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    }
}

