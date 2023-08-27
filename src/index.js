import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.scss';
import './font.css';
import './reset.css';
import 'animate.css';
import './aos.scss';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
