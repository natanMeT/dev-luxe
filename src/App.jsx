import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Globe, Zap, Crown, Mail, Phone, MessageCircle } from 'lucide-react';
import './index.css';
import EarthGlobe from './components/EarthGlobe';
import MarqueeBanner from './components/MarqueeBanner';
import GradientBlob from './components/GradientBlob';

const OnyxPortfolio = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Offset slightly so the cursor doesn't cover the image
      setMousePos({ x: e.clientX + 20, y: e.clientY + 20 });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      id: 'safed-bar',
      name: 'מרתף צפת',
      category: 'Hospitality & Luxury',
      image: 'https://safed-bar.netlify.app/hero-bg.png',
      link: 'https://safed-bar.netlify.app/',
    },
    {
      id: 'genesis-vr',
      name: 'Genesis VR',
      category: 'VR & Technology',
      image: '/genesis-vr-preview.png',
      link: 'https://vr-bible.netlify.app/',
    }
  ];

  const packages = [
    {
      name: 'בסיסי',
      icon: <Zap className="w-8 h-8" />,
      price: 'מ-1,900 ₪',
      features: [
        'דף נחיתה (One Page) מעוצב',
        'התאמה מלאה למובייל',
        'קישור לרשתות חברתיות',
        'אופטימיזציית מהירות',
        'אחסון והעלאה לאוויר'
      ],
      color: 'rgba(180, 190, 220, 0.7)'
    },
    {
      name: 'מתקדם',
      icon: <Globe className="w-8 h-8" />,
      price: 'מ-4,500 ₪',
      features: [
        'אתר רב-עמודי (עד 5 דפים)',
        'אנימציות פרימיום (WOW Factor)',
        'יצירת תוכן חזותי ב-AI',
        'טופס יצירת קשר מתקדם',
        'SEO (קידום אורגני) בסיסי'
      ],
      color: '#d4af37',
      popular: true
    },
    {
      name: 'פרימיום',
      icon: <Crown className="w-8 h-8" />,
      price: 'מ-8,500 ₪',
      features: [
        'אתר מותאם אישית מאפס',
        'מיתוג מלא ולוגו',
        'אוטומציית וואטסאפ ולידים',
        'חיבור CRM ומערכות חכמות',
        'ליווי שיווקי + תמיכה שוטפת'
      ],
      color: '#00d4aa'
    }
  ];
  
  return (
    <div className="portfolio-wrapper" dir="rtl">
      {/* Hero Section */}
      <header className="hero-split" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div className="hero-cube-wrapper">
          <EarthGlobe />
        </div>
        <motion.div
          className="hero-text-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 style={{ letterSpacing: '12px', fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '0.5rem', textTransform: 'uppercase', fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: '#ffffff', textShadow: '0 0 40px rgba(0, 212, 170, 0.3)' }}>
            Think Big
          </h1>
          <h2 style={{ letterSpacing: '6px', fontSize: '1rem', marginBottom: '1.5rem', textTransform: 'uppercase', fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, color: 'var(--color-gold)' }}>Dev Luxe</h2>

          <p style={{ fontSize: '1.3rem', color: 'rgba(180, 190, 220, 0.8)', maxWidth: '550px', margin: '0 auto 3rem', lineHeight: 1.8 }}>
            אנחנו לא רק בונים אתרים. אנחנו יוצרים חוויות יוקרה סינמטיות שממירות מבקרים ללקוחות משלמים.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href="#portfolio" className="btn btn-primary">העבודות שלנו</a>
            <a href="#contact" className="btn btn-outline">דברו איתנו</a>
          </div>
        </motion.div>
      </header>

      {/* Scrolling Marquee */}
      <MarqueeBanner />

      {/* Typographic Portfolio Section */}
      <section id="portfolio" className="section container" style={{ position: 'relative', padding: '8rem 0' }}>
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#ffffff' }}>פרויקטים נבחרים</h2>
        </div>
        
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          {projects.map((project) => (
            <li 
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                padding: '3rem 0',
                position: 'relative',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'background 0.3s ease'
              }}
              className="portfolio-list-item"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h3 style={{ 
                    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
                    margin: 0, 
                    color: hoveredProject === project.id ? 'var(--color-gold)' : '#ffffff',
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 300,
                    transition: 'color 0.4s ease'
                  }}>
                    {project.name}
                  </h3>
                  <span style={{ 
                    color: 'rgba(180, 190, 220, 0.5)', 
                    fontSize: '1rem', 
                    letterSpacing: '2px', 
                    textTransform: 'uppercase',
                    display: 'block',
                    marginTop: '0.5rem'
                  }}>
                    {project.category}
                  </span>
                </div>
                <div style={{ 
                  opacity: hoveredProject === project.id ? 1 : 0, 
                  transform: hoveredProject === project.id ? 'translateX(-20px)' : 'translateX(0)',
                  transition: 'all 0.4s ease',
                  color: 'var(--color-gold)'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
              <div className="mobile-project-image" style={{ background: `url(${project.image}) center/cover no-repeat` }}></div>
            </li>
          ))}
        </ul>

        {/* Floating Cursor Image */}
        {projects.map((project) => (
          <motion.div
            key={`img-${project.id}`}
            className="floating-cursor-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: hoveredProject === project.id ? 1 : 0,
              scale: hoveredProject === project.id ? 1 : 0.8,
              x: mousePos.x,
              y: mousePos.y
            }}
            transition={{ type: 'spring', damping: 20, stiffness: 100, mass: 0.5 }}
            style={{
              position: 'fixed',
              top: -150, // center the image on the cursor vertically
              left: 0,
              width: '400px',
              height: '300px',
              pointerEvents: 'none',
              zIndex: 100,
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
            }}
          >
            <div style={{ 
              width: '100%', 
              height: '100%', 
              background: `url(${project.image}) center/cover no-repeat`,
              filter: 'brightness(0.9)'
            }}></div>
          </motion.div>
        ))}
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section container" style={{ position: 'relative' }}>
        <GradientBlob />
        <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="text-center" style={{ marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#ffffff' }}>חבילות ומחירים</h2>
          <p style={{ color: 'rgba(180, 190, 220, 0.6)' }}>פתרון מדויק לכל שלב של העסק שלך</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass"
              style={{ 
                padding: '3rem', 
                textAlign: 'center', 
                border: pkg.popular ? '2px solid #d4af37' : '1px solid rgba(255,255,255,0.05)',
                position: 'relative'
              }}
            >
              {pkg.popular && (
                <span style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg, #0f3a28, #051a11)', border: '1px solid #d4af37', color: '#d4af37', padding: '0.2rem 1rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 'bold' }}>הכי פופולרי</span>
              )}
              <div style={{ color: pkg.color, marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>{pkg.icon}</div>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: pkg.color }}>{pkg.name}</h3>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>{pkg.price}</div>
              <ul style={{ textAlign: 'right', marginBottom: '3rem' }}>
                {pkg.features.map((feature, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem', fontSize: '0.9rem' }}>
                    <Check size={16} color="#2d7aed" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn btn-primary" style={{ width: '100%' }}>התחילו עכשיו</a>
            </motion.div>
          ))}
        </div>
        </div>
      </section>

      {/* Contact / Digital Card Section */}
      <section id="contact" className="section container text-center">
        <div className="glass" style={{ padding: '4rem', maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '2rem', color: '#ffffff' }}>בואו נבנה משהו גדול</h2>
          <p style={{ marginBottom: '3rem', color: 'rgba(180, 190, 220, 0.6)' }}>זמינים עבורכם לכל שאלה או התייעצות</p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
            <a href="mailto:natanturgeman365@gmail.com" className="glass" style={{ padding: '2rem', flex: '1', minWidth: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <Mail color="#d4af37" />
              <span>שלחו מייל</span>
            </a>
            <a href="tel:+972538514365" className="glass" style={{ padding: '2rem', flex: '1', minWidth: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <Phone color="#2d7aed" />
              <span>חייגו אלינו</span>
            </a>
            <a href="https://wa.me/972538514365" className="glass" style={{ padding: '2rem', flex: '1', minWidth: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <MessageCircle color="#00d4aa" />
              <span>וואטסאפ</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="container text-center" style={{ padding: '4rem 0', color: 'var(--color-muted)', fontSize: '0.8rem' }}>
        © {new Date().getFullYear()} Dev Luxe. All Rights Reserved.
      </footer>
    </div>
  );
};

export default OnyxPortfolio;
