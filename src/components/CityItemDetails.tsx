import {DATA, type WeatherData} from "../../mocks.ts";
import {useParams} from "react-router";

export function CityItemDetails() {
    const {city} = useParams();
    if (!city) return <div>No city provided</div>;
    const data: WeatherData = DATA.find((item) => item.city.toLowerCase() == city.toLowerCase())!
    if (!data) return <div>No data found</div>;
    return (
        <div className='flex flex-col bg-neutral-400'>
            <span className='text-sm text-white'>{`${data.city}, ${data.countryCode}`}</span>
            <span className='text-lg text-white'>{data.value}</span>
            <span className='text-sm text-neutral-300'>{data.description}</span>
            <div className="grid grid-cols-2">
                <div className="col-span-1">
                    <span className="font-semibold">Precipitation:</span> {`${data.chanceOfPrecipitation}%`}
                </div>
                <div className="col-span-1">
                    <span className="font-semibold">Humidiy:</span> {`${data.humidity}%`}
                </div>

                <div className="col-span-1 ">
                    <span className="font-semibold">Sunrise:</span> {data.sunrise}
                </div>

                <div className="col-span-1">
                    <span className="font-semibold">Sunset:</span> {data.sunset}
                </div>

                <div className="col-span-1 ">
                    <span className="font-semibold">Wind:</span>{`${data.wind.speed} ${data.wind.direction}`}
                </div>

                <div className="col-span-1">
                    <span className="font-semibold">Real temp:</span> {data.realTemp}
                </div>

            </div>
        </div>
    );

}