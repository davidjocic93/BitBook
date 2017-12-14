import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import "babel-polyfill";
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './css/style.css';

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById('root'));
registerServiceWorker();
