import { GET_QUOTE, GET_COLOR } from "../Types/types";

export const getQuote = jsonObject => {
    return {
        type: GET_QUOTE,
        jsonObject
    }
}

export const getColor = () => {
    return {
        type: GET_COLOR
    }
}

export const getQuoteRequest = () => {
    return async dispatch => {
        const request = await fetch('https://api.quotable.io/random');
        const requestJson = await request.json();
        dispatch(getQuote(requestJson));
    }
}