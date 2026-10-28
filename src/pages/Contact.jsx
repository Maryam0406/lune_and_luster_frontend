import usePageTitle from '../hooks/usePageTitle';
import ContactHero from '../components/ui/contact/ContactHero';
import ContactBody from '../components/ui/contact/ContactBody';

export default function Contact() {
  usePageTitle('Contact Us');
  return (
    <>
      <ContactHero />
      <ContactBody />
    </>
  );
}