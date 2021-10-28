import {
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconBrandBehance,
  IconBrandFacebook,
} from '@tabler/icons';

import { CompanySocials } from '../../../constants/routes';
import './socials-row.styles.scss';

const SocialsRow = () => (
  <div className='ftr-socials'>
    <a href={CompanySocials.IXD_INSTAGRAM} className='ftr-social'>
      <div className='fs-icon'>
        <IconBrandInstagram stroke={1} />
      </div>
      <span className='fs-text'>Instagram</span>
    </a>
    <a href={CompanySocials.IXD_FACEBOOK} className='ftr-social'>
      <div className='fs-icon'>
        <IconBrandFacebook stroke={1} />
      </div>
      <span className='fs-text'>facebook</span>
    </a>
    <a href={CompanySocials.IXD_WHATSAPP} className='ftr-social'>
      <div className='fs-icon'>
        <IconBrandWhatsapp stroke={1} />
      </div>
      <span className='fs-text'>whatsapp</span>
    </a>
    <a href={CompanySocials.IXD_BEHANCE} className='ftr-social'>
      <div className='fs-icon'>
        <IconBrandBehance stroke={1} />
      </div>
      <span className='fs-text'>behance</span>
    </a>
  </div>
);

export default SocialsRow;
