import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Header } from './components/Header'
import { MainCountry } from './components/MainCountry';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <MainCountry />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
