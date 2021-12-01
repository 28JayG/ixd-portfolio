import { IconChevronUp } from '@tabler/icons';
import { useEffect, useState } from 'react';
import './scroll-to-top-button.styles.scss';

const ScrollToTopButton = () => {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', (evt) => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => window.removeEventListener('scroll', (evt) => {});
  });

  const moveToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div onClick={moveToTop} className={`stt ${show ? 'show' : ''}`}>
      <IconChevronUp color='#6595f7' size={24} />
    </div>
  );
};

export default ScrollToTopButton;
