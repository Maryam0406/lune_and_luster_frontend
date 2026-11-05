import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { formatPrice } from '../../../utils/format';
import { useCart } from '../../../context/CartContext';
import './CartSummary.css';

export default function CartSummary() {
  const { subtotal, clear } = useCart();

  return (
    <aside className="csum">
      <h2 className="csum-title">Order Summary</h2>

      <div className="csum-row">
        <span>Subtotal</span>
        <strong>{formatPrice(subtotal)}</strong>
      </div>
      <p className="csum-note">Delivery is added at checkout</p>

      <Link to="/checkout" className="csum-order">
        Checkout <ArrowRight size={17} strokeWidth={1.5} />
      </Link>

      <Link to="/shop" className="csum-link">Continue Shopping</Link>
      <button className="csum-link" onClick={clear}>Clear Cart</button>
    </aside>
  );
}