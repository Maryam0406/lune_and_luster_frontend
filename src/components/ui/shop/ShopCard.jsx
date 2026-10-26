import Media from '@/components/ui/Media';
import Reveal from '@/components/ui/Reveal';
import { formatPrice } from '@/utils/format';
import './ShopCard.css';

// One product tile. Same box, same picture shape and same font as the
// category cards on the Home page.
export default function ShopCard({ product, index = 0 }) {
  return (
    <Reveal delay={(index % 8) * 60}>
      <article className="shop-card">
        <div className="shop-img">
          <Media src={product.image} alt={product.name} tone={index} className="shop-media" />
          {product.isNew && <span className="shop-tag">New</span>}
        </div>
        <div className="shop-info">
          <h3>{product.name}</h3>
          <p>{formatPrice(product.price)}</p>
        </div>
      </article>
    </Reveal>
  );
}