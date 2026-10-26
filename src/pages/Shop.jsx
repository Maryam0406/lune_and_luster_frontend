import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import usePageTitle from 'hooks/usePageTitle';
import products from 'data/products';
import categories from 'data/categories';
import { formatPrice } from 'utils/format';
import PageHeader from 'components/ui/PageHeader';
import Media from 'components/ui/Media';
import Reveal from 'components/ui/Reveal';
import './Shop.css';

const SORTS = [
    { value: 'newest', label: 'Newest' },
    { value: 'price-asc', label: 'Price: Low to High'},
    { value: 'price-desc', label: 'Price: High to Low' }
];

// creates one product card
function ShopCard({ product, index }) {
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