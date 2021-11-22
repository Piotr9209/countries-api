import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Header } from '../src/components/header/Header';
import { MainCountry } from '../src/components/mainCountry/MainCountry';

import "./App.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <MainCountry />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
