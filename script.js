let weather = {
	apiKey: "36f84c437eec32fc021e5cf7f7e5c7cd",
	fetchWeather: function (city) {
		fetch(
			"https://api.openweathermap.org/data/2.5/weather?q=" 
			+ city 
			+ "&units=metric&appid=" 
			+ this.apiKey
		)
			.then((response) => response.json())
			.then((data) => this.displayWeather(data)) 
			.catch((error) => console.log("Error:", error)); 
	},
	displayWeather: function (data) {
		const { name } = data;
		const { icon, description } = data.weather[0];
		const { temp, humidity } = data.main;
		const { speed } = data.wind;
		console.log(name, icon, description, temp, humidity, speed); 
		document.querySelector(".city").innerText = "Weather in " + name; 
		document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png"; 
		document.querySelector(".description").innerText = description;
		document.querySelector(".temp").innerText = temp + "°C";
		document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
		document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
		document.querySelector(".weather").classList.remove("loading");
		document.body.style.backgroundImage = "url('http://source.unsplash.com/1600x900/?" + name + "')"
	},
	search: function(){ 
	this.fetchWeather(document.querySelector(".search-bar").value);
	}
};

document.querySelector(".search button").addEventListener("click",function(){
	weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
	if (event.key == "Enter"){
		weather.search();
	}
});

weather.fetchWeather("New York");


// OpenWeather 
// https://api.openweathermap.org/data/2.5/weather?q=New%20York&units=metric&appid=36f84c437eec32fc021e5cf7f7e5c7cd
// 36f84c437eec32fc021e5cf7f7e5c7cd
