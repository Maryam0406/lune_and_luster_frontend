import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { formatPrice } from '../../../utils/format';
import { whatsappLink } from '../../../config';
import { finishes } from '../../../data/productContent';
import { useCart } from '../../../context/CartContext';
import './CartSummary.css';

// The box on the right: total + the order button
export default function CartSummary() {
  const { lines, subtotal, clear } = useCart();

  // There is no online payment yet, so the order is sent as a WhatsApp message
  const order = () => {
    const rows = lines.map((l, n) => {
      const finish = finishes.find((f) => f.key === l.color)?.name || l.color;
      return `${n + 1}. ${l.product.name} | ${finish} | ${l.qty} x ${formatPrice(l.product.price)}`;
    });
    const text = [
      "Hi Lune & Luster! I'd like to place this order:",
      '',
      ...rows,
      '',
      `Total: ${formatPrice(subtotal)}`,
    ].join('\n');
    window.open(whatsappLink(text), '_blank', 'noopener');
  };

  return (
    <aside className="csum">
      <h2 className="csum-title">Order Summary</h2>

      <div className="csum-row">
        <span>Subtotal</span>
        <strong>{formatPrice(subtotal)}</strong>
      </div>
      <p className="csum-note">Delivery is confirmed with you on WhatsApp.</p>

      <button className="csum-order" onClick={order}>
        <MessageCircle size={17} strokeWidth={1.5} /> Order on WhatsApp
      </button>

      <Link to="/shop" className="csum-link">Continue Shopping</Link>
      <button className="csum-link" onClick={clear}>Clear Cart</button>
    </aside>
  );
}