import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import 'modern-normalize/modern-normalize.css';

import './css/style.module.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root'),
);
