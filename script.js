function initMap() { }

const calculateAndDisplayRoute = function (directionsService, directionsRenderer) {
    const start = document.querySelector("input.content__start").value;
    const end = document.querySelector("input.content__end").value;
    directionsService.route(
        {
            origin: start,
            destination: end,
            travelMode: "WALKING"
        },
        function (response, status) {
            if (status === "OK") {
                directionsRenderer.setDirections(response);
            } else {
                window.alert("Directions request failed due to" + status);
            }
        }
    );
};

initMap = function () {
    var myDirection = { lat: 50.613201, lng: 26.256950 };
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: myDirection,
        disableDefaultUI: true,
        mapTypeControl: true,
    });


    directionsRenderer.setMap(map);

    const btn = document.querySelector("input.content__calc");

    const onClickHandler = function () {
        calculateAndDisplayRoute(directionsService, directionsRenderer);
    };
    btn.addEventListener("click", onClickHandler);
};

