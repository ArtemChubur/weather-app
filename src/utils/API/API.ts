import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://api.weatherapi.com'
})

export {axiosInstance}