import axios from "axios";
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setCity } from "../../redux/Slices/CitySlice";
import { getWeather } from "../../redux/thunks/getWeather";
import usePosition from "../../utils/hooks/usePosition";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import style from './style.module.css'
import searchIcon from '../../assets/icon _search_.svg'

const Search = () => {
    const dispatch: any = useDispatch();
    const city: string = useSelector((state: {state: {city: {city: string}}}) => state.state.city.city)
    const position: {position: {latitude: number, longitude: number}} = usePosition()
    const latitude: number = position.position.latitude;
    const longitude: number = position.position.longitude
    const cords = `${latitude} ${longitude}`

    async function test () {
        try {
            const response: any = await axios('http://api.weatherapi.com/v1/forecast.json?key=c21840e36da34ce4b6a102650230710&q=London&days=7&aqi=no&alerts=no')
            console.log(response)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        test()
    }, []);

    return (
        <div className={style.searchParents}>
            <form
                onSubmit={async (e): Promise<void> => {
                    e.preventDefault();
                    dispatch(getWeather(city))
                }}
            >
                <div className={style.searchInpParents}>
                    <input
                        className={style.searchInp}
                        type="text"
                        placeholder={'Искать в...'}
                        value={city}
                        onChange={(e) => {
                            dispatch(setCity(e.target.value));
                        }}
                    />
                    <div className={style.SearchBtns}>
                        <button
                            className={style.SearchReset}
                            type={'reset'}
                            onClick={() => {
                                dispatch(getWeather(cords))
                                dispatch(setCity(''))
                            }}
                        >
                            <RestartAltIcon/>
                        </button>
                        <button
                            className={style.SearchSubmit}
                            type={'submit'}
                        >
                            <img
                                className={style.searchIcon}
                                src={searchIcon} alt=""
                            />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Search;

