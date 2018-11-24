import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {changeColors, selectGameOption, changeGameState, changeUser} from './controllers/reducers';

const rootReducer = combineReducers({changeColors, selectGameOption, changeGameState, changeUser});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
    document.getElementById('root')
);
