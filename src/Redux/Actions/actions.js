import { GET_QUOTE } from "../Types/types";

export const getQuote = jsonObject => {
    return {
        type: GET_QUOTE,
        jsonObject
    }
}

export const getQuoteRequest = () => {
    return async dispatch => {
        const request = await fetch('https://api.quotable.io/random?tags=technology,famous-quotes');
        const requestJson = await request.json();
        dispatch(getQuote(requestJson));
    }
}