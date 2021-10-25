import { FC } from 'react';

import { COMPANY_DESCRIPTION } from '../../constants/strings';
import cursor from '../../assets/cursor.png';
import ux from '../../assets/svg/UX.svg';
import xui from '../../assets/svg/X-UI.svg';

import CustomButton from '../../components/shared/custom-button/custom-button.component';

import './homepage.styles.scss';

const HomePage: FC = () => {
  return (
    <>
      <section className='ixd-hero'>
        <div className='ixd-hero-bg'>
          <div className='ht-ux'>
            <img src={ux} alt='' />
          </div>

          <div className='ht-x-ui'>
            <img src={xui} alt='' />
          </div>
        </div>

        <h1 className='hero-title'>
          We{' '}
          <div className='ht-border'>
            <div className='corner' />
            <div className='corner' />
            <div className='corner' />
            <div className='corner' />
            <img
              src={cursor}
              alt=''
              width='20'
              height='23'
              className='ht-cursor'
            />
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
