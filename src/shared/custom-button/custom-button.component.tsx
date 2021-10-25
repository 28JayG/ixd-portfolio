import { FC } from 'react';

import './custom-button.styles.scss';

type buttonType = 'primary' | 'secondary' | 'gradient';

interface CustomButtonProps {
  type?: buttonType;
  [x: string]: any;
}

const CustomButton: FC<CustomButtonProps> = ({
  children,
  type = 'primary',
  ...otherButtonProps
}) => {
  return (
    <button {...otherButtonProps} className={`cstm-btn ${type}`}>
      {children}
    </button>
  );
};

export default CustomButton;
