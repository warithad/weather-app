import { API_KEY as key } from './apikey';

export default class Weather {
    static async getData(city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;
        try {
            const response = await fetch(url, { mode: 'cors' });
            if (!response.ok) {
                throw new Error(`${city} not found`);
            }

            const data = await response.json();
            const temperature = `Temperature: ${data.main.temp} \u00B0C`;
            const feelsLike = `Feels Like: ${data.main.feels_like} \u00B0C`;
            const humidity = `Humidity: ${data.main.humidity}%`;
            const windSpeed = `Wind: ${data.wind.speed} km/h`;
            console.log(temperature);
            return {
                temperature, feelsLike, humidity, windSpeed, city,
            };
        } catch (error) {
            alert(error);
            return null;
        }
    }
}
