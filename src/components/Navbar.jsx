import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

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
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Dev Luxe</Link>
      </div>
      
      <div style={{ display: 'flex', gap: '2rem' }}>
        <Link 
          to="/" 
          style={{ 
            color: location.pathname === '/' ? '#d4af37' : '#ffffff', 
            textDecoration: 'none',
            fontSize: '1rem',
            transition: 'color 0.3s ease'
          }}
        >
          ראשי
        </Link>
        <Link 
          to="/about" 
          style={{ 
            color: location.pathname === '/about' ? '#d4af37' : '#ffffff', 
            textDecoration: 'none',
            fontSize: '1rem',
            transition: 'color 0.3s ease'
          }}
        >
          אודות
        </Link>
        {/* On home page, these can be anchor links. On other pages, they should link to Home + hash. For simplicity, just link to Home section. */}
        <a 
          href="/#portfolio" 
          style={{ 
            color: '#ffffff', 
            textDecoration: 'none',
            fontSize: '1rem',
            transition: 'color 0.3s ease'
          }}
        >
          פרויקטים
        </a>
        <a 
          href="/#contact" 
          style={{ 
            color: '#ffffff', 
            textDecoration: 'none',
            fontSize: '1rem',
            transition: 'color 0.3s ease'
          }}
        >
          צור קשר
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
