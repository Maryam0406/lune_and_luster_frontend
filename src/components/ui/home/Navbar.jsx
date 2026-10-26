import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { whatsappLink } from '../../config';
import './Navbar.css';

const links = [
    { label: 'Home', to: '/', end: true },
    { label: 'Shop Now', to: '/shop' },
    { label: 'Contact Us', to: '/contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation();
    const isHome = pathname === '/';

    useEffect(() => {
        //defines a function named onScroll that checks if the user has scrolled more than 10 pixels down the page. If so, it sets the scrolled state to true; otherwise, it sets it to false.
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return() => window.removeEventListener('scroll', onScroll);
    }, []);
    //this effect closes the menu whenever the current route changes
    useEffect(() => setOpen(false), [pathname]);
    //This effect controls whether the main page can scroll while the mobile drawer is open.
    useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; }, [open]);

    //allows the navbar to have a dif style when it is over the hero image
    const overHero = isHome && !scrolled;

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''} ${overHero ? 'over-hero' : ''}`} id ="home">
            <div className="container nav">
                <button className="menu-btn" onClick={() => setOpen(true)} aria-label="Open Menu"><Menu size={22}/></button>
                <Link to="/" className="logo"><strong>LUNE &amp; LUSTER</strong><small>Jewellery &amp; Accessories</small></Link>
                <ul className="nav-links">
                    {links.map((l) => (<li key={l.to}><NavLink to={l.to} end={l.end}>{l.label}</NavLink></li>))}

                </ul>
                <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn btn-gold nav-cta">Enquire</a>
            </div>
            <div className={`overlay ${open ? 'show' : ''}`} onClick={() => setOpen(false)} />
            <aside className={`drawer ${open ? 'open' : ''}`} >
                <button className="close" onClick={() => setOpen(false)} aria-label="Close Menu"><X size={22}/></button>
                <nav>{links.map((l) => (<NavLink key={l.to} to={l.to} end={l.end}>{l.label}</NavLink>))}</nav>     
            </aside>
        </header>
    );
}