import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

import AppContextProvider from './contexts/AppContext'
import { DashboardLayout } from './layouts/DashboardLayout'

import {Settings} from './pages/Settings'
import {FlashLoanStream} from './pages/FlashLoanStream'
import App from './App';

import './index.css';
import 'antd/dist/antd.css';

ReactDOM.render(
  <AppContextProvider>
    <BrowserRouter>
      <DashboardLayout>
        <Switch>

          <Route path="/" exact component={App}/>
          <Route path="/stream" component={FlashLoanStream} />
          <Route path="/settings" component={Settings} />
          
          <Redirect from="*" to="/" />
        </Switch>
      </DashboardLayout>
    </BrowserRouter>
  </AppContextProvider>,
  document.getElementById('root')
);

