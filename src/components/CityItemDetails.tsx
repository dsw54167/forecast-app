import {DATA, type WeatherData} from "../../mocks.ts";
import {useNavigate, useParams} from "react-router";

export function CityItemDetails() {
    const {city} = useParams();
    const navigate = useNavigate()
    const handleReturnlick = () => {
        navigate(`/`)
    }

    if (!city) return
    <div>
        <span className='top-0 left-0 size-16'>←</span>
        No city provided
    </div>;
    const data: WeatherData = DATA.find((item) => item.city.toLowerCase() == city.toLowerCase())!
    if (!data) return <div>
        <span className='top-0 left-0 size-16'>←</span>
        No data found</div>;
    return (
        <div className='flex flex-col bg-neutral-600 rounded-md px-2 text-white'>
            <p className='top-0 left-0 size-1/4 text-3xl' onClick={handleReturnlick}>←</p>
            <span className='text-lg '>{`${data.city}, ${data.countryCode}`}</span>
            <span className='text-lg '>{data.value}</span>
            <span className='text-sm text-neutral-300 italic'>{`${data.icon} ${data.description}`}</span>
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
                    <span className="font-semibold ">{`Wind: ${data.wind.speed} ${data.wind.direction}`}</span>
                </div>

                <div className="">
                    <span className="font-semibold">{`Real temp: ${data.realTemp}`}</span>
                </div>

            </div>
            <div className="h-4"></div>
            <div className='text-xs  pb-2'>5-day weather forecast</div>
            <div className="grid grid-cols-5 gap-1 text-xs text-left text-neutral-300 ">
                {data.forecast5Days.map((forecast, index) => (
                    <div key={index} className="border rounded-md px-2 bg-neutral-500 gap-24">
                        <div className="font-semibold">{`${forecast.date}`}</div>
                        <div className="font-semibold text-center">{`${forecast.icon}`}</div>
                        <div className="font-semibold text-center">{`${forecast.value}`}</div>
                    </div>
                ))}
            </div>
            <div className="h-4"></div>


        </div>
    );

}