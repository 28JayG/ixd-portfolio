import React from 'react';
import { Route, Switch } from 'react-router';

import { AppRoutes } from './constants/routes';

import HomePage from './pages/homepage/homepage.component';

import './App.css';
import TopNav from './components/navigation/top-navigation/top-nav.component';

function App() {
  return (
    <>
      <TopNav />
      <Switch>
        <Route path={AppRoutes.HOME} exact component={HomePage} />
      </Switch>
    </>
  );
}

export default App;
