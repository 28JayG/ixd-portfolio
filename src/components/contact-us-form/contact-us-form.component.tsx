import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import { AppRoutes } from '../../constants/routes';
import { allServices } from '../../constants/services';
import { CONTACT_US_TEXT } from '../../constants/strings';
import { isChoiceSelected } from '../../utils/utils';
import { ServiceModal } from '../../modals/service.modal';
import { FirebaseFunctions } from '../../firebase/firebase-functions.utils';

import Choice from './choice/choice.component';
import FormInput from './form-input/form-input.component';
import CustomButton from '../shared/custom-button/custom-button.component';
import ServicesSelector from './services-selector/services-selector.component';

import './contact-us-form.styles.scss';

const ContactUsForm: FC = () => {
  const [enquiryDetails, setDetails] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    choice: [allServices[0]],
  });

  const handleSubmit = async (evt: FormEvent) => {
    evt.preventDefault();
    const { fullName, companyName, email, phoneNumber, choice } =
      enquiryDetails;
    console.log({ enquiryDetails });
    const mailData = {
      fullName,
      fromEmail: email,
      companyName,
      projectType: choice,
      phoneNumber,
    };

    const res = await FirebaseFunctions.sendEnquiryEmail(mailData);
    console.log(res);
  };

  const handleChoiceSelect = (service: ServiceModal) => {
    if (isChoiceSelected(service, enquiryDetails.choice)) {
      setDetails((prevValues) => ({
        ...prevValues,
        choice: prevValues.choice.filter((choice) => choice.id !== service.id),
      }));
      return;
    }

    setDetails((prevValues) => ({
      ...prevValues,
      choice: [...prevValues.choice, service],
    }));
  };

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
          <FormInput
            required
            id='fullName'
            onChange={handleInput}
            label='Full Name'
          />
          <FormInput
            required
            id={'companyName'}
            onChange={handleInput}
            label='Company Name'
          />
          <FormInput required id='email' onChange={handleInput} label='Email' />
          <FormInput
            required
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
              active={isChoiceSelected({ id, name }, enquiryDetails.choice)}
              key={id}
            >
              {name}
            </Choice>
          ))}
        </div>

        <ServicesSelector
          handleSelect={handleChoiceSelect}
          selectedChoices={enquiryDetails.choice}
        />

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
