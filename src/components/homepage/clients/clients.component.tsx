import { useClinetsContext } from '../../../providers/clients/clients.provider';
import GradientText from '../../shared/gradient-text/gradient-text.component';

import './clients.styles.scss';

const Clients = () => {
  const { clients, loading } = useClinetsContext();

  return (
    <section className='cs-wrapper'>
      <GradientText>Our Clients</GradientText>

      <div className='clinets-wrapper'>
        {!loading &&
          clients.map((client) => (
            <div className='cs-client' key={client.id}></div>
          ))}
      </div>
    </section>
  );
};

export default Clients;
