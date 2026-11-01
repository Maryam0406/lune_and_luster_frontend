import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, ShoppingBag } from 'lucide-react';
import { formatPrice } from '../../../utils/format';
import { defaultContent } from '../../../data/productContent';
import { useCart } from '../../../context/CartContext';
import './ProductInfo.css';

// Everything beside the picture
export default function ProductInfo({ product, colors, selected, onSelect }) {
  const { addItem } = useCart();
  const finish = colors.find((c) => c.key === selected).name;   // the chosen colour's name
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const description = product.description || defaultContent.short;

  const addToCart = () => {
    addItem(product.id, selected, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);   // "Added" goes back to "Add to Cart" after 2 seconds
  };

  return (
    <div className="pinfo">
      {product.isNew && <span className="pinfo-tag">New Arrival</span>}

      <h1 className="pinfo-title">{product.name}</h1>
      <div className="pinfo-price">{formatPrice(product.price)}</div>

      <p className="pinfo-desc">{description}</p>

      {/* colour: just two circles */}
      <div className="pinfo-group">
        <div className="pinfo-label">Colour: <em>{finish}</em></div>
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

      {/* quantity */}
      <div className="pinfo-group">
        <div className="pinfo-label">Quantity:</div>
        <div className="pinfo-qty">
          <button onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Less"><Minus size={15} /></button>
          <span>{qty}</span>
          <button onClick={() => setQty(Math.min(10, qty + 1))} aria-label="More"><Plus size={15} /></button>
        </div>
      </div>

      <button className="pinfo-cart" onClick={addToCart}>
        <ShoppingBag size={17} strokeWidth={1.5} /> {added ? 'Added to Cart' : 'Add to Cart'}
      </button>

      {added && <Link to="/cart" className="pinfo-viewcart">View Cart</Link>}
    </div>
  );
}