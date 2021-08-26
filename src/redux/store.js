import {combineReducers, createStore} from "redux";
import {ConverterReducer} from "./converter-reducer";

const reducerPac = combineReducers({
    ConverterReducer: ConverterReducer
})


export const store = createStore(reducerPac)
window.store = store