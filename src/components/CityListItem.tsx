import type {WeatherData} from "../../mocks.ts";
import {useSelector} from "react-redux";

interface CityListItemProps extends WeatherData {
    onClick: () => void;
}

export const CityListItem = ({city, countryCode, description, value, icon, onClick}: CityListItemProps) => {

    const saved = localStorage.getItem("favourites");
    const favourites = saved ? JSON.parse(saved) : [];
    const isFavourite = city ? favourites.includes(city.toLowerCase()) : false;
    const unit = useSelector((state: {unit: string}) => state.unit);
    return <div key={city} onClick={onClick}
                className='flex w-96 bg-neutral-600 justify-between px-4 py-2 rounded-md items-center'>
        <p>{unit}</p>
        <div className='flex items-center gap-2'>
            <span className='bg-neutral-400 size-8 flex items-center justify-center rounded-md'>{icon}</span>
            <div className='flex flex-col'>
                <span className='text-lg text-white'>{`${city}, ${countryCode}`}</span>
                <span className='text-sm text-neutral-300 text-left italic'>{description}</span>
            </div>
        </div>
        <span className='text-sm font-bold text-white'>{isFavourite ? '❤️' : ''} {value}°C</span>
    </div>

}

