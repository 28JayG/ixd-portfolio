import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import { AppRoutes } from '../../constants/routes';
import { allServices } from '../../constants/services';
import { CONTACT_US_TEXT } from '../../constants/strings';
import { ServiceModal } from '../../modals/service.modal';

import Choice from './choice/choice.component';
import FormInput from './form-input/form-input.component';

import './contact-us-form.styles.scss';
import CustomButton from '../shared/custom-button/custom-button.component';

const ContactUsForm: FC = () => {
  const [enquiryDetails, setDetails] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    choice: allServices[0],
  });

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    console.log({ enquiryDetails });
  };

  const handleChoiceSelect = (service: ServiceModal) =>
    setDetails((prevValues) => ({ ...prevValues, choice: service }));

  const handleInput = (evt: ChangeEvent) => {
    const { id, value } = evt.target as HTMLInputElement;

    setDetails((prevValues) => ({ ...prevValues, [id]: value }));
  };

  return (
    <div className='cu-form'>
      <form onSubmit={handleSubmit}>
        <h5 className='cuf-heading'>Let’s Talk</h5>
        <p className='cuf-text'>{CONTACT_US_TEXT}</p>

        <div className='cu-input-grid'>
          <FormInput id='fullName' onChange={handleInput} label='Full Name' />
          <FormInput
            id={'companyName'}
            onChange={handleInput}
            label='Company Name'
          />
          <FormInput id='email' onChange={handleInput} label='Email' />
          <FormInput
            id='phoneNumber'
            onChange={handleInput}
            label='Phone Number'
          />
        </div>

        <p className='cu-question'>
          What kind of creative work do you need help with?
          <span className='cu-subtext'>
            See our{' '}
            <Link
              className='cu-st-link'
              to={`${AppRoutes.HOME}${AppRoutes.SERVICES_SECTION}`}
            >
              services
            </Link>
          </span>
        </p>

        <div className='cu-choices-grid'>
          {allServices.map(({ id, name }) => (
            <Choice
              onSelected={() => handleChoiceSelect({ id, name })}
              active={enquiryDetails.choice.id === id}
              key={id}
            >
              {name}
            </Choice>
          ))}
        </div>

        <div className='cu-submit'>
          <CustomButton buttonType='gradient' type='submit'>
            submit
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
