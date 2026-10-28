import { Link, useParams } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';
import products from '../data/products';
import ProductView from '../components/ui/product/ProductView';

// page for one product:  /product/3
export default function ProductDetail() {
    const { id } = useParams();
    const product = products.find((p) => p.id === Number(id));

    usePageTitle(product ? product.name : 'Product not found');

    if (!product) {
        return (
            <section className="section center">
                <div className="container">
                    <h1 className="section-title">Product Not Found</h1>
                    <p style={{ margin: '1rem 0 2rem', color: 'var(--muted)' }}>This piece no longer exists.</p>
                    <Link to="/shop" className="btn btn-gold">Back to Shop</Link>
                </div>
            </section>
        );
    }

    return <ProductView key={product.id} product={product} />;
}