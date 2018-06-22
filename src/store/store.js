import {createStore, combineReducers, applyMiddleware,compose} from 'redux';
import * as home from './home/reducer';
import thunk from 'redux-thunk';




const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : f => f
const store = createStore(
    combineReducers({...home}),
    compose(
    applyMiddleware(thunk),
    reduxDevtools
))



export default store;