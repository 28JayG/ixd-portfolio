import { COMPANY_DESCRIPTION } from '../../constants/strings';
import ixdLogoBlue from '../../assets/ixd-logo-blue.png';

import SocialsRow from './socials-row/socials-row.component';
import { IconMail, IconPhoneCall } from '@tabler/icons';

import './footer.styles.scss';

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
              <a
                className='contact'
                href='mailto:interactiondesignstudio@gmail.com'
              >
                <span className='icon'>
                  <IconMail stroke={1} />{' '}
                </span>
                interactiondesignstudio@gmail.com
              </a>
            </li>
            <li>
              <a className='contact' href='tel:+91 89866 30684'>
                <span className='icon'>
                  <IconPhoneCall stroke={1} />
                </span>{' '}
                +91 89866 30684
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
