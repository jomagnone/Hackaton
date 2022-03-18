import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "./../node_modules/bootstrap/dist/css/bootstrap.css"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


