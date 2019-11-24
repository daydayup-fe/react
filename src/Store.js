import {createStore} from 'redux';
import reducer from './Reducer.js';

const initValue = {
    frist:0,
    second:1,
    Thrid:20
}

const store= createStore(reducer,initValue)

export default store;