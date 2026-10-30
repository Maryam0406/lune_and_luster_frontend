import { Link } from 'react-router-dom';
import { Minus, Plus, X } from 'lucide-react';
import { formatPrice } from '../../../utils/format';
import { finishes } from '../../../data/productContent';
import { useCart } from '../../../context/CartContext';
import './CartItem.css';

//One row in the cart: picture, name, colour, quantity, price, remove
export default function CartItem({ line }) {
  const { setQty, removeItem } = useCart();
  const { product, color, qty } = line;

  const finish = finishes.find((f) => f.key === color)?.name || color;
  const image = color === 'silver' ? product.silverImage || product.image : product.image;

  return (
    <article className="citem">
      <Link to={`/product/${product.id}`} className="citem-img">
        <img src={image} alt={product.name} />
      </Link>

      <div className="citem-body">
        <Link to={`/product/${product.id}`} className="citem-name">{product.name}</Link>
        <span className="citem-meta">Colour: {finish}</span>
        <span className="citem-meta">{formatPrice(product.price)}</span>

        <div className="citem-qty">
          <button onClick={() => setQty(product.id, color, qty - 1)} aria-label="Less"><Minus size={14} /></button>
          <span>{qty}</span>
          <button onClick={() => setQty(product.id, color, qty + 1)} aria-label="More"><Plus size={14} /></button>
        </div>
      </div>

      <div className="citem-side">
        <button className="citem-remove" onClick={() => removeItem(product.id, color)} aria-label="Remove"><X size={18} strokeWidth={1.4} /></button>
        <span className="citem-total">{formatPrice(product.price * qty)}</span>
      </div>
    </article>
  );
}