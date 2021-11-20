import { IconBriefcase, IconPhone, IconX } from '@tabler/icons';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

import { AppRoutes, ExternalLinks } from '../../../constants/routes';
import { useNavContext } from '../../../providers/navigation/navigation.provider';
import { DRAWER_TEXT } from '../../../constants/strings';

import { IconHome, IconServices } from '../../icons/icon-set';

import './drawer-nav.styles.scss';

const iconSze = 14;

const DrawerNav: FC = () => {
  const location = useLocation();
  const { toggleSideNav, sideNavOpen } = useNavContext();

  const isActive = (routeLink: string, isSection: boolean = false) => {
    if (isSection) {
      return location.hash === routeLink;
    } else {
      if (location.hash) {
        return false;
      }
      return location.pathname === routeLink;
    }
  };

  return (
    <div className={`dn-wrapper ${sideNavOpen ? 'slide-in' : ''}`}>
      <IconX className='dn-close' onClick={toggleSideNav} />
      <ul className='dn-links'>
        <li>
          <a
            onClick={toggleSideNav}
            className={`dn-nav-link ${
              isActive(AppRoutes.HOME) ? 'active' : ''
            }`}
            href={AppRoutes.HOME}
          >
            <IconHome className='dnl-icon' stroke={0.3} size={iconSze} /> Home
          </a>
        </li>

        <li>
          <a
            onClick={toggleSideNav}
            className={`dn-nav-link ${
              isActive(AppRoutes.SERVICES_SECTION, true) ? 'active' : ''
            }`}
            href={`${AppRoutes.HOME}${AppRoutes.SERVICES_SECTION}`}
          >
            <IconServices stroke={0.3} size={iconSze} className='dnl-icon' />
            Services
          </a>
        </li>

        <li>
          <a
            onClick={toggleSideNav}
            className={`dn-nav-link ${
              isActive(AppRoutes.PORTFOLIO_SECTION, true) ? 'active' : ''
            }`}
            href={`${AppRoutes.HOME}${AppRoutes.PORTFOLIO_SECTION}`}
          >
            <IconBriefcase className='dnl-icon' size={iconSze} />
            Portfolio
          </a>
        </li>

        <li>
          <Link
            onClick={toggleSideNav}
            className={`dn-nav-link ${
              isActive(AppRoutes.CONTACT_US) ? 'active' : ''
            }`}
            to={AppRoutes.CONTACT_US}
          >
            <IconPhone size={iconSze} className='dnl-icon' />
            Contact Us
          </Link>
        </li>
      </ul>

      <div className='dn-reach-out'>
        <div className='dn-img-wrap'>
          <img src={ExternalLinks.OPENING_ENVELOPE} alt='' className='dn-img' />
        </div>
        <p className='dn-text'>{DRAWER_TEXT}</p>
        <Link
          onClick={toggleSideNav}
          className='dn-ro-link'
          to={AppRoutes.CONTACT_US}
        >
          React Out
        </Link>
      </div>
    </div>
  );
};
export default DrawerNav;
