import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './fonts/NewYork/NewYork.otf'
import './fonts/NewYork/NewYork.woff2'
import './fonts/NewYork/NewYork.woff'

import './fonts/AcuminProWide/AcuminProWideBook.otf'
// import './fonts/NewYork/NewYork.woff2'
// import './fonts/NewYork/NewYork.woff'

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
