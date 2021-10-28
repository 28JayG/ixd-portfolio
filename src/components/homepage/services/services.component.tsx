import { AppRoutes } from '../../../constants/routes';
import { services } from '../../../data/services';
import GradientText from '../../shared/gradient-text/gradient-text.component';
import ServiceCard from './service-card/service-card.component';

import './services.styles.scss';

const Services = () => {
  return (
    <section id={AppRoutes.SERVICES_SECTION.split('#')[1]} className='ss-wrapper'>
      <GradientText>What We Offer</GradientText>
      <div className='ss-cards-row'>
        {services.map((service) => (
          <ServiceCard
            id={service.id}
            color={service.color}
            points={service.points}
            title={service.title}
            key={service.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
