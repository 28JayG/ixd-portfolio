import { IconMenu2 } from '@tabler/icons';
import { Link } from 'react-router-dom';

import ixdLogo from '../../../assets/ixd-logo.png';
import { AppRoutes } from '../../../constants/routes';
import { useNavContext } from '../../../providers/navigation/navigation.provider';

import './top-nav.styles.scss';

const TopNav = () => {
  const { toggleSideNav } = useNavContext();

  return (
    <nav className='tn-wrapper'>
      <div className='tn'>
        <Link to={AppRoutes.HOME}>
          <div className='brand-logo'>
            <img
              src={ixdLogo}
              alt='Interaction Design Stuios'
              className='img-logo'
            />
          </div>
        </Link>

        <ul className='tn-links'>
          <li>
            <a href={`${AppRoutes.HOME}${AppRoutes.SERVICES_SECTION}`}>
              Services
            </a>
          </li>
          <li>
            <a href={`${AppRoutes.HOME}${AppRoutes.PORTFOLIO_SECTION}`}>
              Portfolio
            </a>
          </li>
          <li>
            <Link to={AppRoutes.CONTACT_US}>Contact Us</Link>
          </li>
        </ul>
        <IconMenu2 className='tn-menu' onClick={toggleSideNav} color='white' size='24' />
      </div>
    </nav>
  );
};

export default TopNav;
