// react libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// state
import configureStore from './store/configureStore';

// components
import AppRouter from './components/Router';


const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
    <AppRouter />
    </Provider>,
document.getElementById('root'));

