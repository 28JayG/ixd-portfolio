import ixdLogo from '../../../assets/ixd-logo.png';

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
          <li>Services</li>
          <li>Portfolio</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
};

export default TopNav;
