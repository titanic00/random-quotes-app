import { combineReducers } from "redux";
import { getQuoteReducer } from "./getQuoteReducer";
import { getColorReducer } from "./getColorReducer";

export const rootReducer = combineReducers({
    getQuoteReducer,
    getColorReducer
});