import {Icon} from "./Icon.tsx";
import {Temperature} from "./Temperature.tsx";

interface ForecastSummaryProperties {
    timestamp: number,
    icon: string,
    temp: number,
    unit: string,
    city: string,
}


export function ForecastSummary({city, timestamp, icon, temp, unit}: ForecastSummaryProperties)  {
    return (
        <div key={city} className="border rounded-md px-2 bg-neutral-500 gap-24">
            <div className="font-semibold"> {new Date(timestamp * 1000).toDateString()}</div>
            <div className="font-semibold text-center">
                <Icon icon={icon}/>
            </div>
            <div className="font-semibold text-center"><Temperature temp={temp} unit={unit}/></div>
        </div>)
}