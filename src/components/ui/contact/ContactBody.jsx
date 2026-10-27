import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import './ContactBody.css';

export default function ContactBody() {
  return (
    <section className="section">
      <div className="container">
        <ContactForm />
        <div className="cbody-gap" />
        <ContactInfo />
      </div>
    </section>
  );
}