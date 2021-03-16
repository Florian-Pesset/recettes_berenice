/* eslint-disable import/no-named-as-default */
import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line import/no-named-as-default-member
import reportWebVitals from './reportWebVitals';

import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();