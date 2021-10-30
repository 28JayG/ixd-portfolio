import { IconCheck } from '@tabler/icons';
import { FC } from 'react';

import './choice.styles.scss';

interface IChoice {
  onSelected: () => void;
  active?: boolean;
}

const Choice: FC<IChoice> = ({ active = false, onSelected, children }) => {
  return (
    <div onClick={onSelected} className={`cu-choice ${active ? 'active' : ''}`}>
      <div className={`cuc-tick ${active ? 'active' : ''}`}>
        <IconCheck size={15} stroke={3} />
      </div>
      {children}
    </div>
  );
};

export default Choice;
