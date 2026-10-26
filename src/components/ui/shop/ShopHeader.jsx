import './ShopHeader.css';

// The soft banner with the page title at the top of the Shop page
export default function ShopHeader({ title }) {
  return (
    <header className="shop-head">
      <div className="container">
        <span className="eyebrow">Shop now</span>
        <h1>{title}</h1>
        <p>Browse every collection and make each piece yours.</p>
      </div>
    </header>
  );
}