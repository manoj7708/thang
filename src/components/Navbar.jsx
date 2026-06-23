import React from 'react';
import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import logo from '../assets/logo.png';
import './Navbar.css';

const NAV_ITEMS = [
  { to: '/',              label: 'Home' },
  { to: '/about',         label: 'About Us' },
  { to: '/services',      label: 'Services' },
  { to: '/gold-loan',     label: 'Gold Loan' },
  { to: '/calculator',    label: 'Calculator' },
  { to: '/why-choose-us', label: 'Why Us' },
  { to: '/faq',           label: 'FAQ' },
 
  { to: '/contact',       label: 'Contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
    >
      <div className="navbar__inner container">
        <Link to="/" className="navbar__brand" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Thangalatha Finance" className="navbar__logo" />
          <div className="navbar__brand-text">
            <span className="navbar__brand-name">Thangalatha</span>
            <span className="navbar__brand-tag">Finance</span>
          </div>
        </Link>

        <nav className="navbar__links">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <a href="tel:+919789220678" className="navbar__cta">
          <Phone size={16} strokeWidth={2.5} />
          <span>Call Now</span>
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          className="navbar__toggle"
          onClick={() => setMenuOpen((p) => !p)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="navbar__mobile-inner">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
              <a href="tel:+919789220678" className="navbar__mobile-cta">
                <Phone size={18} /> +91 9789220678
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
