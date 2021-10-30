import { FC } from 'react';

import './form-input.styles.scss';

interface IFormInput {
  label: string;
  [x: string]: any;
}

const FormInput: FC<IFormInput> = ({ label, ...inputProps }) => {
  return (
    <div className='fi-input-wrap'>
      <label className='fi-label'>{label}</label>
      <input className='fi-input' {...inputProps} />
    </div>
  );
};

export default FormInput;
