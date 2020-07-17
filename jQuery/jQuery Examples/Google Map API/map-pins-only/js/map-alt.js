/* Used this article as a base for this code - https://wrightshq.com/playground/placing-multiple-markers-on-a-google-map-using-api-3/ it uses latest API */

$(function() {
    // Asynchronously Load the map API 
    var script = document.createElement('script');
    script.src = "//maps.googleapis.com/maps/api/js?sensor=false&callback=initialise";
    document.body.appendChild(script);
});


function initialise() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap'
    };

    // Display a map on the page
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    // This is the angle of the map
    map.setTilt(0);


    /* Markers */
    // comment out below if js variable used in html
    var markers = $('.map-wrapper').data('markers');

    // Info Window Content
    // If these are needed more properties in the in json for corresponding data needed
     var infoWindowContent = [
         ['<div class="info_content">' +
             '<h3>London Eye</h3>' +
             '<p>The London Eye is a giant Ferris wheel situated on the banks of the River Thames. The entire structure is 135 metres (443 ft) tall and the wheel has a diameter of 120 metres (394 ft).</p>' + '</div>'
         ],
         ['<div class="info_content">' +
            '<h3>Palace of Westminster</h3>' +
             '<p>The Palace of Westminster is the meeting place of the House of Commons and the House of Lords, the two houses of the Parliament of the United Kingdom. Commonly known as the Houses of Parliament after its tenants.</p>' +
            '</div>'
         ]
    ];

    // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(),
        marker, i;

    // Loop through our array of markers & place each one on the map  
    for (i = 0; i < markers.length; i++) {
        console.log(markers[i].title)
        var position = new google.maps.LatLng(markers[i].lat, markers[i].long);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i].title
        });

        // Allow each marker to have an info window    
         google.maps.event.addListener(marker, 'click', (function(marker, i) {
             return function() {
                 infoWindow.setContent(infoWindowContent[i][0]);
                 infoWindow.open(map, marker);
             }
         })(marker, i));

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
    }

    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(14);
        google.maps.event.removeListener(boundsListener);
    });
}
