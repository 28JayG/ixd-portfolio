import GradientText from '../../shared/gradient-text/gradient-text.component';
import './works.styles.scss';

const Works = () => {
  return (
    <section className='w-wrapper'>
      <GradientText>Our Work</GradientText>

      <div className='works-grid'>
        <Work />
      </div>
    </section>
  );
};

export default Works;
