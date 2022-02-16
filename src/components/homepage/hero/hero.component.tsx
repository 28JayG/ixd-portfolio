import { COMPANY_DESCRIPTION } from '../../../constants/strings';

import { Link } from 'react-router-dom';
import HeroBackground from '../../shared/hero-bg/hero-bg.component';
import CustomButton from '../../shared/custom-button/custom-button.component';

import { AppRoutes } from '../../../constants/routes';
import cursor from '../../../assets/cursor.png';

import './hero.styles.scss';

const Hero = () => (
  <section className='ixd-hero'>
    <HeroBackground />

    <h1 className='hero-title'>
      We{' '}
      <div className='ht-border'>
        <div className='corner' />
        <div className='corner' />
        <div className='corner' />
        <div className='corner' />
        <img src={cursor} alt='' className='ht-cursor' />
        Craft
      </div>
      <br /> Digital Experience
    </h1>

    <p className='hero-description'>{COMPANY_DESCRIPTION}</p>

    <div className='h-btn-row'>
      <CustomButton buttonType='secondary'>
        <a href={`${AppRoutes.HOME}${AppRoutes.PORTFOLIO_SECTION}`}>
          See Our Portfolio
        </a>
      </CustomButton>
      <div className='br-spacer'></div>
      <Link to={AppRoutes.CONTACT_US}>
        <CustomButton>Become our client</CustomButton>
      </Link>
    </div>
  </section>
);

export default Hero;
