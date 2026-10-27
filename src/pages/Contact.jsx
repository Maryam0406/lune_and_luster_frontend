import usePageTitle from '../hooks/usePageTitle';
import ContactHero from '../components/ui/contact/ContactHero';

export default function Contact() {
    usePageTitle('Contact Us');
    return (
        <>
            <ContactHero />
            <ContactBody />
        </>
    );
}