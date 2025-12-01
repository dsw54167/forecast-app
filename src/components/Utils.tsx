import {useSelector} from "react-redux";

export function convertTemperature(celciusValue: number, to: string) {

    let finalValue;
    switch (to) {
        case "°C":
            finalValue= celciusValue;
            break;
        case "°F":
            finalValue = Math.round(celciusValue * (9 / 5) + 32);
            break;
        case "K":
            finalValue = Math.round(celciusValue + 273.15);
            break;
        default:
            finalValue = celciusValue;
    }
    return finalValue;
}