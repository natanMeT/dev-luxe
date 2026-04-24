import React from 'react';
import { motion } from 'framer-motion';
import { Check, Globe, Zap, Crown, Mail, Phone, MessageCircle } from 'lucide-react';
import './index.css';
import FloatingOnyx from './components/FloatingOnyx';
import MarqueeBanner from './components/MarqueeBanner';
import GradientBlob from './components/GradientBlob';

const OnyxPortfolio = () => {
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
      color: '#7b2ff7',
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
        <div style={{ position: 'relative', width: '400px', height: '400px', marginBottom: '2rem' }}>
          <FloatingOnyx />
        </div>
        <motion.div
          style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 style={{ letterSpacing: '6px', fontSize: '1rem', marginBottom: '1.5rem', textTransform: 'uppercase', fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, color: 'var(--color-gold)' }}>Dev Luxe</h2>
          <h1 style={{ fontSize: 'clamp(3.5rem, 9vw, 7rem)', lineHeight: 1.05, marginBottom: '2rem', fontFamily: "'Secular One', sans-serif", color: '#ffffff', textShadow: '0 0 80px rgba(123, 47, 247, 0.15)' }}>בונים אימפריות <br /> דיגיטליות</h1>
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

      {/* Portfolio Section */}
      <section id="portfolio" className="section glass container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#ffffff' }}>פרויקטים נבחרים</h2>
          <p style={{ color: 'rgba(180, 190, 220, 0.6)' }}>הצצה קטנה לעבודות האחרונות שלנו</p>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {/* Card 1 – Bar */}
          <motion.div 
            className="portfolio-card"
            whileHover={{ y: -10 }}
            style={{ 
              background: 'var(--color-slate)', 
              borderRadius: '20px', 
              overflow: 'hidden',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              boxShadow: '0 30px 60px rgba(0,0,0,0.5)'
            }}
          >
            <div style={{ padding: '3rem' }}>
              <span style={{ color: '#7b2ff7', fontSize: '0.9rem', fontWeight: 'bold' }}>Hospitality & Luxury</span>
              <h3 style={{ fontSize: '2.5rem', margin: '1rem 0', color: '#ffffff' }}>מרתף צפת</h3>
              <p style={{ marginBottom: '2rem', color: 'rgba(180, 190, 220, 0.7)' }}>
                אתר קונספט יוקרתי עבור בר יין וקוקטיילים. דגש על אווירה סינמטית, אנימציות גלילה וחוויית משתמש פרימיום.
              </p>
              <a href="https://safed-bar.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">צפו באתר החי</a>
            </div>
            <div style={{ background: 'url("https://safed-bar.netlify.app/hero-bg.png") center/cover', minHeight: '400px' }}></div>
          </motion.div>

          {/* Card 2 – Genesis VR */}
          <motion.div 
            className="portfolio-card"
            whileHover={{ y: -10 }}
            style={{ 
              background: 'var(--color-slate)', 
              borderRadius: '20px', 
              overflow: 'hidden',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              boxShadow: '0 30px 60px rgba(0,0,0,0.5)'
            }}
          >
            <div style={{ padding: '3rem' }}>
              <span style={{ color: '#00d4aa', fontSize: '0.9rem', fontWeight: 'bold' }}>VR & Technology</span>
              <h3 style={{ fontSize: '2.5rem', margin: '1rem 0', color: '#ffffff' }}>Genesis VR</h3>
              <p style={{ marginBottom: '2rem', color: 'rgba(180, 190, 220, 0.7)' }}>
                אתר פרימיום לחברת חוויות מציאות מדומה מהתנ"ך. אנימציות 3D, קרוסלה אוטומטית, חלקיקים מרחפים וחוויה סינמטית מלאה.
              </p>
              <a href="https://vr-bible.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">צפו באתר החי</a>
            </div>
            <div style={{ background: 'url("/genesis-vr-preview.png") center/cover', minHeight: '400px' }}></div>
          </motion.div>
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
                border: pkg.popular ? '2px solid #7b2ff7' : '1px solid rgba(255,255,255,0.05)',
                position: 'relative'
              }}
            >
              {pkg.popular && (
                <span style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg, #7b2ff7, #2d7aed)', color: '#ffffff', padding: '0.2rem 1rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 'bold' }}>הכי פופולרי</span>
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
            <a href="mailto:contact@onyx.dev" className="glass" style={{ padding: '2rem', flex: '1', minWidth: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <Mail color="#7b2ff7" />
              <span>שלחו מייל</span>
            </a>
            <a href="tel:+972000000000" className="glass" style={{ padding: '2rem', flex: '1', minWidth: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <Phone color="#2d7aed" />
              <span>חייגו אלינו</span>
            </a>
            <a href="https://wa.me/972000000000" className="glass" style={{ padding: '2rem', flex: '1', minWidth: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
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
