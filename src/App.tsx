import React from 'react';
import { Route, Switch } from 'react-router';

import { AppRoutes } from './constants/routes';

import HomePage from './pages/homepage/homepage.component';

import './App.css';

function App() {
  return (
    <Switch>
      <Route path={AppRoutes.HOME} exact component={HomePage} />
    </Switch>
  );
}

export default App;
