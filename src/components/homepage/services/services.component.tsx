import GradientText from '../../shared/gradient-text/gradient-text.component';
import { IconUiDesign } from '../../icons/icon-set';

import './services.styles.scss';

const Services = () => {
  return (
    <section className='ss-wrapper'>
      <GradientText>What We Offer</GradientText>
      <div className='ss-cards-row'>
        <div className='service-card'>
          <div className='sc-icon'>
            <IconUiDesign size={45} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
