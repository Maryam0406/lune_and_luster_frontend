import { useState } from 'react';
import Media from '../home/Media';
import './ProductGallery.css';

export default function ProductGallery({ name, colors, selected }) {
    const [hover, setHover] = useState(false);
    
    const selectedIndex = Math.max(0, colors.findIndex((c) => c.key === selected));
    const shown = hover ? (selectedIndex + 1) % colors.length : selectedIndex;

    return (
            <button
                className="pgal"
                onPointerEnter={(e) => e.pointerType === 'mouse' && setHover(true)}
                onPointerLeave={() => setHover(false)}
            >
                {colors.map((c, i) => (
                    <div key={c.key} className={`pgal-layer ${i === shown ? 'on' : ''}`}>
                        <Media src={c.image} alt={`${name} in ${c.name}`} tone={i} className="pgal-media" />
                    </div>
                ))}  
                <span className="pgal-tag">{colors[shown].name}</span>  
            </button>    

    );
}