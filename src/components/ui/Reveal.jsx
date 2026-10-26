import { useEffect, useState, useRef } from 'react';

export default function Reveal({ children, delay = 0, className = ''}) {
    const ref = useRef(null);
    const [shown, setShown] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShown(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []); 
    
    return (
        <div ref={ref} className={`reveal ${shown ? 'in' : ''} ${className}`} style={{ '--delay': `${delay}ms`}}>
            { children}
        </div>
    );
}