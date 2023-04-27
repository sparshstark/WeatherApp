let weather = {
  apiKey: "f4b5127d4191f286ee20d51623151e6a",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Noida&units=metric&appid=f4b5127d4191f286ee20d51623151e6a"
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText =description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
};

let weather_again = {
  apiKey: "f4b5127d4191f286ee20d51623151e6a",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Allahabad&units=metric&appid=f4b5127d4191f286ee20d51623151e6a"
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city1").innerText = "Weather in " + name;
    document.querySelector(".icon1").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description1").innerText =description;
    document.querySelector(".temp1").innerText = temp + "°C";
    document.querySelector(".humidity1").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind1").innerText =
      "Wind speed: " + speed + " km/h";
    document.querySelector(".weather_again").classList.remove("loading");
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
};

function LoadFunction(){
  weather.fetchWeather();
  weather_again.fetchWeather();
}
window.onload = LoadFunction();


