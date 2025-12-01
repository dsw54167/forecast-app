import {useDispatch, useSelector} from "react-redux";
import {getUnit} from "../components/Store.tsx";

export default function UnitSwitcher() {
    const dispatch = useDispatch();
    const unit = useSelector((state) => state.unit);
    const handleChange = (e) => {
        dispatch(getUnit(e.target.value));
    };
    return (
        <div className='text-left'>
            <label>
                <input
                    type="radio"
                    name="unit"
                    value="°C"
                    checked={unit === "°C"}
                    onChange={handleChange}
                />
                °C
            </label>

            <label>
                <input
                    type="radio"
                    name="unit"
                    value="°F"
                    checked={unit === "°F"}
                    onChange={handleChange}
                />
                °F
            </label>

            <label>
                <input
                    type="radio"
                    name="unit"
                    value="K"
                    checked={unit === "K"}
                    onChange={handleChange}
                />
                K
            </label>
        </div>
    );
}