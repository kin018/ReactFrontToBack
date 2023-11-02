//THIS IS FOR REACT 18 I will correct this after following tutorial
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// const root = document.getElementById('root');
// const rootElement = (
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// ReactDOM.createRoot(root).render(rootElement);

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
