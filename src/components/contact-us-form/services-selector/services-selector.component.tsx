import { FC, useState } from 'react';
import { IconChevronDown, IconChevronUp } from '@tabler/icons';

import { allServices } from '../../../constants/services';
import { SELECT_SERVICE_TEXT } from '../../../constants/strings';
import { ServiceModal } from '../../../modals/service.modal';
import { isChoiceSelected } from '../../../utils/utils';

import Choice from '../choice/choice.component';

import './services-selector.styles.scss';

interface IServiceSelector {
  handleSelect: (x: any) => void;
  selectedChoices: ServiceModal[];
}

const ServicesSelector: FC<IServiceSelector> = ({
  handleSelect,
  selectedChoices,
}) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const onSelected = (choice: ServiceModal) => handleSelect(choice);

  const toggleOptions = () => setShowOptions(!showOptions);

  return (
    <div className='ss-container'>
      <div className='ss-btn' onClick={toggleOptions}>
        {selectedChoices.length <=0 ? SELECT_SERVICE_TEXT: `${selectedChoices.length} selected`}
        {showOptions ? <IconChevronUp /> : <IconChevronDown />}
      </div>
      {showOptions && (
        <div className='ss-list'>
          {allServices.map((service) => (
            <Choice
              onSelected={() => onSelected(service)}
              active={isChoiceSelected(service, selectedChoices)}
              key={service.id}
            >
              {service.name}
            </Choice>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServicesSelector;
