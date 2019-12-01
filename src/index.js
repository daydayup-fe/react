import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './counter';
import * as serviceWorker from './serviceWorker';
import CounterFather from './counterFather'
import TodoApp from './TodoApp'
import store from './Store.js';
import {Provider} from 'react-redux'

ReactDOM.render(<CounterFather />, document.getElementById('root'));
ReactDOM.render(
    <Provider store ={store}>
        <TodoApp />
    </Provider>
    , document.getElementById('myapp'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
