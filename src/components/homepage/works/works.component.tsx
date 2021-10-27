import { useWorksContext } from '../../../providers/work/works.provider';

import Work from './work/work.component';
import GradientText from '../../shared/gradient-text/gradient-text.component';

import './works.styles.scss';

const Works = () => {
  const { loading, works } = useWorksContext();

  return (
    <section className='w-wrapper'>
      <GradientText>Our Work</GradientText>

      <div className='works-grid'>
        {!loading && works.map((work) => <Work key={work.id} work={work} />)}
      </div>
    </section>
  );
};

export default Works;
