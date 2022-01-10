import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <HashRouter>
        <Switch>
            <App />
        </Switch>
    </HashRouter>,
    document.getElementById('root')
);

reportWebVitals();
