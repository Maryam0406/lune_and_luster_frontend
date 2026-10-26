import pillars from '../../data/pillars';
import Media from './Media';
import Reveal from './Reveal';
import './Pillars.css';

export default function Pillars() {
  return (
    <section className="pillars" id="pillars">
      {pillars.map((p, i) => (
        <Reveal key={p.id} delay={(i % 2) * 120} className="tile">
          <Media src={p.image} alt={p.word} tone={i} className="tile-img" />
          <div className="tile-text">
            <span className="tile-num">{String(i + 1).padStart(2, '0')}</span>
            <h2>
              {p.word}
              <span>.</span>
            </h2>
            <a href={p.href} className="tile-btn">{p.cta}</a>
          </div>
        </Reveal>
      ))}
    </section>
  );
}