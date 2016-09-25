on click of inputBox 
$(function () {
    $("#button1").on("click", findAddress)
})


//storage of zipcode
function findAddress() {
    var zipcode = $("#inputBox").val();
    google_Complete("", "", zipcode);
}

function google_Complete(city, state, address) {
    // Create the address.
    var addLocation = "";
    if (inputBox.length != 0) {
        addLocation = address.trim();
    }
    else if (city.length != 0 && state != 0) {
        addLocation = city.trim() + ", " + state;
    }
    else {
        return;
    }
};


var request = {
    url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + addLocation + " &key=AIzaSyAQsMF6GQMAD_JlBLibE1ZprVVwxK0kfac ",
    dataType: "json ",
    success: google_Complete
};

$.ajax(request);
}
function darksky_complete(infoCrap) {
    var weatherInfo = {
        time: new Date(infoCrap.currently.time * 1000),
        summary: (infoCrap.currently.summary),
        tempMidscreen: Math.round((infoCrap.currently.temperature)) +
        "&deg ",
        weatherCurrentSum: (infoCrap.currently.summary),
        tempMin: Math.round((infoCrap.daily.data[0].temperatureMin)) + "&deg ",
        rainChance: (infoCrap.daily.data.precipProbability),
        rainChancetext: ("Rain Chances "),
        maxText: ("Max "),
        minText: ("Min "),
        maxTemp: Math.round((infoCrap.daily.data[0].temperatureMax)) + "&deg ",
        incon: (infoCrap.currently.icon)
    };

    console.log("I am here ");
    console.log(weatherInfo);
}
//step 2
function google_Complete(result) {

    var lat = result.results[0].geometry.location.lat;
    var lng = result.results[0].geometry.location.lng;

    console.log(lat);
    console.log(lng);

    var infoCrap = {
        url: "https://api.darksky.net/forecast/60dfe781e615860cf1939b773279e5a6/ " + lat + ',' + lng,
        dataType: "jsonp ",
        success: darksky_complete
    };
    $.ajax(infoCrap);
}
//step3
function forcastInfo(darkSkyUrl) {
    var results = {
        url: darkSkyUrl,
        dataType: "jsonp ",
        success: darksky_complete
    };
    $.ajax(results);
}




