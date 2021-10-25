import { FC } from 'react';
import { COMPANY_DESCRIPTION } from '../../constants/strings';
import CustomButton from '../../components/shared/custom-button/custom-button.component';

import './homepage.styles.scss';

const HomePage: FC = () => {
  return (
    <>
      <section className='ixd-hero'>
        <div className='ixd-hero-bg' />
        <h1 className='hero-title'>
          We{' '}
          <div className='ht-border'>
            <div className='corner' />
            <div className='corner' />
            <div className='corner' />
            <div className='corner' />
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
    </>
  );
};

export default HomePage;
