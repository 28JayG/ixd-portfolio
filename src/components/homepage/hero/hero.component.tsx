import { COMPANY_DESCRIPTION } from '../../../constants/strings';

import HeroBackground from '../../shared/hero-bg/hero-bg.component';
import CustomButton from '../../shared/custom-button/custom-button.component';

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
        <img src={cursor} alt='' width='20' height='23' className='ht-cursor' />
        Craft
      </div>
      <br /> Digital Experience
    </h1>

    <p className='hero-description'>{COMPANY_DESCRIPTION}</p>

    <div style={{ zIndex: 1 }}>
      <CustomButton type='secondary'>See Our Portfolio</CustomButton>
      <CustomButton>Become our client</CustomButton>
    </div>
  </section>
);

export default Hero;
