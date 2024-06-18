import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getWeather} from "../thunks/getWeather";

interface DataState {
    data?: object;
}

const initialState: DataState = {}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<any>): void => {
            state.data = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getWeather.fulfilled, (state, action: PayloadAction<any>) => {
            state.data = action.payload;
        });
    }
})

export const {setData} = dataSlice.actions;
export default dataSlice.reducer;
