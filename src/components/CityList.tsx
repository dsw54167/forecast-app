import {DATA, type WeatherData} from "../../mocks.ts";
import {useState} from "react";
import {CityListItem} from "./CityListItem.tsx";
import '../App.css'

import { useNavigate } from 'react-router'


export function CityList(){

    const navigate = useNavigate()

    const handleCityClick = (weatherData: WeatherData) => {
        navigate(`/city/${weatherData.city}`)
    }

    const handleFavouritesClick = () => {
        navigate(`/favourites`)
    }

    const [query, setQuery] = useState<string>('')
    const filteredList = DATA.filter((item) => item.city.toLowerCase().startsWith(query.toLowerCase()))
    return (
        <div className='flex gap-4 flex-col'>
            <button onClick={()=>handleFavouritesClick()}>favourites</button>
            <input  value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Search for a city'
                   className='border-neutral-100 bg-neutral-100 rounded-md px-2'/>
            {filteredList.map((item) =>
                <CityListItem key={item.city} {...item} onClick={() => handleCityClick(item)} />)}

        </div>

    )
}
