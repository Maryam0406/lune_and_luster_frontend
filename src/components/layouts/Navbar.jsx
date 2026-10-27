import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import categories from '../../data/categories';
import { whatsappLink } from '../../config';
import './Navbar.css';

const links = [
  { label: 'Home', to: '/', end: true },
  { label: 'Shop Now', to: '/shop', menu: true },   // this one gets the dropdown
  { label: 'Contact Us', to: '/contact' },
];

// The 9 items in the dropdown: "All" + your 8 categories
const shopMenu = [
  { label: 'All', to: '/shop', id: 0 },
  ...categories.map((c) => ({ label: c.name, to: `/shop?category=${c.id}`, id: c.id })),
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);          // mobile drawer
  const [shopOpen, setShopOpen] = useState(false);  // desktop dropdown
  const { pathname, search } = useLocation();
  const isHome = pathname === '/';

  // which dropdown item is the current one?
  const currentCat = pathname === '/shop' ? Number(new URLSearchParams(search).get('category')) || 0 : -1;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close the menus whenever the page changes
  useEffect(() => { setOpen(false); setShopOpen(false); }, [pathname, search]);

  // stop the page scrolling while the mobile drawer is open
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; }, [open]);

  // transparent style only on Home, while it sits over the hero photo
  const overHero = isHome && !scrolled;

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''} ${overHero ? 'over-hero' : ''}`} id="home">
        <div className="container nav">
          <button className="menu-btn" onClick={() => setOpen(true)} aria-label="Open Menu"><Menu size={22} /></button>

          <Link to="/" className="logo"><strong>LUNE &amp; LUSTER</strong><small>Jewellery &amp; Accessories</small></Link>

          <ul className="nav-links">
            {links.map((l) =>
              l.menu ? (
                <li
                  key={l.to}
                  className={`has-menu ${shopOpen ? 'show' : ''}`}
                  onMouseEnter={() => setShopOpen(true)}
                  onMouseLeave={() => setShopOpen(false)}
                  onFocus={() => setShopOpen(true)}
                  onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setShopOpen(false); }}
                >
                  <NavLink to={l.to} end={l.end}>{l.label} </NavLink>
                  <div className="dropdown">
                    <ul>
                      {shopMenu.map((item) => (
                        <li key={item.id}>
                          <Link to={item.to} className={item.id === currentCat ? 'current' : ''}>{item.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={l.to}><NavLink to={l.to} end={l.end}>{l.label}</NavLink></li>
              )
            )}
          </ul>

          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn btn-gold nav-cta">Enquire</a>
        </div>
      </header>

      {/* overlay and drawer sit OUTSIDE <header>, otherwise the header's blur effect
          squashes them to the header's height on the pages where it is solid */}
      <div className={`overlay ${open ? 'show' : ''}`} onClick={() => setOpen(false)} />
      <aside className={`drawer ${open ? 'open' : ''}`}>
        <button className="close" onClick={() => setOpen(false)} aria-label="Close Menu"><X size={22} /></button>
        <nav>
          {links.map((l) => (
            <div key={l.to}>
              <NavLink to={l.to} end={l.end}>{l.label}</NavLink>
              {l.menu && (
                <div className="drawer-sub">
                  {shopMenu.map((item) => <Link key={item.id} to={item.to}>{item.label}</Link>)}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}