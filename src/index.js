import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import BurgerStoreService from './services'
import store from './state/store'
import { BurgersStoreServicesProvider } from './services-context';
import App from './App';
import './index.css';

const burgerStoreService = new BurgerStoreService();

ReactDOM.render(
  <Provider store={store}>
    <BurgersStoreServicesProvider value={burgerStoreService}>
      <Router>
        <App />
      </Router>
    </BurgersStoreServicesProvider>
  </Provider>,
  document.getElementById('root')
);
