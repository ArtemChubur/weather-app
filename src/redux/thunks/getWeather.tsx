import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosInstance} from "../../utils/API/API";


const key: string = 'c21840e36da34ce4b6a102650230710'

export const getWeather = createAsyncThunk('getWeather', async (city: string) => {
    const response = await axiosInstance.get(`/v1/current.json?key=${key}&q=${city}&aqi=no`)
    return response.data
}, {})