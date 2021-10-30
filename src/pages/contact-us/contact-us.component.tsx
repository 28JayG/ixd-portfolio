import ContactUsForm from '../../components/contact-us-form/contact-us-form.component';
import HeroBackground from '../../components/shared/hero-bg/hero-bg.component';

import './contact-us.styles.scss';

const ContactUs = () => {
  return (
    <section className='cu-wrapper'>
      <HeroBackground />
      <ContactUsForm />
    </section>
  );
};

export default ContactUs;
