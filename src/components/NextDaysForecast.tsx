import {useEffect, useState} from "react";
import {get5DaysForecast} from "./DataService.tsx";
import {ForecastSummary} from "./ForecastSummary.tsx";

interface NextDaysForecastProperties {
    city: string;
    unit: string;
}

export function NextDaysForecast({city, unit}: NextDaysForecastProperties) {

    const [nextDaysForecastDataList, setNextDaysForecastDataList] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const nextDaysForecast = await get5DaysForecast(String(city));
                const forecastArray = nextDaysForecast.list
                    .filter((forecast) => forecast.dt_txt.includes("12:00:00"));
                setNextDaysForecastDataList(forecastArray);
            } catch (error) {
                console.error('Error fetching 5-days forecast:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <div className="h-4"></div>
            <div className='text-xs  pb-2'>5-day weather forecast</div>
            <div className="grid grid-cols-5 gap-1 text-xs text-left text-neutral-300 ">
                {nextDaysForecastDataList.map((forecast, index) => (
                    <ForecastSummary key={index}
                                     temp={forecast.main.temp}
                                     unit={unit} timestamp={forecast.dt}
                                     icon={forecast.weather[0].icon}
                                     city={city}/>
                ))}
            </div>
            <div className="h-4"></div>
        </div>
    )
}