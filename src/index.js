import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
//В данный компонент мы должны обернуть все наше приложения для того чтоб указать что мы работаем с редаксом
import {Provider} from 'react-redux';

import rootReducer from "./redux/rootReducer";
const store = createStore(rootReducer);

const app = (
    //передаем с помощью провайдера store
    <Provider store={store}>
        <App/>
    </Provider>
)


ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
