
// 1 on click of inputBox
$(function () {
    $("#button1").on("click", button1_click);

});
//2 storage of zip info

function button1_click() {
    var zipcode1 = $("#inputbox").val();
    findAddress("", "", zipcode1);

}
//3 

function findAddress(city, state, address) {
    var addLocation = "";
    if (inputBox.length != 0) {
        addLocation = inputBox.trim();
 }
    else if (city.length != 0 && state != 0) {
        addLocation = city.trim() + ", " + state;
 }
    else {
        return;

 }

 //4
  var request = "https://maps.googleapis.com/maps/api/geocode/json?address=" + addLocation + "&key=AIzaSyBZfkXozgEve7U6AezGLYljEVMRR-EFUuo";

    var request = {
        url: googleRequest,
        success: google_Complete
};

    $.ajax(request);
}
//5
function darksky_complete(result) {
    console.log("It is currently " + result.timezone + ".");

    var data = {
        time: new Date(result.currently.time * 1000),
        lrgTemp: Math.round((result.currently.temperature)) + "&deg",
        crntCond: (result.currently.summary),
        tempMin: Math.round((result.daily.data[0].temperatureMin)) + "&deg",
        rainChance: (result.daily.data[0].precipProbability),
        maxTemp: Math.round ((result.daily.data[0].temperatureMax)) + "&deg",
        minText: ("Min"),
        rainChancetext: ("Rain Chance"),
        maxText: ("Max"),
        icon:(result.currently.icon)
};
        console.log("I finished darksky_complete")
//6


function google_Complete(result) {
    var lat = result.results[0].geometry.location.lat;
    var lng = result.results[0].geometry.location.lng;
        areaName = result.results[0].address_components[1].short_name + "," +
               result.results[0].address_components[3].short_name;
    getWeather(lat, long);
    console.log(lat);
    console.log(lng);

    var result = {
        url: "https://api.darksky.net/forecast/60dfe781e615860cf1939b773279e5a6/" + lat + ',' + lng,
        dataType: "jsonp ",
        success: darksky_complete
    };
    $.ajax(results);}
console.log ("I finished google_Complete")



function changeCards1(data){

var icon= (data.icon);
    switch(icon){
case "foggy": {$("#forcastCard").addClass("foggyDayPic");
                     break
}                                     
case "sunny": {$("#forcastCard").addClass("sunnyDayPic");
                     break
}                   
case "rain":  {$("#forcastCard").addClass("rainDayPic"); 
                     break
}                                
case "snow":  {$("#forcastCard").addClass("snowDayPic");
                     break
}                                 
case "partly cloudy": {$("#forcastCard").addClass("partlyCloudyPic");
                     break
}                                        
case "wind":  {$("#forcastCard").addClass("windyDay");
                     break
}
}
console.log("made it here too");
}

function cardChanges2(forcastInfo) {
    var html = generateCard(forcastInfo);
    $("#newCard2").append(html)
}
function cardChanges(data) {
    var forcastInfo = $("#newCard2").html();

    forcastInfo = forcastInfo.replace("&&City&&", areaName);
    forcastInfo = forcastInfo.replace("&&date/time&&", data.time);
    forcastInfo = forcastInfo.replace("&&LargeTemp&&", data.lrgTemp);
    forcastInfo = forcastInfo.replace("&&Condition&&", data.crntCond);
    forcastInfo = forcastInfo.replace("&&minTemp&&", data.tempMin);
    forcastInfo = forcastInfo.replace("&&rain%&&", data.rainChance + "%");
    forcastInfo = forcastInfo.replace("&&maxTemp&&", data.maxTemp);
    forcastInfo = forcastInfo.replace("&&Minimum&&", data.minText);
    forcastInfo = forcastInfo.replace("&&rainChances&&", data.rainChancetext);
    forcastInfo = forcastInfo.replace("&&Maximum&&", data.maxText);
    return forcastInfo;
};