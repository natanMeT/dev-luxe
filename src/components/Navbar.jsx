import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      padding: '1.5rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 1000,
      background: 'rgba(5, 15, 20, 0.8)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      direction: 'rtl'
    }}>
      <div style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#ffffff',
        letterSpacing: '2px',
        textTransform: 'uppercase'
      }}>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }} onClick={closeMenu}>Flux</Link>
      </div>

      <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
      
      <div className={`nav-links ${isOpen ? 'open' : ''}`} style={{ display: 'flex', gap: '2rem' }}>
        <Link 
          to="/" 
          onClick={closeMenu}
          style={{ 
            color: location.pathname === '/' ? '#d4af37' : '#ffffff', 
            textDecoration: 'none',
            fontSize: '1.1rem',
            transition: 'color 0.3s ease'
          }}
        >
          ראשי
        </Link>
        <Link 
          to="/about" 
          onClick={closeMenu}
          style={{ 
            color: location.pathname === '/about' ? '#d4af37' : '#ffffff', 
            textDecoration: 'none',
            fontSize: '1.1rem',
            transition: 'color 0.3s ease'
          }}
        >
          אודות
        </Link>
        <a 
          href="/#portfolio" 
          onClick={closeMenu}
          style={{ 
            color: '#ffffff', 
            textDecoration: 'none',
            fontSize: '1.1rem',
            transition: 'color 0.3s ease'
          }}
        >
          פרויקטים
        </a>
        <Link 
          to="/contact" 
          onClick={closeMenu}
          style={{ 
            color: location.pathname === '/contact' ? '#d4af37' : '#ffffff', 
            textDecoration: 'none',
            fontSize: '1.1rem',
            transition: 'color 0.3s ease'
          }}
        >
          צור קשר
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
