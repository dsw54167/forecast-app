import type {WeatherData} from "./DataService.tsx";
import {getData} from "./DataService.tsx";
import {useEffect, useState} from "react";
import {CityListItem} from "./CityListItem.tsx";
import '../App.css'

import {useNavigate} from 'react-router'


export function CityList() {

    const navigate = useNavigate()

    const handleCityClick = (weatherData: WeatherData) => {
        navigate(`/city/${weatherData.city}`)
    }

    const handleFavouritesClick = () => {
        navigate(`/favourites`)
    }

    const [forecastDataList, setForecastDataList] = useState([])

    const supportedCities = ['Warsaw', 'Berlin', 'Paris', 'New York', 'London', 'Tokyo']

    useEffect(() => {
        const fetchData = async () => {
            try {
                const promises = supportedCities.map(city =>
                    getData(city)
                );
                const weatherDataResults : WeatherData[] = await Promise.all(promises);
                setForecastDataList(weatherDataResults);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const [query, setQuery] = useState<string>('')
    const filteredList: WeatherData[] = forecastDataList.filter((item: WeatherData) => item.city.toLowerCase().startsWith(query.toLowerCase()))
    return (
        <div className='flex gap-4 flex-col'>
            <button onClick={() => handleFavouritesClick()}>show favourites</button>
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Search for a city'
                   className='border-neutral-100 bg-neutral-100 rounded-md px-2'/>
            {filteredList.map((item) =>
                <CityListItem key={item.city} {...item} onClick={() => handleCityClick(item)}/>)}

        </div>

    )
}
