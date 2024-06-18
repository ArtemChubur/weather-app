import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import {ToastContainer} from "react-toastify";
import App from './App';
import {Provider} from "react-redux";
import {store} from "./redux/store/store";
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <>
        <ToastContainer
            position="top-right"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
        />
        <Provider store={store}>
            <App />
        </Provider>
    </>
);
