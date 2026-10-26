import { ArrowRight } from 'lucide-react';
import Media from './Media';
import Reveal from './Reveal';
import { whatsappLink } from '../../../config';
import './GiftsSection.css';

export default function GiftsSection() {
  return (
    <section className="gift" id="gifts">
      <Reveal className="gift-text">
        <span className="eyebrow">Gifts with meaning</span>
        <h2 className="section-title">Thoughtful Gifts<br />for Every Occasion</h2>
        <p>From birthdays to anniversaries and graduations, find a personalised gift for the people who matter most.</p>
        <a href={whatsappLink("Hi Lune & Luster! I'm looking for a gift.")} target="_blank" rel="noreferrer" className="btn btn-gold">
          Find a Gift <ArrowRight size={16} />
        </a>
      </Reveal>
      <Media src="/images/gifts.png" alt="Gift-wrapped jewellery" className="gift-img" />
    </section>
  );
}