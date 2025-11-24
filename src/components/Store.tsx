import {createStore} from 'redux';

export const getUnit = (unit: string) => {
    return {
        type: "GET_UNIT",
        unit: unit
    }
}

const initialState = {
    unit: "°C"
}

const unitReducer = (state = initialState, action: { type: string; unit: string; }) => {
    switch (action.type) {
        case "GET_UNIT":
            return {
                unit: action.unit
            }
        default:
            return state
    }
}

export const store = createStore(unitReducer)