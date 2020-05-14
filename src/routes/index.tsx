import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';

import AppProvider from '../hooks';

const routes: React.FC = () => (
  <Switch>
    <AppProvider>
      <Route path="/signin" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
    </AppProvider>
  </Switch>
);

export default routes;
