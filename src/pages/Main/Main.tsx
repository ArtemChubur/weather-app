import React, {useEffect, useState} from 'react';
import Search from "../../modules/Search/Search";
import {useDispatch, useSelector} from "react-redux";
import WeatherInfo from "../../modules/WeatherInfo/WeatherInfo";
import {getWeather} from "../../redux/thunks/getWeather";
import usePosition from "../../utils/hooks/usePosition";

const Main = () => {


    
    return (
        <>
            <Search />
            <WeatherInfo />
        </>
    );
};

export default Main;