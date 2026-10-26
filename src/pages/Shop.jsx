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

export default function Shop() {
    const [params, setparams] = useSearchParams();
    const categoryId = Number(params.get('category')) || 0;

    const category = categories.find((c) => c.id === categoryId);
    usePageTitle(category ? category.name : 'Shop Now');

    const list = useMemo(() => {
        const items = categoryId ?products.filter((p) => p.categoryId === categoryId) : [...products];
        return items.sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt));
    }, [categoryId]);

    return (
        <>
            <PageHeader
                eyebrow="Shop now"
                title={category ? category.name : "All Jewellery"}
                subtitle="Browse every collection and make each piece yours"
            />

            <section className="section shop">
                <div className="shop-container">
                    {list.length ? (
                        <div className="shop-grid">
                            {list.map((p, i) => <ShopCard key={p.id} product={p} index={i} />)}                      
                        </div>
                    ) : (
                        <p className="shop-empty">Nothing here yet. New pieces are on their way</p>
                    )}  
                </div>      
            </section>    
        </>
    );
}