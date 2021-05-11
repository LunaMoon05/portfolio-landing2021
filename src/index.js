import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';

document.documentElement.style.setProperty('--animate-duration', '1.8s');

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
