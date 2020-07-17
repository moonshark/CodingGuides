(function () {

    /* Global vars */
    var locationMap;
    var mapElement = $('#google-filter-map')[0];
    var mapLatLon;
    var infoBox;
    var thisCruise;
    var cruises = [];
    var parkingMarkers = [];

    function initLocationMap() {
        var lat = $('#location-filter-map').data('latitude');
        var lon = $('#location-filter-map').data('longitude');
        mapLatLon = new google.maps.LatLng(lat, lon);

        var mapOptions = {
            center: mapLatLon,
            zoom: 15,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: false
        };
        locationMap = new google.maps.Map(mapElement, mapOptions);

        var terminalStartIcon = "images/map-markers/space-marker.png"; 
        var terminalEndIcon = "images/map-markers/space-marker.png"; 
        var terminalBothIcon = "images/map-markers/space-marker.png";

        if ($('#location-filter-map').data('location-type') === "Both")
        {
            showTerminalMarker(lat,
                               lon,
                               $('#location-filter-map').data('location-name'),
                               $('#location-filter-map').data('location-description'),
                               terminalBothIcon);
        }
        else
        {
            showTerminalMarker(lat,
                               lon,
                               $('#location-filter-map').data('location-name'),
                               $('#location-filter-map').data('location-description'),
                               terminalStartIcon);
            //find the end terminal and display it also
            for (var i = 0; i < thisCruise.Terminals.length; i++) {
                if (thisCruise.Terminals[i].Type === "End") {
                    showTerminalMarker(thisCruise.Terminals[i].Latitude,
                                        thisCruise.Terminals[i].Longitude,
                                        thisCruise.Terminals[i].Name,
                                        thisCruise.Terminals[i].Description,
                                        terminalEndIcon);
                }
            }   
        }

        //uncomment to not show parking markers
        createParkingMarkers();
    }

    function showTerminalMarker(termLat, termLon, name, description, markerIcon)
    {
        var terminalMarker = new google.maps.Marker({
            map: locationMap,
            position: new google.maps.LatLng(termLat, termLon),
            customInfo: {
                heading: name,
                type: null,
                latitude: termLat,
                longitude: termLon,
                //imageUrl: $('div.hero').css('background-image').replace(/url\(|\)$/ig, ""),
                shortDesc: '<p>' + description + '</p>',
            },
            icon: markerIcon
        });

        terminalMarker.setVisible(true);

        google.maps.event.addListener(terminalMarker, 'click', function () {
            displayInfoBox(terminalMarker);
        });
    }

    function setMapLocationData(terminal) {
        $('#location-filter-map').data('longitude', terminal.Longitude);
        $('#location-filter-map').data('latitude', terminal.Latitude);
        $('#location-filter-map').data('location-name', terminal.Name);
        $('#location-filter-map').data('location-description', terminal.Description);
        $('#location-filter-map').data('location-type', terminal.Type);
    }
    
    function parseCruiseData(data) {
        for (var i = 0; i < data.length; i++) {
            var obj = data[i];
            cruises.push(data[i]);
        }
    }

    function createParkingMarkers() {
        for (var i = 0; i < thisCruise.CarParks.length; i++) {
            var carPark = thisCruise.CarParks[i];
            createMarker(carPark.Latitude, carPark.Longitude, carPark.Type, carPark);
        }
    }

    function createMarker(lat, lon, type, carPark) {
        // Calculates distance betwen the marker and the Space (in miles)
        var cpLatLon = new google.maps.LatLng(lat, lon);
        var distance = (google.maps.geometry.spherical.computeDistanceBetween(mapLatLon, cpLatLon) * 0.621371 / 1000).toFixed(2);

        var marker = new google.maps.Marker({
            map: locationMap,
            position: cpLatLon,
            //category: types,
            customInfo: {
                heading: carPark.Name,
                type: type,
                latitude: lat,
                longitude: lon,
                distance: parseFloat(distance),
                shortDesc: '<p>' + distance + ' mi</p>'
            },
            icon: "images/map-markers/" + type + ".png"
        });

        marker.setVisible(false);
        parkingMarkers.push(marker);

        google.maps.event.addListener(marker, 'click', function () {
            displayInfoBox(marker);
        });
    }

    function resetAllFilters() {
        $('a[data-role="map-marker-filter"]').each(function (i, item) {
            if ($(this).hasClass('active')) {
                filterByType($(this).attr('data-marker-type'), false);
            }
        });
    }

    function filterByType(type, show) {
            var noMatchNumber = 0;
            var filteredMarkers = [];

            $.each(parkingMarkers, function (index, markerTarget) {

                if (show && type === markerTarget.customInfo.type) {
                    // Enable the filter for this type
                    markerTarget.setVisible(true);
                    filteredMarkers.push(markerTarget);
                } else if (!show && type === markerTarget.customInfo.type) {
                    // Disable the filter for this type
                    markerTarget.setVisible(false);
                    noMatchNumber++;
                }

            });


            noMatchNumber = 0;

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
            closeBoxURL: "images/close-map-popup.png",
            closeBoxMargin: marker.customInfo.imageUrl !== "" ? "15px 5px 2px 2px" : "5px 5px 2px 2px",
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
    
    //page init functions 
    if (cruiseData !== undefined) {
        parseCruiseData(cruiseData);
        thisCruise = cruises[1]; //This needs to be set to the result of the global search filter. We are just picking the first cruise to display

        //Set the map location to the start terminial or both
        for (var i = 0; i < thisCruise.Terminals.length; i++) {
            if (thisCruise.Terminals[i].Type !== "End") {
                setMapLocationData(thisCruise.Terminals[i]);
            }
        }
        //Initialize the map
        if (typeof (mapElement) !== "undefined") {
            google.maps.event.addDomListener(window, 'load', initLocationMap);
        }

        //bind the filter buttons
        $('a[data-role="map-marker-filter"]').click(function () {
            resetAllFilters();
            if ($(this).hasClass('active')) {
                //remove filter and all others at same time
                $(this).removeClass('active');
            }
            else {
                //make sure this is the only filter that is active
                $(this).siblings().removeClass('active');
                $(this).addClass('active');
                filterByType($(this).attr('data-marker-type'), true);
            }

        });
    }
}());