import { Link } from 'react-router-dom';
import ixdLogo from '../../../assets/ixd-logo.png';
import { AppRoutes } from '../../../constants/routes';

import './top-nav.styles.scss';

const TopNav = () => {
  return (
    <nav className='tn-wrapper'>
      <div className='tn'>
        <div className='brand-logo'>
          <img
            src={ixdLogo}
            alt='Interaction Design Stuios'
            className='img-logo'
          />
        </div>

        <ul className='tn-links'>
          <li>
            <a href={AppRoutes.SERVICES_SECTION}>Services</a>
          </li>
          <li>
            <a href={AppRoutes.PORTFOLIO_SECTION}>Portfolio</a>
          </li>
          <li>
            <Link to={AppRoutes.CONTACT_US}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopNav;
