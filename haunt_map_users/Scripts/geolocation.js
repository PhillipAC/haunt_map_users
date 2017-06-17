var geoLocation = new GeoPosition();
var user_locaiton = { lat: 0, lng: 0 }


function GeoPosition(map) {
    this.map = map
}
GeoPosition.prototype.request_distance = function () {
    if (navigator.geolocation) {
        var timeoutVal = 10 * 1000 * 1000;
        navigator.geolocation.getCurrentPosition(
          this.set_position,
          this.error,
          { enableHighAccuracy: true, timeout: timeoutVal, maximumAge: 0 }
        );
    }
}
GeoPosition.prototype.set_position = function (position) {
    user_position = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    };
    googleMap.initMap(user_position);
}
GeoPosition.prototype.error = function (error) {
    var error = {
        1: 'Permission denied',
        2: 'Position unavailable',
        3: 'Request timeout'
    };
    googleMap.initMap(user_position);
    googleMap.setMarkers(haunts);
}