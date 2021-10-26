import { FC } from 'react';
import { convertHexToRGB } from '../../../../utils/utils';
import {
  IconGraphicDesign,
  IconUiDesign,
  IconWebProgramming,
} from '../../../icons/icon-set';
import './service-card.styles.scss';

interface IServiceCard {
  color: string;
  id: number;
  points: Array<string>;
  title: string;
}

const ServiceCard: FC<IServiceCard> = ({ color, points, title, id }) => {
  const chooseIcon = () => {
    switch (id) {
      case 0:
        return (
          <IconUiDesign style={{ marginLeft: `10px` }} fill={color} size={45} />
        );
      case 1:
        return <IconGraphicDesign fill={color} size={45} />;
      case 2:
        return <IconWebProgramming fill={color} size={45} />;
    }
  };

  return (
    <div className='service-card'>
      <div
        className='sc-icon'
        style={{ backgroundColor: `rgba(${convertHexToRGB(color)}, 0.3)` }}
      >
        {chooseIcon()}
      </div>

      <h6 className='sc-title'>{title}</h6>

      <ul className='sc-points'>
        {points.map((point) => (
          <li className='sc-point' key={point}>
            {point}
          </li>
        ))}
      </ul>

      <div className='border-line' style={{ backgroundColor: color }} />
    </div>
  );
};

export default ServiceCard;
