import {useDispatch, useSelector} from "react-redux";
import {getUnit} from "../components/Store.tsx";

export default function UnitSwitcher() {
    const dispatch = useDispatch();
    const unit = useSelector((state) => state.unit);
    const handleChange = (e) => {
        dispatch(getUnit(e.target.value));
    };
    return (
        <div>
            <label>
                <input
                    type="radio"
                    name="unit"
                    value="celsius"
                    checked={unit === "celsius"}
                    onChange={handleChange}
                />
                °C
            </label>

            <label>
                <input
                    type="radio"
                    name="unit"
                    value="fahrenheit"
                    checked={unit === "fahrenheit"}
                    onChange={handleChange}
                />
                °F
            </label>

            <label>
                <input
                    type="radio"
                    name="unit"
                    value="kelvin"
                    checked={unit === "kelvin"}
                    onChange={handleChange}
                />
                K
            </label>
        </div>
    );
}