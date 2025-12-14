import axios from 'axios';

export interface WeatherData {
    city: string;
    countryCode: string;
    icon: string;
    description: string;
    value: number;
    sunrise: string;
    sunset: string;
    humidity: number;
    chanceOfPrecipitation: number;
    realTemp: number;
    wind: { speed: number; direction: string };
    forecast5Days: Array<{ icon: string; value: number; date: string }>;
}

function formatTime(timestamp: number): string {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
}

function formatDate(timestamp: number): string {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' });
}

function mapApiResponseToWeatherData(apiResponse: any): WeatherData {
    const current = apiResponse.list[0];
    const city = apiResponse.city;

    const forecast5Days = apiResponse.list
        .filter((_: any, index: number) => index % 8 === 0)
        .slice(0, 5)
        .map((item: any) => ({
            icon: item.weather[0].icon,
            value: item.main.temp,
            date: formatDate(item.dt)
        }));
        console.log(current.weather[0])
    return {
        city: city.name,
        countryCode: city.country,
        icon: current.weather[0].icon,
        description: current.weather[0].description,
        value: current.main.temp,
        sunrise: formatTime(city.sunrise),
        sunset: formatTime(city.sunset),
        humidity: current.main.humidity,
        chanceOfPrecipitation: Math.round((current.pop || 0) * 100),
        realTemp: current.main.feels_like,
        wind:current.wind.speed,
        forecast5Days
    };
}
export async function getData(city: string): Promise<WeatherData> {
    return axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=5d71561865411cc3a6030078053dcd6b&units=metric`)
        .then(response => {
            console.log('API Response:', response.data);
            return mapApiResponseToWeatherData(response.data);
        })
        .catch(error => {
            console.error("Weather API error:", error.message);
            throw error;
        });
}

export async function get5DaysForecast(city: string) {
    return axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=5d71561865411cc3a6030078053dcd6b`)
        .then(response => {
            console.log('API Response:', response.data);
            return response.data;
        })
        .catch(error => {
            console.error("Weather API error:", error.message);
            throw error;
        });
}
