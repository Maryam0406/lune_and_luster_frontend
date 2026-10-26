import { ArrowRight } from 'lucide-react';
import Media from './Media';
import Reveal from './Reveal';
import categories from '../../data/categories';
import './About.css';

const ABOUT = {
  imageMain: './images/about/about-1.png',   
  imageSmall: './images/about/about-2.png',  
  lead: 'The story of',
  script: 'Lune & Luster',
  paragraphs: [
    'Lune & Luster was created from the belief that specific details make jewellery more meaningful than something general. A name, an initial, a birthstone, or a date can turn a beautiful piece into something deeply personal — a reminder of someone you love, a memory you treasure, or a moment you never want to forget. We wanted to bring that idea to life by creating jewellery that reflects the person wearing it and the stories behind it. Every detail is chosen by you, making each piece feel unique, thoughtful, and truly yours. At Lune & Luster, we believe jewellery should be more than something beautiful to wear. It should mean something.'
  ],
  cta: 'Make It Yours',
  href: '#make-it-yours',
};

const withBold = (text) =>
  text.split('**').map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part));

export default function About() {
  return (
    <section className="about" id="our-story">
      {/* ---- words ---- */}
      <Reveal className="about-copy">
        <h2 className="about-title">
          <span className="t-lead">{ABOUT.lead}</span>
          <span className="t-script">{ABOUT.script}</span>
        </h2>

        {ABOUT.paragraphs.map((p, i) => (
          <p key={i} className="about-p">{withBold(p)}</p>
        ))}

        <a href={ABOUT.href} className="about-link">{ABOUT.cta} <ArrowRight size={15} /></a>
      </Reveal>

      {/* ---- pictures ---- */}
      <div className="about-photo">
        <Media src={ABOUT.imageMain} alt="" tone={0} className="about-img-main" />
        <Media src={ABOUT.imageSmall} alt="" tone={2} className="about-img-small" />
        <div className="about-chip">
          <strong>{categories.length}</strong>
          <span>Collections<br />to personalise</span>
        </div>
      </div>
    </section>
  );
}