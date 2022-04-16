import { GET_COLOR } from "../Types/types";

const initialState = {
    color: 'rgb(0, 0, 0)'
};

export const getColorReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COLOR:
            const color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
            return {
                ...state,
                color: color
            }
        default:
            return state;
    }
}