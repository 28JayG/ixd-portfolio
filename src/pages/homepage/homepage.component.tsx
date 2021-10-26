import { FC } from 'react';

import Clients from '../../components/homepage/clients/clients.component';
import Hero from '../../components/homepage/hero/hero.component';
import Services from '../../components/homepage/services/services.component';

import './homepage.styles.scss';

const HomePage: FC = () => {
  return (
    <>
      <Hero />
      <Clients />
      <Services />
    </>
  );
};

export default HomePage;
