import { FC } from 'react';
import { WorkModal } from '../../../../modals/work.modal';

import './work.styles.scss';

interface IWork {
  work: WorkModal;
}

const Work: FC<IWork> = ({ work }) => {
  const { imageUrl, description, heading, workType } = work;

  return (
    <div className='work-row'>
      <div className='wr-img-wrapper'>
        <img src={imageUrl} alt='' className='wr-img' />
      </div>

      <div className='wr-details'>
        <h6 className='wr-heading'>{heading}</h6>
        <span className='wr-type'>{workType}</span>
        <p className='wr-descripton'>{description}</p>
      </div>
    </div>
  );
};

export default Work;
