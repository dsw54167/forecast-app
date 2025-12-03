import {convertTemperature} from "./Utils.tsx";

interface TemperatureProperties {
    temp: number;
    unit: string;
}

export const Temperature = ({temp, unit}: TemperatureProperties) => {
    const convertedTemp = convertTemperature(temp, unit);
    const roundedTemp = Math.round(convertedTemp);
    return <span className='text-sm font-bold text-white'>{roundedTemp} {unit}  </span>
}