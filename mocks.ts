export interface WeatherData {
    city: string;
    countryCode: string;
    icon: string;
    value: number;
    description: string;
    sunrise: string;
    sunset: string;
    humidity: number;
    chanceOfPrecipitation: number;
    realTemp: number;
    wind: { speed: number, direction: string }
}

export const DATA = [
    {
        "city": "London",
        "countryCode": "UK",
        "icon": "🌧️",
        "description": "Light Rain",
        "value": 12,
        "sunrise": "07:42",
        "sunset": "16:08",
        "humidity": 68,
        "chanceOfPrecipitation": 60,
        "realTemp": 10,
        "wind": {"speed": 5.2, "direction": "NW"}
    },
    {
        "city": "New York",
        "countryCode": "US",
        "icon": "⛅",
        "description": "Partly Cloudy",
        "value": 18,
        "sunrise": "06:58",
        "sunset": "16:36",
        "humidity": 55,
        "chanceOfPrecipitation": 20,
        "realTemp": 17,
        "wind": {"speed": 4.8, "direction": "SW"}
    },
    {
        "city": "Tokyo",
        "countryCode": "JP",
        "icon": "☀️",
        "description": "Clear",
        "value": 22,
        "sunrise": "06:31",
        "sunset": "16:49",
        "humidity": 40,
        "chanceOfPrecipitation": 5,
        "realTemp": 23,
        "wind": {"speed": 3.0, "direction": "NE"}
    },
    {
        "city": "Sydney",
        "countryCode": "AU",
        "icon": "🌤️",
        "description": "Mostly Sunny",
        "value": 26,
        "sunrise": "05:38",
        "sunset": "19:56",
        "humidity": 50,
        "chanceOfPrecipitation": 15,
        "realTemp": 27,
        "wind": {"speed": 6.1, "direction": "SE"}
    },
    {
        "city": "Paris",
        "countryCode": "FR",
        "icon": "🌫️",
        "description": "Foggy",
        "value": 9,
        "sunrise": "08:14",
        "sunset": "17:01",
        "humidity": 82,
        "chanceOfPrecipitation": 10,
        "realTemp": 8,
        "wind": {"speed": 3.4, "direction": "N"}
    },
    {
        "city": "Dubai",
        "countryCode": "AE",
        "icon": "☀️",
        "description": "Hot & Sunny",
        "value": 34,
        "sunrise": "06:55",
        "sunset": "17:42",
        "humidity": 30,
        "chanceOfPrecipitation": 0,
        "realTemp": 36,
        "wind": {"speed": 2.5, "direction": "W"}
    },
    {
        "city": "Toronto",
        "countryCode": "CA",
        "icon": "❄️",
        "description": "Snow",
        "value": -2,
        "sunrise": "07:32",
        "sunset": "16:44",
        "humidity": 72,
        "chanceOfPrecipitation": 70,
        "realTemp": -5,
        "wind": {"speed": 7.3, "direction": "NW"}
    },
    {
        "city": "Rio de Janeiro",
        "countryCode": "BR",
        "icon": "🌦️",
        "description": "Showers",
        "value": 28,
        "sunrise": "05:11",
        "sunset": "18:30",
        "humidity": 75,
        "chanceOfPrecipitation": 55,
        "realTemp": 30,
        "wind": {"speed": 4.0, "direction": "E"}
    },
    {
        "city": "Cape Town",
        "countryCode": "ZA",
        "icon": "🌬️",
        "description": "Windy",
        "value": 20,
        "sunrise": "05:20",
        "sunset": "19:56",
        "humidity": 60,
        "chanceOfPrecipitation": 10,
        "realTemp": 19,
        "wind": {"speed": 9.5, "direction": "SE"}
    },
    {
        "city": "Mumbai",
        "countryCode": "IN",
        "icon": "🌩️",
        "description": "Thunderstorms",
        "value": 30,
        "sunrise": "06:55",
        "sunset": "18:15",
        "humidity": 78,
        "chanceOfPrecipitation": 80,
        "realTemp": 32,
        "wind": {"speed": 5.7, "direction": "SW"}
    }
]
