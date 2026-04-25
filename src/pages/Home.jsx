import React from 'react';
import { motion } from 'framer-motion';
import { Check, Globe, Zap, Crown, Mail, Phone, MessageCircle } from 'lucide-react';
import '../index.css';
import EarthGlobe from '../components/EarthGlobe';
import MarqueeBanner from '../components/MarqueeBanner';
import GradientBlob from '../components/GradientBlob';

const Home = () => {
  const projects = [
    {
      id: 'safed-bar',
      name: 'מרתף צפת',
      category: 'Hospitality & Luxury',
      description: 'אתר קונספט יוקרתי עבור בר יין וקוקטיילים. תוכנן עם דגש על אווירה סינמטית, אנימציות רכות וחוויית משתמש שמעבירה את התחושה של פרימיום כבר מהקליק הראשון.',
      image: 'https://safed-bar.netlify.app/hero-bg.png',
      link: 'https://safed-bar.netlify.app/',
    },
    {
      id: 'genesis-vr',
      name: 'Genesis VR',
      category: 'VR & Technology',
      description: 'אתר פרימיום לחברת חוויות מציאות מדומה. עיצוב עתידני, אנימציות 3D, חלקיקים מרחפים וחוויה סינמטית מלאה שלוקחת את המשתמש למסע דיגיטלי.',
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
        'הפקת סרטוני וידאו מבוססי AI',
        'אוטומציית וואטסאפ ולידים',
        'חיבור CRM ומערכות חכמות',
        'קופירייטינג וכתיבה שיווקית'
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
          <h2 style={{ letterSpacing: '6px', fontSize: '1rem', marginBottom: '1.5rem', textTransform: 'uppercase', fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, color: 'var(--color-gold)' }}>Flux Studio</h2>

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

      {/* Open Space Gallery Section */}
      <section id="portfolio" className="section container" style={{ position: 'relative', padding: '10rem 0' }}>
        <div className="text-center" style={{ marginBottom: '10rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#ffffff' }}>פרויקטים נבחרים</h2>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15rem' }}>
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`portfolio-gallery-item ${index % 2 !== 0 ? 'reverse' : ''}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8rem',
                flexDirection: index % 2 !== 0 ? 'row-reverse' : 'row'
              }}
            >
              {/* Image Block */}
              <motion.div 
                className="portfolio-image-block"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ flex: '1.5' }}
              >
                <div style={{ 
                  width: '100%', 
                  height: '600px', 
                  background: `url(${project.image}) center/cover no-repeat`,
                  borderRadius: '0', // No border radius
                  boxShadow: 'none' // No shadow
                }}></div>
              </motion.div>

              {/* Text Block */}
              <motion.div 
                className="portfolio-text-block"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
              >
                <span style={{ 
                  color: 'var(--color-gold)', 
                  fontSize: '0.9rem', 
                  letterSpacing: '2px', 
                  textTransform: 'uppercase',
                  marginBottom: '1rem',
                  display: 'block'
                }}>
                  {project.category}
                </span>
                
                <h3 style={{ 
                  fontSize: 'clamp(3rem, 5vw, 5rem)', 
                  margin: '0 0 2rem 0', 
                  color: '#ffffff',
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 300,
                  lineHeight: 1.1
                }}>
                  {project.name}
                </h3>
                
                <p style={{ 
                  color: 'rgba(180, 190, 220, 0.7)', 
                  fontSize: '1.2rem', 
                  lineHeight: 1.8,
                  marginBottom: '3rem',
                  maxWidth: '450px'
                }}>
                  {project.description}
                </p>

                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="gallery-link-btn"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '1rem',
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    borderBottom: '1px solid rgba(255,255,255,0.3)',
                    paddingBottom: '0.5rem',
                    transition: 'all 0.3s ease'
                  }}
                >
                  צפו באתר החי
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(180deg)' }}>
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </motion.div>
            </div>
          ))}
        </div>
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
    </div>
  );
};

export default Home;
