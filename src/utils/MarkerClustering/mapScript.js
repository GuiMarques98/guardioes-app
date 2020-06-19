export default 

/* SEE MORE AT: https://developers.google.com/maps/documentation/javascript/marker-clustering */
/*              https://googlemaps.github.io/v3-utility-library/modules/_google_markerclustererplus.html */

/* COMMENT THIS TO EDIT FILE AND UNCOMMENT TO RUN APP ======> */ `

function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: $ZOOM,
    center: $INIT_COORD,
    streetViewControl: false,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap']
    },
  });

  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  var goodMarkers = locations
    .filter(el => el.good)
    .map(location => {
    return new google.maps.Marker({
      position: location,
      label: ['G'],
      icon: {
        url: "$API_URL/markerclusterimg/green-marker.png"
      }
    });
  });

  var badMarkers = locations
    .filter(el => !el.good)
    .map(location => {
    return new google.maps.Marker({
      position: location,
      label: ['B'],
      icon: {
        url: "$API_URL/markerclusterimg/red-marker.png"
      }
    });
  });

  // Add a marker clusterer to manage the markers.
  var goodMarkerCluster = new MarkerClusterer(map, goodMarkers,
    { imagePath: '$API_URL/markerclusterimg/good/', imageSizes: [53, 53, 53, 53, 53] });

  // Add a marker clusterer to manage the markers.
  var badMarkerCluster = new MarkerClusterer(map, badMarkers,
    { imagePath: '$API_URL/markerclusterimg/bad/', imageSizes: [66, 66, 66, 66, 66] });
}

var locations = $COORDINATES

` /* <====== COMMENT THIS TO EDIT FILE AND UNCOMMENT TO RUN APP */
