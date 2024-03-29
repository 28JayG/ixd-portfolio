import { FC } from 'react';

import CTABanner from '../../components/cta-banner/cta-banner.component';
import Clients from '../../components/homepage/clients/clients.component';
import Hero from '../../components/homepage/hero/hero.component';
import Services from '../../components/homepage/services/services.component';
import Works from '../../components/homepage/works/works.component';

import './homepage.styles.scss';

const HomePage: FC = () => {
  return (
    <>
      <Hero />
      <Clients />
      <Services />
      <Works />
      <CTABanner />
    </>
  );
};

export default HomePage;
