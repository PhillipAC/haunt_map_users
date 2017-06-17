var googleMap = new GoogleMap();

function GoogleMap() {
    this.map;
    this.markers = [];
    this.userPosition;
};
GoogleMap.prototype.initMap = function(user_position){
    this.userPosition = user_position;
    this.map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: { lat: user_position.lat, lng: user_position.lng }
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
    this.setMarkers(haunts);
};
GoogleMap.prototype.setMarkers = function (haunts) {
    console.log(haunts);
    // Adds markers to the map.

    // Marker sizes are expressed as a Size of X,Y where the origin of the image
    // (0,0) is located in the top left of the image.

    // Origins, anchor positions and coordinates of the marker increase in the X
    // direction to the right and in the Y direction down.
    var image = {
        url: '/content/images/ghost_icon_small.png',
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(20, 32),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(0, 32)
    };
    // Shapes define the clickable region of the icon. The type defines an HTML
    // <area> element 'poly' which traces out a polygon as a series of X,Y points.
    // The final coordinate closes the poly by connecting to the first coordinate.
    var shape = {
        coords: [1, 1, 1, 20, 18, 20, 18, 1],
        type: 'poly'
    };

    var infowindow = new google.maps.InfoWindow();
    var marker, i, content;

    for (i = 0; i < haunts.length; i++) {
        

        var haunt = haunts[i];
        console.log(haunt);
        marker = new google.maps.Marker({
            position: {lat: haunt.latitude, lng: haunt.longitude},
            map: this.map,
            icon: image,
            shape: shape,
            title: haunt.title,
            zIndex: haunt.id
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                content = "<div class='mapcontent'>" +
                "<h4>" + haunts[i].title + "-" + haunts[i].author + "</h4>" + "<p>" + haunts[i].story + "</div>";
                infowindow.setContent(content);
                infowindow.open(map, marker);
            }
        })(marker, i));
        this.markers.push(marker);
    }
}