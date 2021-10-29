import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store';


import './scss/app.scss';

import App from './App';
import reportWebVitals from './reportWebVitals';


const inc = () => {
  store.dispatch({
    type: 'counter/incremented'
  })
}

store.subscribe(() => {
  console.log('changed', store.getState())
})


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App /> 
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
