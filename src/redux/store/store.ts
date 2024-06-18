import { configureStore } from "@reduxjs/toolkit";
import {dataSlice} from "../Slices/WeathrSlice";
import {citySlice} from "../Slices/CitySlice";
import rootSlice from "../rootReducer";

export const store = configureStore({
    reducer: {
        state: rootSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;