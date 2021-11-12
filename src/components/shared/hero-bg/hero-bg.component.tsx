import ux from '../../../assets/svg/UX.svg';
import xui from '../../../assets/svg/X-UI.svg';

import './hero-bg.styles.scss';

const HeroBackground = () => (
  <div className='ixd-hero-bg'>
    <div className='ht-ux'>
      <img src={ux} alt='' className='ht-img' />
    </div>

    <div className='ht-x-ui'>
      <img src={xui} alt='' className='ht-img' />
    </div>
  </div>
);

export default HeroBackground;
