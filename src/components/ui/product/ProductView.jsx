import { useState } from 'react';
import { finishes } from '../../../data/productContent';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';
import './ProductView.css';

export default function ProductView({ product, imagesOnRight = false }) {
    //the two colors with its pictures
    const colors = finishes.map((f) => ({ ...f, image: product.images?.[f.key] || }));

    const [selected, setSelected] = useState(colors[0].key);
    
    return (
        <section className={`pview ${imagesOnRight ? 'pview--flip' : ''}`}>
            <div className="pview-gallery">
                <ProductGallery name={product.name} color={colors} selected={selected} />
            </div>  

            <div className="pview-side">
                <div className="pview-sticky">
                    <ProductInfo product={product} colors={colors} selected={selected} onSelect={setSelected} />
                </div>
            </div>  
        </section>
    );
}