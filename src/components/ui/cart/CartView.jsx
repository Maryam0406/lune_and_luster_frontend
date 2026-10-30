import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../../context/CartContext';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import './CartView.css';

export default function CartView() {
    const { lines, count } = useCart();

    //checking if cart is empty
    if (lines.length === 0) {
        return (
            <section className="cview cview-empty">
                <ShoppingBag size={40} strokeWidth={1} />
                <h1 className="cview-title">Your cart is empty</h1>
                <p>Pieces you add will wait for you here</p>
                <Link to="/shop" className="btn btn-gold">Continue Shopping</Link>
            </section>
        );
    }

    return (
        <section className="cview">
            <div className="container">
                <h1 className="cview-title">Your Cart</h1>
                <p className="cview-count">{count} {count === 1 ? 'item' : 'items'}</p>

                <div className="cview-grid">
                    <div className="cview-list">
                        {lines.map((line) => (
                            <CartItem key={`${line.id}-${line.color}`} line={line} />
                        ))}
                    </div>
                    <CartSummary />
                </div>
            </div>
        </section>
    );



}