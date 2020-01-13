import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home/Home';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import store from "./store";

ReactDOM.render(
    <BrowserRouter>
        <Provider store = {store}>
            <Home/>
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));
