import React, {useEffect, useState} from 'react';
import Header from "../../modules/Header/Header";
import Search from "../../modules/Search/Search";
import {useDispatch, useSelector} from "react-redux";
import WeatherInfo from "../../modules/WeatherInfo/WeatherInfo";
import {getWeather} from "../../redux/thunks/getWeather";
import usePosition from "../../utils/hooks/usePosition";

const Main = () => {


    
    return (
        <>
            <Header />
            <Search />
            <WeatherInfo />
        </>
    );
};

export default Main;