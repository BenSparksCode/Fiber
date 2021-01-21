import React from 'react';
import ReactDOM from 'react-dom';
import AppContextProvider from './contexts/AppContext'
import App from './App';

import './index.css';
import 'antd/dist/antd.css';

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

