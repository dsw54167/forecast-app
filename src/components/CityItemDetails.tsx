import type {WeatherData} from "../../mocks.ts";

type CityListItemProps = WeatherData;
export const CityItemDetails = ({
                                    city,
                                    countryCode,
                                    description,
                                    value,
                                    wind,
                                    sunrise,
                                    sunset,
                                    humidity,
                                    realTemp,
                                    chanceOfPrecipitation
                                }: CityListItemProps) => {
    return (
        <div className='flex flex-col bg-neutral-400'>
            <span className='text-sm text-white'>{`${city}, ${countryCode}`}</span>
            <span className='text-lg text-white'>{value}</span>
            <span className='text-sm text-neutral-300'>{description}</span>
            <div className="grid grid-cols-2">
                <div className="col-span-1">
                    <span className="font-semibold">Precipitation:</span> {`${chanceOfPrecipitation}%`}
                </div>
                <div className="col-span-1">
                    <span className="font-semibold">Humidiy:</span> {`${humidity}%`}
                </div>

                <div className="col-span-1 ">
                    <span className="font-semibold">Sunrise:</span> {sunrise}
                </div>

                <div className="col-span-1">
                    <span className="font-semibold">Sunset:</span> {sunset}
                </div>

                <div className="col-span-1 ">
                    <span className="font-semibold">Wind:</span>{`${wind.speed} ${wind.direction}`}
                </div>

                <div className="col-span-1">
                    <span className="font-semibold">Real temp:</span> {realTemp}
                </div>


            </div>
        </div>
    );
}