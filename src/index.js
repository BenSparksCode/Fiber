import React from 'react';
import ReactDOM from 'react-dom';

import AppContextProvider from './contexts/AppContext'
import { DashboardLayout } from './layouts/DashboardLayout'
import App from './App';

import './index.css';
import 'antd/dist/antd.css';

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <DashboardLayout>
        <App />
      </DashboardLayout>
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

