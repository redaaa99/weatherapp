
var x = document.getElementById("wahda");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
    

}
var iconCode; 
var city;
var iconUrl;
function showPosition(position) {
	var city;
	var dispp;
	$.get("http://ipinfo.io", function(response) {
		dispp =''+response.city+'&nbsp'+response.country+'';
		document.getElementById("ville").innerHTML =dispp ;
		city=  response.city;
	}, "jsonp");
    var url = 'http://api.openweathermap.org/data/2.5/weather?lat='+position.coords.latitude.toFixed(0)+'&lon='+position.coords.longitude.toFixed(0)+'&units=metric&appid=1f43976e6de5580771aaa4060e87581f';
    $.getJSON(url, function (response) {
    iconCode = response.weather[0].icon;
    iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
    $("img").attr("src",iconUrl);

    switch (response.weather[0].main) {
		  case "Thunderstorm":
		    	document.body.style.backgroundImage = "url('https://images.alphacoders.com/598/thumb-1920-598926.jpg')";
		    break;
		  case "Drizzle":
		    	document.body.style.backgroundImage = "url('http://wallpaperswide.com/download/drizzle_dark-wallpaper-1600x900.jpg')";
		    break;
		  case "Rain":
		    	document.body.style.backgroundImage = "url('https://images.alphacoders.com/544/thumb-1920-544201.jpg')";
		    break;
		  case "Snow":
		    	document.body.style.backgroundImage = "url('http://wallpaperswide.com/download/drizzle_dark-wallpaper-1600x900.jpg')";
		    break;
		  case "Clear":
		    	document.body.style.backgroundImage = "url('http://www.hdwallpapers.in/download/posbank_sunrise_4k-1920x1200.jpg')";
		    break;
		  case "Clouds":
		    	document.body.style.backgroundImage = "url('https://wallpaperscraft.com/image/clouds_sky_white_blue_light_7266_1366x768.jpg')";
		    break;
		  case "Extreme":
		    	document.body.style.backgroundImage = "url('http://photoshdwallpapers.com/wp-content/uploads/2016/02/Single-Tornado-Wallpaper.jpg')";
		    break;
		  default:
		    	document.body.style.backgroundImage = "url('https://wallpaperscraft.com/image/storm_tempest_lighthouse_sky_birds_waves_94913_1920x1080.jpg')";
		}

    document.getElementById("main").innerHTML =response.weather[0].main ;

    x.innerHTML = response.main.temp ;
	}); 
	
}
getLocation();

var dispC = true;
$("#CtoF").click(function() {
	if(dispC)
	{
		var res = Number(x.innerHTML);
		res = res * 1.8 + 32; 
		document.getElementById("wahda").innerHTML = res.toFixed(0);
		document.getElementById("CtoF").innerHTML = "°F";
		dispC = false;

	}
	else
	{
		var res = Number(x.innerHTML);
		res = (res-32)/1.8; 
		document.getElementById("wahda").innerHTML = res.toFixed(0);
		document.getElementById("CtoF").innerHTML = "°C";
		dispC = true;
		
	}
});


