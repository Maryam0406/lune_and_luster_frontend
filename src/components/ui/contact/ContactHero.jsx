import Media from '../Media';
import Reveal from '../Reveal';
import './ContactHero.css';

const HERO_IMAGE = '/images/contact-hero.jpg';

export default function ContactHero() {
  return (
    <section className="chero">
      {/* the huge picture: at least half of the screen height */}
      <Media src={HERO_IMAGE} alt="Lune & Luster jewellery" className="chero-img" />

      {/* the "Let's Talk" card that overlaps the bottom of the picture */}
      <div className="container">
        <Reveal className="chero-card">
          <span className="chero-eyebrow">Let&rsquo;s connect</span>

          <h1 className="chero-title">
            Let&rsquo;s Talk
          </h1>

          <p>
            We&rsquo;d love to hear from you. Whether you have a question, need help choosing
            a gift or just want to say hello, our team is here to help.
          </p>
          <span className="chero-line" />
        </Reveal>
      </div>
    </section>
  );
}