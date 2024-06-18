import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setCity } from "../../redux/Slices/CitySlice";
import { getWeather } from "../../redux/thunks/getWeather";
import usePosition from "../../utils/hooks/usePosition";
import style from './style.module.css'
import searchIcon from '../../assets/icon _search_.svg'
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const Search = () => {
    const dispatch: any = useDispatch();
    const city = useSelector((state: any) => state.state.city.city)
    const position = usePosition()
    const latitude: number = position.position.latitude;
    const longitude: number = position.position.longitude
    const cords = `${latitude} ${longitude}`

    return (
        <div className={style.searchParents}>
            <form
                onSubmit={async (e) => {
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

