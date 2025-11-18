import type {WeatherData} from "../../mocks.ts";

interface CityListItemProps extends WeatherData {
    onClick: () => void;
}

export const CityListItem = ({city, countryCode, description, value, icon, onClick}: CityListItemProps) => {

    return <div key={city} onClick={onClick}
                className='flex w-96 bg-neutral-600 justify-between px-4 py-2 rounded-md items-center'>
        <div className='flex items-center gap-2'>
            <span className='bg-neutral-400 size-8 flex items-center justify-center rounded-md'>{icon}</span>
            <div className='flex flex-col'>
                <span className='text-lg text-white'>{`${city}, ${countryCode}`}</span>
                <span className='text-sm text-neutral-300 text-left'>{description}</span>
            </div>
        </div>
        <span className='text-sm font-bold text-white'>{value}°C</span>
    </div>

}

