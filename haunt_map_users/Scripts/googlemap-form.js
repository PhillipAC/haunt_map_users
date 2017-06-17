// JavaScript source code
var googleMap = new GoogleMapForm();

function GoogleMapForm() {
    this.map;
    this.userPosition;
}
GoogleMapForm.prototype.initMap = function (user_position) {
    this.userPosition = user_position;
    var myLatlng = new google.maps.LatLng(user_position.lat, user_position.lng);
    var mapProp = {
        center: myLatlng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP

    };
    this.map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: this.map,
        title: 'Hello World!',
        draggable: true
    });

    var Styles = [{
        featureType: "poi",
        stylers: [
            { visibility: "off" }
        ]
    },
    { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
    { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
    { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
    {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }]
    },
    {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{ color: '#263c3f' }]
    },
    {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#6b9a76' }]
    },
    {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#38414e' }]
    },
    {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#212a37' }]
    },
    {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#9ca5b3' }]
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ color: '#746855' }]
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#1f2835' }]
    },
    {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#f3d19c' }]
    },
    {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{ color: '#2f3948' }]
    },
    {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }]
    },
    {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#17263c' }]
    },
    {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#515c6d' }]
    },
    {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#17263c' }]
    }
    ];

    this.map.setOptions({ styles: Styles });

    document.getElementById('lat').value = user_position.lat;
    document.getElementById('lng').value = user_position.lng;
    // marker drag event
    google.maps.event.addListener(marker, 'drag', function (event) {
        document.getElementById('lat').value = event.latLng.lat();
        document.getElementById('lng').value = event.latLng.lng();
    });

    // double click event
    google.maps.event.addListener(this.map, 'dblclick', function (e) {
        var positionDoubleclick = e.latLng;
        marker.setPosition(positionDoubleclick);

        document.getElementById('lat').value = e.latLng.lat();
        document.getElementById('lng').value = e.latLng.lng();
        // if you don't do this, the map will zoom in
        e.stopPropagation();
    });

    //marker drag event end
    google.maps.event.addListener(marker, 'dragend', function (event) {
        document.getElementById('lat').value = event.latLng.lat();
        document.getElementById('lng').value = event.latLng.lng();
    });
}

