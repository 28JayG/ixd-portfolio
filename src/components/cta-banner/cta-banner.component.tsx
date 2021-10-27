import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes, ExternalLinks } from '../../constants/routes';

import {
  CTA_BANNER_HEADING_1,
  CTA_BANNER_HEADING_2,
  CTA_BANNER_TEXT,
} from '../../constants/strings';

import CustomButton from '../shared/custom-button/custom-button.component';

import './cta-banner.styles.scss';

const CTABanner: FC = () => {
  return (
    <div className='ctab-wrapper'>
      <div className='cta-column'>
        <h5 className='cta-head'>
          {CTA_BANNER_HEADING_1}
          <br />
          {CTA_BANNER_HEADING_2}
        </h5>
        <p className='cta-text'>{CTA_BANNER_TEXT}</p>
        <Link to={AppRoutes.CONTACT_US}>
          <CustomButton>get in touch</CustomButton>
        </Link>
      </div>
      <div className='cta-img-wrapper'>
        <img className='cta-img' src={ExternalLinks.OPENING_ENVELOPE} alt='' />
        <div className='img-ellipse'/>
      </div>
    </div>
  );
};

export default CTABanner;
