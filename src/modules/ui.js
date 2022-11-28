import Weather from './weather';

export default class UI {
    static activateSearchButton() {
        const submitButton = document.getElementById('submit-button');
        const input = document.getElementById('request-input');
        submitButton.addEventListener('click', async (e) => {
            e.preventDefault();
            const city = input.value;
            if (city !== '') {
                const data = await Weather.getData(city);
                UI.appendData(data);
            }
        });
    }

    static appendData(data) {
        const weatherCard = document.getElementById('weather-card');
        const feelsLike = document.getElementById('feels-like');
        const humidity = document.getElementById('humidity');
        const wind = document.getElementById('wind');
        const temperature = document.getElementById('temperature');
        const city = document.getElementById('city');

        city.textContent = data.city;
        feelsLike.textContent = data.feelsLike;
        humidity.textContent = data.humidity;
        temperature.textContent = data.temperature;
        wind.textContent = data.windSpeed;

        weatherCard.removeAttribute('hidden');
    }
}
