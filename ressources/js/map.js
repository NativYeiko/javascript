// Map Base
var map, infoWindow;
     function initMap() {
       map = new google.maps.Map(document.getElementById('map'), {
         center: {lat: -34.397, lng: 150.644},
         zoom: 13
       });
       infoWindow = new google.maps.InfoWindow;


// Place Search
service = new google.maps.places.PlacesService(map);
service.nearbySearch(request, callback);
service.textSearch(request, callback);
var map;
var service;
var infowindow;

function initialize() {
  var pyrmont = new google.maps.LatLng(-33.8665433,151.1956316);

  map = new google.maps.Map(document.getElementById('map'), {
      center: pyrmont,
      zoom: 15
    });

  var request = {
    location: pyrmont,
    radius: '500',
    type: ['restaurant']
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }
}
// Type Terrain
function initialize() {
  var fenway = {lat: 42.345573, lng: -71.098326};
  var map = new google.maps.Map(document.getElementById('map'), {
    center: fenway,
    zoom: 14
  });
  var panorama = new google.maps.StreetViewPanorama(
      document.getElementById('pano'), {
        position: fenway,
        pov: {
          heading: 34,
          pitch: 10
        }
      });
  map.setStreetView(panorama);
}
var panorama = new google.maps.StreetViewPanorama(
    document.getElementById('pano'), {
      position: {lat: 37.869260, lng: -122.254811},
      pov: {heading: 165, pitch: 0},
      motionTracking: false
    });
    var panorama = new google.maps.StreetViewPanorama(
        document.getElementById('pano'), {
          position: {lat: 37.869260, lng: -122.254811},
          pov: {heading: 165, pitch: 0},
          motionTracking: false,
          motionTrackingControl: false
        });
        var panorama = new google.maps.StreetViewPanorama(
            document.getElementById('pano'), {
              position: {lat: 37.869260, lng: -122.254811},
              pov: {heading: 165, pitch: 0},
              motionTrackingControlOptions: {
                position: google.maps.ControlPosition.LEFT_BOTTOM
              }
            });
var myLatlng = new google.maps.LatLng(-34.397, 150.644);
var mapOptions = {
  zoom: 8,
  center: myLatlng,
  mapTypeId: 'satellite'
};
var map = new google.maps.Map(document.getElementById('map'),
    mapOptions);

map.setMapTypeId('terrain')

// Create a div to hold the control.
var controlDiv = document.createElement('div');

// Set CSS for the control border
var controlUI = document.createElement('div');
controlUI.style.backgroundColor = '#fff';
controlUI.style.border = '2px solid #fff';
controlUI.style.cursor = '';
controlUI.style.marginBottom = '22px';
controlUI.style.textAlign = 'center';
controlUI.title = 'Click to recenter the map';
controlDiv.appendChild(controlUI);

// Set CSS for the control interior
var controlText = document.createElement('div');
controlText.style.color = 'rgb(239, 23, 34)';
controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
controlText.style.fontSize = '16px';
controlText.style.lineHeight = '38px';
controlText.style.paddingLeft = '5px';
controlText.style.paddingRight = '5px';
controlText.innerHTML = 'Center Map';
controlUI.appendChild(controlText);


// Try HTML5 geolocation.
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

    infoWindow.setPosition(pos);
    infoWindow.setContent('Location found.');
    infoWindow.open(map);
    map.setCenter(pos);
  }, function() {
    handleLocationError(true, infoWindow, map.getCenter());
  });
} else {
  // Browser doesn't support Geolocation
  handleLocationError(false, infoWindow, map.getCenter());
}
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
infoWindow.setPosition(pos);
infoWindow.setContent(browserHasGeolocation ?
                      'Error: The Geolocation service failed.' :
                      'Error: Your browser doesn\'t support geolocation.');
infoWindow.open(map);
}

// trafic

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {lat: 34.04924594193164, lng: -118.24104309082031}
  });

  var trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);
}

// Box for Search Tow City

function initAutocomplete() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -33.8688, lng: 151.2195},
    zoom: 13,
    mapTypeId: 'roadmap'
});
// Create the search box and link it to the UI element.
var input = document.getElementById('pac-input');
var searchBox = new google.maps.places.SearchBox(input);
map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

// Bias the SearchBox results towards current map's viewport.
map.addListener('bounds_changed', function() {
  searchBox.setBounds(map.getBounds());
});

var markers = [];
// Listen for the event fired when the user selects a prediction and retrieve
// more details for that place.
searchBox.addListener('places_changed', function() {
  var places = searchBox.getPlaces();
if (places.length == 0) {return;}

// Clear out the old markers.
markers.forEach(function(marker) {
  marker.setMap(null);
});
markers = [];

// For each place, get the icon, name and location.
var bounds = new google.maps.LatLngBounds();
places.forEach(function(place) {
  if (!place.geometry) {
    console.log("Returned place contains no geometry");
    return;
  }
  var icon = {
    url: place.icon,
    size: new google.maps.Size(71, 71),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(17, 34),
    scaledSize: new google.maps.Size(25, 25)
  };

// Create a marker for each place.
  markers.push(new google.maps.Marker({
    map: map,
    icon: icon,
    title: place.name,
    position: place.geometry.location
  }));

  if (place.geometry.viewport) {
// Only geocodes have viewport.
    bounds.union(place.geometry.viewport);
  } else {
      bounds.extend(place.geometry.location);
    }
  });
  map.fitBounds(bounds);
  });
}
