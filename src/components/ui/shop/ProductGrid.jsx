import ShopCard from './ShopCard';
import './ProductGrid.css';

// The grid of products (or a friendly message when a category is empty)
export default function ProductGrid({ products }) {
  return (
    <section className="section shop-section">
      <div className="shop-container">
        {products.length ? (
          <div className="shop-grid">
            {products.map((p, i) => <ShopCard key={p.id} product={p} index={i} />)}
          </div>
        ) : (
          <p className="shop-empty">Nothing here yet. New pieces are on their way.</p>
        )}
      </div>
    </section>
  );
}