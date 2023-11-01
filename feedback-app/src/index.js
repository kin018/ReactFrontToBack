import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//.render(input, where in html it goes)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
