import { combineReducers } from "@reduxjs/toolkit";
import cityReducer from "./Slices/CitySlice";
import dataReducer from "./Slices/WeathrSlice";

const rootReducer = combineReducers({
    city: cityReducer,
    data: dataReducer,
});

export default rootReducer;
