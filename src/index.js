import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk'

//В данный компонент мы должны обернуть все наше приложения для того чтоб указать что мы работаем с редаксом
import {Provider} from 'react-redux';

import rootReducer from "./redux/rootReducer";

//Миделвер это определенные функции которые добовляют определенный функционал чемуто
//Можно записать так, длино а можно как ниже переписать
// function loggerMiddleware(store){
//     return function(next){
//        return function(action){
//          const result = next(action)
//            console.log('Middleware', store.getState())
//            return result
//        }
//     }
// }
// loggerMiddleware- функция которая при изменении store будет выводить все в консоль
const loggerMiddleware = store => next =>action =>{
    const result = next(action)
          console.log('Middleware', store.getState())
    return result
}


const store = createStore(rootReducer, applyMiddleware(
    loggerMiddleware,
    reduxThunk
));

const app = (
    //передаем с помощью провайдера store
    <Provider store={store}>
        <App/>
    </Provider>
)


ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
