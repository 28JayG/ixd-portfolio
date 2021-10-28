import { Route, Switch } from 'react-router';

import { AppRoutes } from './constants/routes';

import HomePage from './pages/homepage/homepage.component';
import Footer from './components/footer/footer.component';
import TopNav from './components/navigation/top-navigation/top-nav.component';

import './App.scss';

function App() {
  return (
    <div className='page-container'>
      <div className='content-wrap'>
        <TopNav />
        <Switch>
          <Route path={AppRoutes.HOME} exact component={HomePage} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
