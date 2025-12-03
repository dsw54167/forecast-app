import {getData, type WeatherData} from "./DataService.tsx";
import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Temperature} from "./Temperature.tsx";
import {Icon} from "./Icon.tsx";
import {NextDaysForecast} from "./NextDaysForecast.tsx";

export function CityItemDetails() {
    const {city} = useParams();
    const navigate = useNavigate()

    const handleReturnClick = () => {
        navigate(`/`)
    }

    const unit = useSelector((state: { unit: string }) => state.unit);

    const [favourites, setFavourites] = useState<string[]>(() => {
        const saved = localStorage.getItem("favourites");
        return saved ? JSON.parse(saved) : [];
    });

    const addRemoveFavourite = () => {
        let updatedFavourites: string[];

        if (favourites.includes(city!.toLowerCase())) {
            updatedFavourites = favourites.filter(favCity => favCity !== city!.toLowerCase());
        } else {
            updatedFavourites = [...favourites, city!.toLowerCase()];
        }

        setFavourites(updatedFavourites);
        localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
    }

    const [detailedCityForecast, setDetailedCityForecast] = useState<WeatherData>();
    const isFavourite = city ? favourites.includes(city.toLowerCase()) : false;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data: WeatherData = await getData(String(city));
                setDetailedCityForecast(data);
            } catch (error) {
                console.error('Error fetching detailed city forecast from server:', error);
            }
        };

        fetchData();
    });

    return (
        <div className='flex flex-col bg-neutral-600 rounded-md px-2 text-white'>
            <div className='flex justify-between items-start'>
                <p className='text-3xl' onClick={handleReturnClick}>←</p>
                <p className='text-3xl' onClick={addRemoveFavourite}>  {isFavourite ? '♥' : '♡'}</p>
            </div>
            <span className='text-lg '>{`${detailedCityForecast.city}, ${detailedCityForecast.countryCode}`}</span>
            <Temperature temp={detailedCityForecast.value} unit={unit}/>
            <Icon icon={detailedCityForecast.icon}/>
            <span className='text-sm text-neutral-300 italic'>{`${detailedCityForecast.description}`}</span>

            <div className="h-8"></div>
            <div className="grid grid-cols-2  text-xs text-left text-neutral-300">
                <div className=" ">
                    <span className="font-semibold ">{`Precip: ${detailedCityForecast.chanceOfPrecipitation}%`}</span>
                </div>
                <div className="">
                    <span className="font-semibold ">{`Humidity: ${detailedCityForecast.humidity}%`}</span>
                </div>

                <div className="">
                    <span className="font-semibold ">{`Sunrise: ${detailedCityForecast.sunrise}`}</span>
                </div>

                <div className="">
                    <span className="font-semibold ">{`Sunset: ${detailedCityForecast.sunset}`}</span>
                </div>

                <div className="">
                    <span className="font-semibold ">{`Wind: ${detailedCityForecast.wind} km/h`}</span>
                </div>

                <div className="">
                    <span className="font-semibold">{`Real temp: ${detailedCityForecast.realTemp}`}</span>
                </div>

            </div>
            <NextDaysForecast city={city} unit={unit}/>
        </div>
    );

}