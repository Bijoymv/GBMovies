import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './createStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

console.log("current store state:",store.getState());
ReactDOM.render(
                <Provider store={store}>
                    <App />
                </Provider>, 
                document.getElementById('root')
               );


