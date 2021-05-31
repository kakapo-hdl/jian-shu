import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './style.js';
import IconFontStyle from './statics/iconFont/iconfontstyle';
import App from './App';
ReactDOM.render(
  <React.StrictMode>
    <IconFontStyle></IconFontStyle>
    <GlobalStyle> </GlobalStyle>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
