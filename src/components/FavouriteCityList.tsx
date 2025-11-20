import {DATA, type WeatherData} from "../../mocks.ts";
import {CityListItem} from "./CityListItem.tsx";
import '../App.css'

import {useNavigate} from 'react-router'


export function FavouriteCityList() {

    const navigate = useNavigate()
    const saved = localStorage.getItem("favourites");
    const favourites = saved ? JSON.parse(saved) : [];

    const handleCityClick = (weatherData: WeatherData) => {
        navigate(`/city/${weatherData.city}`)
    }

    const handleReturnClick = () => {
        navigate(`/`)
    }

    const filteredList = DATA.filter((item) => favourites.includes(item.city.toLowerCase()))
    return (
        <div className='flex gap-4 flex-col'>
            <div className='flex justify-between items-start'>
                <p className='text-3xl' onClick={handleReturnClick}>←</p>
            </div>

            {filteredList.map((item) =>
                <CityListItem key={item.city} {...item} onClick={() => handleCityClick(item)}/>)}
        </div>

    )
}
