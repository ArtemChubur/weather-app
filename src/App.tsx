import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { getWeather } from "./redux/thunks/getWeather";
import Main from "./pages/Main/Main";

const App = () => {
    return (
        <div>
            <Main />
        </div>
    );
};

export default App;
