import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { AppContextWithFirestore } from './contexts/AppContext'
import { DashboardLayout } from './layouts/DashboardLayout'

import { V1Page } from './pages/V1Page'
import { V2Page } from './pages/V2Page'
import { SignUpPage } from './pages/SignUpPage'
import { FlashLoanStream } from './pages/FlashLoanStream'

import './index.css';
import 'antd/dist/antd.css';



ReactDOM.render(
  <AppContextWithFirestore>
    <BrowserRouter>
      <DashboardLayout>
        <Switch>


          <Route path="/v2" exact component={V2Page} />
          <Route path="/v1" component={V1Page} />
          <Route path="/sign-up" component={SignUpPage} />
          <Route path="/stream" component={FlashLoanStream} />

          <Redirect from="*" to="/v2" />
        </Switch>
      </DashboardLayout>
    </BrowserRouter>
  </AppContextWithFirestore>,
  document.getElementById('root')
);

