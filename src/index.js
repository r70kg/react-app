import React from 'react'
import ReactDOM from 'react-dom'
import FastClick from 'fastclick';
import Route from './router'
import NavFoot from '../src/components/navFoot'
import store from './store/store';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'



import registerServiceWorker from './registerServiceWorker';

FastClick.attach(document.body);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route />
                <NavFoot />
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
