import { useState } from 'react';
import { Bookmark } from 'lucide-react';
import { formatPrice } from '../../../utils/format';
import { whatsappLink } from '../../../config';
import { defaultContent } from '../../../data/productContent';
import Accordion from './Accordion';
import './ProductInfo.css';

// Everything beside the picture: name, price, colour, button and the text sections
export default function ProductInfo({ product, colors, selected, onSelect }) {
  const content = { ...defaultContent, ...(product.content || {}) };
  const finish = colors.find((c) => c.key === selected).name;   // the chosen colour's name
  const [saved, setSaved] = useState(false);

  // Cart comes later. For now the button opens WhatsApp with the choices already written.
  const addToCart = () => {
    const lines = [
      `Hi Lune & Luster! I'd like to order: ${product.name}`,
      `Colour: ${finish}`,
    ];
    window.open(whatsappLink(lines.join('\n')), '_blank', 'noopener');
  };

  return (
    <div className="pinfo">
      <h1 className="pinfo-title">{product.name}</h1>

      <div className="pinfo-price">
        <span>{formatPrice(product.price)}</span>
        <button onClick={() => setSaved(!saved)} aria-label="Save for later" className={saved ? 'on' : ''}>
          <Bookmark size={17} strokeWidth={1.5} fill={saved ? 'currentColor' : 'none'} />
        </button>
      </div>

      <hr className="pinfo-rule" />

      {/* the two colours: just a circle each */}
      <div className="pinfo-group">
        <div className="pinfo-label">Colour <em>{finish}</em></div>
        <div className="pinfo-swatches">
          {colors.map((c) => (
            <button
              key={c.key}
              className={c.key === selected ? 'on' : ''}
              onClick={() => onSelect(c.key)}
              aria-label={c.name}
              title={c.name}
              style={{ backgroundColor: c.color }}
            />
          ))}
        </div>
      </div>

      <button className="pinfo-cart" onClick={addToCart}>Add to Cart</button>

      {/* the text sections */}
      <div className="pinfo-acc">
        <Accordion title="Product details" defaultOpen>
          <span className="acc-link">{content.highlight}</span>
          <p>{content.description}</p>
          <span className="acc-strong">Care instructions</span>
          {content.care.map((line) => <p key={line}>{line}</p>)}
          <span className="acc-strong">Material</span>
          <p>{content.material}</p>
        </Accordion>
        <Accordion title="Sizing & fit"><p>{content.sizing}</p></Accordion>
        <Accordion title="Return policy"><p>{content.returns}</p></Accordion>
        <Accordion title="Shipping"><p>{content.shipping}</p></Accordion>
      </div>
    </div>
  );
}