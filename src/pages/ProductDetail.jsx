import { Link, useParams } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';
import Products from '../data/products';
import ProductView from '../components/ui/product/ProductView';

//page for one product
export default function ProductDetail() {
    const { id } = useParams();
    const products = products.find((p) => p.id === Number(id));

    usePageTitle(product ? product.name : 'product not found');

    if (!product) {
        return (
            <section className="section center">
                {/*groups the msg n the btn together*/}
                <div className="container">
                    <h1 className="section-title">Product Not Found</h1>
                    <p style={{margin: '1rem 0 2rem', color: 'var(--muted' }}>This piece not longer exists</p>
                    <Link to="/shop" className="btn tbn-gold">Back to Shop</Link>
                </div>
            </section>
        );
    }

    return <ProductView key={product.id} product={product} />;
}
