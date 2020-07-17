(function () {

    /* Global vars */
    var locationMap;
    var mapElement = $('#google-map')[0];
    var mapLatLon;
    var visitorLat;
    var visitorLon;
    var visitorLatLon;
    var visitorPostcodeLatLon;
    var directionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer();
    var fromAddress = "";
    var toAddress = "";
    var startLocation = "";
    var travelTime = "";

    function initLocationMap() {
        var lat = $('#location__map').data('latitude');
        var lon = $('#location__map').data('longitude');
        mapLatLon = new google.maps.LatLng(lat, lon);

        var mapOptions = {
            center: mapLatLon,
            zoom: 15,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: false
        };

        locationMap = new google.maps.Map(mapElement, mapOptions);

        var locationMarker = new google.maps.Marker({
            map: locationMap,
            position: mapLatLon,
            customInfo: {
                heading: $('#location__map').data('location-name'),
                type: null,
                latitude: lat,
                longitude: lon,
                //imageUrl: $('div.hero').css('background-image').replace(/url\(|\)$/ig, ""),
                shortDesc: '<p>' + $('#location__map').data('location-description') + '</p>',
            },
            icon: "/images/map-markers/space-marker.png"
        });

        locationMarker.setVisible(true);

        google.maps.event.addListener(locationMarker, 'click', function () {
            displayInfoBox(locationMarker);
        });

        //show the directions. Just comment out this block below to turn off displaying directions
        if (navigator.geolocation) {
            var location_timeout = setTimeout(skipUserGeolocation, 5000);

            navigator.geolocation.getCurrentPosition(function (position) {
                clearTimeout(location_timeout);
                recordUserGeolocation(position);
            }, function (error) {
                clearTimeout(location_timeout);
                skipUserGeolocation();
            });
        } else {
            // Fallback for no geolocation
            skipUserGeolocation();
        }
    }

    function displayInfoBox(marker) {

        if (typeof (infoBox) != "undefined") {
            infoBox.close();
        }

        var infoBoxOpts = {
            disableAutoPan: false,
            alignBottom: true,
            maxWidth: 0,
            pixelOffset: new google.maps.Size(-94, -28),
            closeBoxURL: "/images/close-map-popup.png",
            closeBoxMargin: marker.customInfo.imageUrl !== "" ? "105px 5px 2px 2px" : "5px 5px 2px 2px",
            boxClass: "info__box",
            infoBoxClearance: new google.maps.Size(1, 1),
            pane: "floatPane",
            enableEventPropagation: false
        };

        infoBox = new InfoBox(infoBoxOpts);

        var infoBoxContent = "";
        //if (marker.customInfo.imageUrl !== "") {
        //    infoBoxContent += "<div class='box__image' style='background-color: url(" + marker.customInfo.imageUrl + ")'></div>";
        //}

        infoBoxContent += "<div class='box__content'>";
        infoBoxContent += "<h4>" + marker.customInfo.heading + "</h4>" + marker.customInfo.shortDesc;

        //if (typeof (marker.customInfo.starRating) !== "") {
        //    infoBoxContent += marker.customInfo.starRating;
        //}

        infoBoxContent += "</div>";

        infoBox.setContent(infoBoxContent);
        infoBox.open(locationMap, marker);
    }

    function recordUserGeolocation(position) {
        visitorLat = position.coords.latitude;
        visitorLon = position.coords.longitude;
        getStartEndInformation();
    }

    function skipUserGeolocation() {
        getStartEndInformation();
    }

    function getStartEndInformation() {
        var geocoder = new google.maps.Geocoder();
        var lat = $('#location__map').data('latitude');
        var lon = $('#location__map').data('longitude');
        var mapLatLon = new google.maps.LatLng(lat, lon);
        directionsService = new google.maps.DirectionsService();

        //Destination Location (Lat & Long)
        geocoder.geocode({ 'latLng': mapLatLon }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                toAddress = results[0].formatted_address;
            }
        });

        //If the Post Code appears in the text box, use it as location reference
        var visitorPostcode = document.getElementById('map-postcode').value;
        //console.info('visitorPostcode: ' + visitorPostcode);
        if (visitorPostcode != "") {
            //Get Formatted Address from Post Code value
            geocoder.geocode({ 'address': visitorPostcode }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    visitorPostcodeLatLon = new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng());
                    fromAddress = results[0].formatted_address;
                    startLocation = results[0].address_components[0].short_name;
                    displayDirections();
                }
            });
        }
        else if (visitorLatLon != "") { //Web Geolocation Allowed 
            document.getElementById('map-postcode').value =''; //remove any postcode that was entered
            visitorLatLon = new google.maps.LatLng(visitorLat, visitorLon);
            geocoder.geocode({ 'latLng': visitorLatLon }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    fromAddress = results[0].formatted_address;
                    startLocation = results[5].formatted_address;
                    displayDirections();
                }
                else {
                    //show fallback postcode
                    $('#travel-result, #change-location-form').show();
                    displayDirections();
                }
            });
        }   
    }


    function displayDirections() {
        directionsDisplay.setDirections({ routes: [] });
        directionsDisplay.setMap(locationMap);
        directionsDisplay.setPanel(document.getElementById('directions-panel'));

        if (visitorPostcodeLatLon != undefined && visitorPostcodeLatLon != "") {
            //console.info('Gelocation NOT allowed');
            updateRouteUI(visitorPostcodeLatLon, mapLatLon);
        }
        else if (visitorLatLon != undefined && visitorLatLon != "") {
            //console.info('Gelocation allowed');
            updateRouteUI(visitorLatLon, mapLatLon);
        }
    }

    function updateRouteUI(start, end) {
        //if (tabSelected_TO == false) {
        //    console.info('Switching origin & dest points');
        //    var aux = start;
        //    start = end;
        //    end = aux;
        //}

        var request = {
            origin: start,
            destination: end,
            travelMode: google.maps.DirectionsTravelMode.DRIVING,
            durationInTraffic: true
        };

        directionsService.route(request, function (response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                travelTime = response.routes[0].legs[0].duration.text;
                document.getElementById('travel-time').innerHTML = travelTime;
                directionsDisplay.setDirections(response);
            }
        });

        //DISTANCE
        //console.info('>>> calculateDistance()');
        //console.info('start: ' + start);
        //console.info('end: ' + end);
        var service = new google.maps.DistanceMatrixService();
        service.getDistanceMatrix(
            {
                origins: [start],
                destinations: [end],
                travelMode: google.maps.TravelMode.DRIVING,
                unitSystem: google.maps.UnitSystem.IMPERIAL, //distance metric: miles
                avoidHighways: false,
                avoidTolls: false
            }, distanceCallback);
    }

    function distanceCallback(response, status) {
        //console.info('>>> callback()');
        if (status != google.maps.DistanceMatrixStatus.OK) {
            alert('Error was: ' + status);
        } else {

            var results = response.rows[0].elements;

            //if (tabSelected_TO == true) {
            //console.info('Render results (To tab)');
            //console.log("start location:" + startLocation);
            //console.log("from address:" + fromAddress);
            //console.log("to address:" + toAddress);
            document.getElementById('start-location').innerHTML = startLocation;
            document.getElementById('directions-from').innerHTML = fromAddress;
            document.getElementById('directions-to').innerHTML = toAddress;
            //}
            //else {
            //    console.info('Render results (From tab)');
            //    document.getElementById('directions-from').innerHTML = fromAddress;
            //    document.getElementById('directions-to').innerHTML = toAddress;
            //}


            //Distance (miles)
            //document.getElementById('directions-distance').innerHTML = results[0].distance.text;
            document.getElementById('distance-mileage').innerHTML = results[0].distance.text;

            //Time (hours & mins)
            document.getElementById('travel-time').innerHTML = travelTime;
            $('#travel-result, #results').show();
            $('#change-location-form').hide();
        }
    }

    function setPostcode() {
        //console.info('>>> setPostcode()');
        directionsDisplay.setMap(locationMap);
        getStartEndInformation();
    }

    //Initialize the maps
    if (typeof (mapElement) !== "undefined") {
        google.maps.event.addDomListener(window, 'load', initLocationMap);
    }

    function printSelection(node) {
        var content = node.innerHTML
        var pwin = window.open('', 'print_content');

        pwin.document.open();
        pwin.document.write('<html><body onload="window.print()">' + content + '</body></html>');
        pwin.document.close();

        setTimeout(function () { pwin.close(); }, 1000);
    }

    $("#map-postcode").keyup(function (e) {
        var code = e.which;
        if (code == 13) {
            setPostcode();
            e.preventDefault();
        }
    });

    $('#change-location').click(function () {
        $('#change-location-form').show();
    });

    $('#search').click(function () {
        setPostcode();
    });

}());