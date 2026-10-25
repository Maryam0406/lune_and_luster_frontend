import { useEffect } from 'react';
//gives info about the current url
import { useLocation } from 'react-router-dom';

export default function ScrollManager() {
    const { pathname, hash } = useLocation();
    useEffect(() => {
        if (hash) {
            const t = setTimeout(() => document.querySelector(hash)?.scrollIntoView(), 60);
        return() => clearTimeout(t);
        }
        window.scrollTo({ top: 0, behaviour: 'instant'});
    }, [pathname, hash]);
    return null;
}