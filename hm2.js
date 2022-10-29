/*fetch("https://api.github.com/users/NataliBrz")
    .then(response => response.json())
    .then(user => console.log(user))
    .catch(error => console.log(error));*/



fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(response => response.json())
    .then(user => {
        document.getElementById("avatar").src = user.url
    })
    .catch(error => console.log(error));

/*document.addEventListener("DOMContentLoaded",

    function (event) {
        getWeather('Moscow');
    });

function getWeather(city) {
    fetch('https://api.openweathermap.prg/data/2.5/weather?q=' + city + '& appid=d6e481919bcce169184f16536bb64bd8&units=metric')
        .then(response => response.json())
        .then(weather => {
            console.log(weather);
            document.querySelector('.city').innerText = weather.name;
            document.querySelector('.tempValue').innerText = Math.round(weather.main.temp);
            document.querySelector('.hi-low').innerText = Math.round(weather.main.temp_max) + " / " + Math.round(weather.main.temp_min);
            document.querySelector('.weather').innerText = weather.weather[0].description;
        })
        .catch(err => console.log(err));
}*/