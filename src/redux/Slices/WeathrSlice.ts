import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {alertError} from "../../utils/Alerts/Alert";
import {getWeather} from "../thunks/getWeather";

interface DataState {
    data?: object,
    isLoader?: boolean,
    error?: any,
}

const initialState: DataState = {}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        // setData: (state, action: PayloadAction<any>): void => {
        //     state.data = action.payload;
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getWeather.pending, (state) => {
                state.isLoader = true;
                state.error = null
            })
            .addCase(getWeather.fulfilled, (state, action: PayloadAction<any>) => {
                state.data = action.payload;
                state.isLoader = false
            })
            .addCase(getWeather.rejected, (state, action: {error: any}) => {
                state.error = action.error.message
                state.isLoader = false
                console.log(action.error)
                console.log(action.error.message)
                if (action.error.message === "Request failed with status code 400") {
                    alertError('Город не найден!')
                }
                else if (action.error.message === "Network Error") {
                    alertError('Сервер не доступен!')
                } else {
                    alertError('Ошибка, попробуйте позже!')
                }
            })
    }
})

export default dataSlice.reducer;
