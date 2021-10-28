import { COMPANY_DESCRIPTION } from '../../constants/strings';
import ixdLogoBlue from '../../assets/ixd-logo-blue.png';

import './footer.styles.scss';
import SocialsRow from './socials-row/socials-row.component';

const Footer = () => (
  <section className='footer-wrapper'>
    <div className='ftr-grid'>
      <div className='ftr-grid-item'>
        <div className='ftr-branding'>
          <div className='ftr-row'>
            <div
              className='ixd-logo-blue'
              style={{ backgroundImage: `url(${ixdLogoBlue})` }}
            />
            <p className='ixd-text-gradient'>Interaction Design Studios</p>
          </div>
          <p className='ftr-description'>{COMPANY_DESCRIPTION}</p>
        </div>
      </div>

      <div className='ftr-grid-item'>
        <div className='ftr-lists'>
          <h6 className='ftr-list-head'>Services</h6>
          <ul className='ftr-list'>
            <li>Design Thinking</li>
            <li>Research</li>
            <li>User Interface Design</li>
            <li>Graphics / Illustrations</li>
            <li>Development</li>
          </ul>
        </div>
      </div>

      <div className='ftr-grid-item'>
        <div className='ftr-lists'>
          <h6 className='ftr-list-head'>Contact Us</h6>
          <ul className='ftr-list'>
            <li>
              <a href='mailto:interactiondesignstudio@gmail.com'>
                <div className='icon' /> interactiondesignstudio@gmail.com
              </a>
            </li>
            <li>
              <a href='tel:+91 89866 30684'>
                <div className='icon' /> +91 89866 30684
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <SocialsRow />
  </section>
);

export default Footer;
