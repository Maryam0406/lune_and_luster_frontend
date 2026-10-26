import categories from '../../../data/categories';
import Media from './Media';
import Reveal from './Reveal';
import { whatsappLink } from '../../../config';
import './Categories.css';

export default function Categories() {
  return (
    <section className="section" id="categories">
      <div className="container">
        <Reveal className="center">
          <span className="eyebrow">Shop by category</span>
          <h2 className="section-title">Find What Speaks to You</h2>
        </Reveal>

        <div className="cat-row">
          {categories.map((c, i) => (
            <Reveal key={c.id} delay={i * 80}>
              <a
                href={whatsappLink(`Hi Lune & Luster! I'm interested in ${c.name}.`)}
                target="_blank"
                rel="noreferrer"
                className="cat-card"
              >
                <Media src={c.image} alt={c.name} tone={i} className="cat-img" />
                <span>{c.name}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}