document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("search-form");
    const input = document.getElementById("search-box");
    const weatherInfo = document.getElementById("weather-info");
    const settingsButton = document.querySelector(".settings-icon"); // Добавляем обработчик для кнопки настроек

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const query = input.value.trim();
        if (query !== "") {
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        }
    });

    // Обработчик клика по шестеренке
    settingsButton.addEventListener("click", () => {
        console.log("Открываю настройки...");
        window.location.href = "settings.html";
    });

    // Fetch Weather Data
    async function fetchWeather() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                const apiKey = 'cdde843f642f9019bb5d3fb524a173b2'; // API-ключ OpenWeatherMap
                const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

                try {
                    const response = await fetch(url);
                    const data = await response.json();

                    // Создаем красивый вывод погоды
                    const city = data.name;
                    const temp = Math.round(data.main.temp);
                    const description = data.weather[0].description;
                    const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

                    weatherInfo.innerHTML = `
                        <img src="${icon}" alt="Weather Icon" width="50">
                        <p><strong>${city}</strong>: ${temp}°C, ${description}</p>
                    `;
                } catch (error) {
                    weatherInfo.innerHTML = "Error loading weather";
                }
            });
        } else {
            weatherInfo.innerHTML = "Geolocation not supported";
        }
    }

    fetchWeather();
});
