import { useState } from 'react';
import { finishes } from '../../../data/productContent';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';
import './ProductView.css';

export default function ProductView({ product, imagesOnRight = false }) {
    // the two colours, each with its own picture
    const colors = finishes.map((f) => ({
        ...f,
        image: f.key === 'silver' ? product.silverImage || product.image : product.image,
    }));

    const [selected, setSelected] = useState(colors[0].key);

    return (
        <section className={`pview ${imagesOnRight ? 'pview--flip' : ''}`}>
            <div className="pview-gallery">
                <ProductGallery name={product.name} colors={colors} selected={selected} />
            </div>

            <div className="pview-side">
                <div className="pview-sticky">
                    <ProductInfo product={product} colors={colors} selected={selected} onSelect={setSelected} />
                </div>
            </div>
        </section>
    );
}