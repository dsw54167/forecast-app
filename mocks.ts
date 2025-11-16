interface WeatherData {
    city: string;
    countryCode: string;
    icon: string;
    value: number;
    description: string;
}

export const DATA = [
    {
        city: 'London',
        countryCode: 'UK',
        icon: '🌧️',
        description: 'Sunny',
        value: 12
    }, {
        city: 'Paris',
        countryCode: 'FR',
        icon: '☁️',
        description: 'Cloudy',
        value: -2

    }, {
        city: 'Tokyo',
        countryCode: 'JP',
        icon: '☀️',
        description: '',
        value: 20
    }, {
        city: 'Berlin',
        countryCode: 'DE',
        icon: '❄️ ',
        description: 'Rainy',
        value: -5
    }]