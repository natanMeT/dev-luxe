import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, width: '100%', padding: '1.5rem 2rem',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1000,
      background: 'rgba(0, 0, 0, 0.85)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(255,255,255,0.04)', direction: 'rtl'
    }}>
      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', fontWeight: 'bold', color: '#ffffff', letterSpacing: '2px', textTransform: 'uppercase' }}>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }} onClick={closeMenu}>Flux</Link>
      </div>
      <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
      <div className={`nav-links ${isOpen ? 'open' : ''}`} style={{ display: 'flex', gap: '2rem' }}>
        {[
          { to: '/', label: 'ראשי' },
          { to: '/about', label: 'אודות' },
          { href: '/#pricing', label: 'חבילות' },
          { to: '/contact', label: 'צור קשר' },
        ].map((item, i) => {
          const isActive = item.to && location.pathname === item.to;
          const style = { color: isActive ? '#ffffff' : 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '1.1rem', transition: 'color 0.3s ease' };
          return item.to ? (
            <Link key={i} to={item.to} onClick={closeMenu} style={style}>{item.label}</Link>
          ) : (
            <a key={i} href={item.href} onClick={closeMenu} style={style}>{item.label}</a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
