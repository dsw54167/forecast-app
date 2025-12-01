import {get5DaysForecast, getData, type WeatherData} from "./DataService.tsx";
import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {convertTemperature} from "./Utils.tsx";

export function CityItemDetails() {
    const {city} = useParams();
    const navigate = useNavigate()
    const handleReturnClick = () => {
        navigate(`/`)
    }

    const [favourites, setFavourites] = useState<string[]>(() => {
        const saved = localStorage.getItem("favourites");
        return saved ? JSON.parse(saved) : [];
    });

    const addRemoveFavourite = () => {
        if (!city) return;

        let updatedFavourites: string[];

        if (favourites.includes(city.toLowerCase())) {
            updatedFavourites = favourites.filter(favCity => favCity !== city.toLowerCase());
        } else {
            updatedFavourites = [...favourites, city.toLowerCase()];
        }

        setFavourites(updatedFavourites);
        localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
    }

    const [forecastDataList, setForecastDataList] = useState({});
    const [nextDaysForecastDataList, setNextDaysForecastDataList] = useState([])

    const isFavourite = city ? favourites.includes(city.toLowerCase()) : false;

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log('fetching data for city:', city)
                const cityForecast: WeatherData = await getData(String(city));
                setForecastDataList(cityForecast);
            } catch (error) {
                console.error('Error fetching Warsaw data:', error);
            }
        };

        fetchData();
    }, {});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const nextDaysForecast = await get5DaysForecast(String(city));
                const forecastArray = nextDaysForecast.list
                    .filter((forecast) => forecast.dt_txt.includes("12:00:00"));
                setNextDaysForecastDataList(forecastArray);
                console.log('nextDaysForecast:', nextDaysForecast);
            } catch (error) {
                console.error('Error fetching Warsaw data:', error);
            }
        };

        fetchData();
    }, []);

    if (!city) return
    <div>
        <span className='top-0 left-0 size-16'>←</span>
        No city provided
    </div>;
    const unit = useSelector((state: { unit: string }) => state.unit);
    const data: WeatherData = forecastDataList

    if (!data) return <div>
        <span className='top-0 left-0 size-16'>←</span>
        No data found</div>;

    const temperature = convertTemperature(data.value, unit)
    return (
        <div className='flex flex-col bg-neutral-600 rounded-md px-2 text-white'>
            <div className='flex justify-between items-start'>
                <p className='text-3xl' onClick={handleReturnClick}>←</p>
                <p className='text-3xl' onClick={addRemoveFavourite}>  {isFavourite ? '♥' : '♡'}</p>
            </div>
            <span className='text-lg '>{`${data.city}, ${data.countryCode}`}</span>
            <span className='text-lg '>{data.value}</span>
            <img src={`https://openweathermap.org/img/wn/${data.icon}@4x.png`}
                 alt="icon"
                 className='w-20 h-auto mx-auto'/>
            <span className='text-sm text-neutral-300 italic'>{`${data.description}`}</span>

            <div className="h-8"></div>
            <div className="grid grid-cols-2  text-xs text-left text-neutral-300">
                <div className=" ">
                    <span className="font-semibold ">{`Precip: ${data.chanceOfPrecipitation}%`}</span>
                </div>
                <div className="">
                    <span className="font-semibold ">{`Humidity: ${data.humidity}%`}</span>
                </div>

                <div className="">
                    <span className="font-semibold ">{`Sunrise: ${data.sunrise}`}</span>
                </div>

                <div className="">
                    <span className="font-semibold ">{`Sunset: ${data.sunset}`}</span>
                </div>

                <div className="">
                   <span className="font-semibold ">{`Wind: ${data.wind} km/h`}</span>
                </div>

                <div className="">
                    <span className="font-semibold">{`Real temp: ${data.realTemp}`}</span>
                </div>

            </div>
            <div className="h-4"></div>
            <div className='text-xs  pb-2'>5-day weather forecast</div>
            <div className="grid grid-cols-5 gap-1 text-xs text-left text-neutral-300 ">
                {nextDaysForecastDataList.map((forecast, index) => (
                    <div key={index} className="border rounded-md px-2 bg-neutral-500 gap-24">
                        <div className="font-semibold"> {new Date(forecast.dt * 1000).toDateString()}</div>
                        <div className="font-semibold text-center">
                            <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@4x.png`}
                                 alt="icon"
                                 className='w-10 h-auto mx-auto'/>
                        </div>
                        <div className="font-semibold text-center">{forecast.main.temp}</div>
                    </div>
                ))}
            </div>
            <div className="h-4"></div>
        </div>
    );

}