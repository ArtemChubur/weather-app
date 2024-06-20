import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import usePosition from "../../utils/hooks/usePosition";
import {getWeather} from "../../redux/thunks/getWeather";
import style from './style.module.css'
import geoIcon from '../../assets/Vector.svg'
import tempIcon from '../../assets/icon _temperature_.svg'
import {montchs} from "../../constants/Montchs";


const WeatherInfo = () => {
    const position = usePosition()
    const latitude: number = position.position.latitude;
    const longitude: number = position.position.longitude
    const dispatch: any = useDispatch()
    const weather: {current ?: any, location ?: any} = useSelector((state: {state: {data: {data:{}}}}) => state.state.data.data)
    const date: any = new Date();
    const day: number = date.getDate()
    const month: number = date.getMonth()
    const year: number = date.getFullYear()
    const weatherInfoArray = [
        {title: 'Влажность', value: `${weather?.current.humidity}%`},
        {title: 'Давление', value: `${Math.round(weather?.current.pressure_in * 25.4)} мм рт.ст.`},
        {title: 'Скорость ветра', value: `${weather?.current.wind_kph} км/ч`
        }
    ]


    useEffect(() => {
        if (latitude || longitude) {
            const cords = `${latitude} ${longitude}`
            dispatch(getWeather(cords))
        }
    }, [latitude, longitude, dispatch]);

    return (
        <div className={style.weatherInfoCard}>
            <div className={style.weatherInfoCardHeader}>
                <p>{weather?.location.country} {weather?.location.name}</p>
                <img src={geoIcon} alt=""/>
            </div>
            <div className={style.weatherCardMain}>
                <div className={style.dateInfo}>
                    <p>{day} {montchs[month]} {year}</p>
                </div>
                <></>
                <div className={style.tempInfo}>
                    <img className={style.tempIcon} src={tempIcon} alt=""/>
                    <p>{weather?.current.temp_c}°C</p>
                    <img className={style.weatherIcon} src={weather?.current.condition.icon} alt=""/>
                </div>
            </div>
            <div className={style.WeatherInfoDopInfo}>
                {weatherInfoArray.map((item, idx) => {
                    return(
                        <div key={idx}>
                            <div>{item.title}</div>
                            <div>{item.value}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default WeatherInfo;