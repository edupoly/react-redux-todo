import { createStore, combineReducers } from 'redux';
import counterReducer from './counter.reducer';
import todoReducer from './todo.reducer';
var reducer = combineReducers({ counter:counterReducer, todos:todoReducer });
const store = new createStore(reducer);
export default store;
