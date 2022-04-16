import { GET_QUOTE } from "../Types/types";

const initialState = {
    quote: {
        content: '',
        author: ''
    }
};

export const getQuoteReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_QUOTE:
            return {
                ...state,
                quote: {
                    content: action.jsonObject.content,
                    author: action.jsonObject.author
                }
            }
        default:
            return state;
    }
}