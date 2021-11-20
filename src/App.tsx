import { Route, Switch } from 'react-router';
import { ToastContainer } from 'react-toastify';

import { AppRoutes } from './constants/routes';
import { toastContainerConfig } from './utils/toasts.utils';

import HomePage from './pages/homepage/homepage.component';
import Footer from './components/footer/footer.component';
import TopNav from './components/navigation/top-navigation/top-nav.component';
import ContactUs from './pages/contact-us/contact-us.component';
import ScrollToTop from './components/shared/scrol-to-top/scroll-to-top.component';

import './App.scss';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ScrollToTop />
      <div className='page-container'>
        <div className='content-wrap'>
          <TopNav />
          <Switch>
            <Route path={AppRoutes.HOME} exact component={HomePage} />
            <Route path={AppRoutes.CONTACT_US} exact component={ContactUs} />
          </Switch>
        </div>
        <Footer />
      </div>
      <ToastContainer {...toastContainerConfig} />
    </>
  );
}

export default App;
