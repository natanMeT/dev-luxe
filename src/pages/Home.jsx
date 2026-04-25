import React from 'react';
import { motion } from 'framer-motion';
import { Check, Globe, Zap, Crown, Mail, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import '../index.css';
import EarthGlobe from '../components/EarthGlobe';
import MarqueeBanner from '../components/MarqueeBanner';
import GradientBlob from '../components/GradientBlob';
import ProjectsCarousel from '../components/ProjectsCarousel';

const Home = () => {

  const packages = [
    {
      name: 'Launch',
      price: 'מ-1,900 ₪',
      description: 'נקודת פתיחה מדויקת ומהירה לעסק שרוצה להיראות מעולה מהיום הראשון.',
      features: [
        'עיצוב נקי ומוקפד (One Page)',
        'אופטימיזציית מובייל ומהירות',
        'הנעה ברורה לפעולה (CTA)',
        'תשתית SEO בסיסית',
        'אחסון מאובטח וחיבור לדומיין'
      ],
      color: 'rgba(180, 190, 220, 0.7)'
    },
    {
      name: 'Signature',
      price: 'מ-4,500 ₪',
      description: 'מערכת דיגיטלית מלאה למותגים. עיצוב פרסונלי, חוויה חלקה ויכולות ניהול.',
      features: [
        'אפיון וחווית משתמש מלאה (UX/UI)',
        'אנימציות מיקרו-אינטראקציה (GSAP)',
        'ממשק ניהול תוכן חכם (Headless CMS)',
        'אינטגרציית מנוע לידים אישי',
        'אופטימיזציית מהירות ברמת פרימיום'
      ],
      color: '#d4af37',
      popular: true
    },
    {
      name: 'Cinematic',
      price: 'מ-8,500 ₪',
      description: 'הסטנדרט הגבוה ביותר בשוק. חוויה אינטראקטיבית שוברת מוסכמות מבוססת AI.',
      features: [
        'חווית גלילה קולנועית (Scroll-Telling)',
        'סצנות ואלמנטים ב-3D (WebGL)',
        'פיתוח סוכן מכירות AI חכם לאתר',
        'דשבורד ביצועים ואנליטיקה עסקי',
        'אוטומציות לידים מתקדמות (Make/Zapier)'
      ],
      color: '#ffffff'
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
            <Link to="/contact" className="btn btn-outline">דברו איתנו</Link>
          </div>
        </motion.div>
      </header>

      {/* Scrolling Marquee */}
      <MarqueeBanner />

      {/* Open Space Gallery Section */}
      <section id="portfolio" className="section" style={{ position: 'relative', padding: '10rem 0', overflow: 'hidden' }}>
        <div className="container text-center" style={{ marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#ffffff' }}>פרויקטים נבחרים</h2>
        </div>
        
        <div style={{ width: '100%', position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <ProjectsCarousel projects={projects} />
        </div>
      </section>

      {/* Process Section */}
      <section className="section container" style={{ padding: '8rem 0' }}>
        <div className="text-center" style={{ marginBottom: '5rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem', color: '#ffffff', fontFamily: "'Cormorant Garamond', serif" }}>התהליך שלנו</h2>
          <p style={{ color: 'rgba(180, 190, 220, 0.6)', fontSize: '1.1rem' }}>כך אנחנו בונים אימפריה דיגיטלית מאפס</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          {[
            { step: '01', title: 'אסטרטגיה', desc: 'מחקר מתחרים, תכנון מסע לקוח ופיצוח ה-DNA של המותג.' },
            { step: '02', title: 'עיצוב פרימיום', desc: 'יצירת שפה ויזואלית ייחודית, אנימציות ו-UI/UX שמשדר יוקרה.' },
            { step: '03', title: 'פיתוח מתקדם', desc: 'כתיבת קוד נקי ומהיר ב-React ושילוב טכנולוגיות 3D ו-AI.' },
            { step: '04', title: 'השקה', desc: 'אופטימיזציה מוחלטת, חיבור למערכות CRM והעלאה לאוויר.' }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              style={{ padding: '2rem', background: 'rgba(25, 25, 30, 0.3)', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)' }}
            >
              <div style={{ fontSize: '2.5rem', color: 'var(--color-gold)', fontFamily: "'Cormorant Garamond', serif", marginBottom: '1rem' }}>{item.step}</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>{item.title}</h3>
              <p style={{ color: 'rgba(180, 190, 220, 0.7)', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why It Works Section */}
      <section className="section container" style={{ padding: '4rem 0 8rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', background: 'var(--color-slate)', padding: 'clamp(2rem, 5vw, 5rem)', borderRadius: '30px', border: '1px solid rgba(212, 175, 55, 0.1)' }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem', color: '#ffffff', fontFamily: "'Cormorant Garamond', serif" }}>למה השיטה שלנו עובדת?</h2>
            <p style={{ color: 'rgba(180, 190, 220, 0.8)', fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              בעידן שבו כולם משתמשים באותן תבניות, עיצוב פרימיום הוא הדרך היחידה לבלוט. כשאנחנו בונים אתר עם חוויה סינמטית, אנחנו לא רק גורמים לו להיראות יפה – אנחנו משנים את הפסיכולוגיה של הלקוח.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                'בונה סמכות ואמון מיידי בשניות הראשונות',
                'מאפשר תמחור גבוה יותר לשירותים שלכם (Premium Positioning)',
                'מגדיל משמעותית את אחוזי ההמרה מלידים ללקוחות',
                'משאיר רושם בלתי נשכח מול המתחרים'
              ].map((benefit, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'rgba(180, 190, 220, 0.9)' }}>
                  <Check size={20} color="#00d4aa" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section container" style={{ position: 'relative', paddingBottom: '4rem' }}>
        <GradientBlob />
        <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="text-center" style={{ marginBottom: '5rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '1rem', color: '#ffffff', fontFamily: "var(--font-main)", fontWeight: 300, letterSpacing: '-0.02em' }}>חבילות ברורות. רמת ביצוע לפי<br />עומק הפרויקט.</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`glass ${pkg.popular ? 'animated-border' : ''}`}
              style={{ 
                padding: '3rem', 
                textAlign: 'right', 
                border: pkg.popular ? 'none' : '1px solid rgba(255,255,255,0.05)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              {pkg.popular && (
                <span style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: '#f1d592', color: '#050505', padding: '0.3rem 1.5rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 'bold' }}>הכי נכון לרוב העסקים</span>
              )}
              
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: '#ffffff', fontFamily: "var(--font-main)", fontWeight: 600, letterSpacing: '1px' }}>{pkg.name}</h3>
              <div style={{ fontSize: '2.5rem', fontFamily: "'Cormorant Garamond', serif", color: 'var(--color-gold)', marginBottom: '1rem' }}>{pkg.price}</div>
              <p style={{ color: 'rgba(180, 190, 220, 0.6)', fontSize: '0.95rem', marginBottom: '2.5rem', textAlign: 'center', lineHeight: 1.6, minHeight: '45px' }}>
                {pkg.description}
              </p>
              
              <ul style={{ width: '100%', padding: 0, margin: 0 }}>
                {pkg.features.map((feature, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '0.75rem', marginBottom: '1rem', fontSize: '0.9rem', color: 'rgba(180, 190, 220, 0.9)' }}>
                    <Check size={16} color="#00d4aa" style={{ flexShrink: 0 }} />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Premium Add-ons */}
        <div style={{ marginTop: '5rem', paddingTop: '4rem', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <div style={{ textAlign: 'right', gridColumn: '1 / -1', marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1.8rem', color: '#ffffff', fontFamily: "var(--font-main)", fontWeight: 300 }}>שדרוגי קצה (Add-ons)</h3>
            <p style={{ color: 'rgba(180, 190, 220, 0.6)', fontSize: '1rem' }}>תוספות פרימיום למותגים שדורשים שלמות טכנולוגית ללא פשרות.</p>
          </div>
          
          {[
            { title: 'ארכיטקטורה מרובת שפות', desc: 'מערכת i18n מלאה (כולל RTL/LTR חלקה) המאפשרת חדירה לשווקים גלובליים.' },
            { title: 'פורטל לקוחות סגור', desc: 'אזור אישי מאובטח עם התחברות (Login) המיועד ללקוחות ה-VIP שלכם.' },
            { title: 'עיצוב סאונד אינטראקטיבי', desc: 'הוספת צלילי UI עדינים למיקרו-אינטראקציות, לחוויה שמרגישה כמו אפליקציה.' },
            { title: 'תשתית אופטימיזציית המרות', desc: 'הכנת האתר לבדיקות A/B דינמיות על מנת למקסם אחוזי סגירה (CRO).' }
          ].map((addon, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '15px', border: '1px solid rgba(212, 175, 55, 0.1)' }}
            >
              <h4 style={{ color: 'var(--color-gold)', fontSize: '1.1rem', marginBottom: '0.8rem', fontFamily: "var(--font-main)" }}>+ {addon.title}</h4>
              <p style={{ color: 'rgba(180, 190, 220, 0.8)', fontSize: '0.85rem', lineHeight: 1.6 }}>{addon.desc}</p>
            </motion.div>
          ))}
        </div>

        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container" style={{ padding: '4rem 0 8rem' }}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ 
            background: 'var(--color-slate)', 
            borderRadius: '30px', 
            padding: '5rem 2rem', 
            textAlign: 'center',
            border: '1px solid rgba(255,255,255,0.05)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem'
          }}
        >
          <span style={{ color: 'var(--color-gold)', letterSpacing: '3px', fontSize: '0.85rem', fontWeight: 600 }}>READY WHEN YOU ARE</span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontFamily: "'Cormorant Garamond', serif", color: '#ffffff', maxWidth: '800px', lineHeight: 1.1 }}>
            יש לך עסק שצריך להיראות יקר יותר? זה בדיוק המקום להתחיל.
          </h2>
          <Link to="/contact" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
            תאמו שיחת אפיון
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(180deg)' }}>
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
