import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SilkBackground } from '@/components/ui/silk-background';
import MarqueeBanner from '../components/MarqueeBanner';
import GradientBlob from '../components/GradientBlob';

const Home = () => {

  const packages = [
    {
      name: 'Launch',
      price: 'מ-1,200 ₪',
      description: 'נקודת פתיחה מדויקת ומהירה לעסק שרוצה להיראות מעולה מהיום הראשון.',
      features: [
        'עיצוב נקי ומוקפד (One Page)',
        'אופטימיזציית מובייל ומהירות',
        'הנעה ברורה לפעולה (CTA)',
        'תשתית SEO בסיסית',
        'אחסון מאובטח וחיבור לדומיין'
      ],
    },
    {
      name: 'Signature',
      price: 'מ-2,900 ₪',
      description: 'מערכת דיגיטלית מלאה למותגים. עיצוב פרסונלי, חוויה חלקה ויכולות ניהול.',
      features: [
        'אפיון וחווית משתמש מלאה (UX/UI)',
        'אנימציות מיקרו-אינטראקציה (GSAP)',
        'ממשק ניהול תוכן חכם (Headless CMS)',
        'אינטגרציית מנוע לידים אישי',
        'אופטימיזציית מהירות ברמת פרימיום'
      ],
      popular: true
    },
    {
      name: 'Cinematic',
      price: 'מ-5,500 ₪',
      description: 'הסטנדרט הגבוה ביותר בשוק. חוויה אינטראקטיבית שוברת מוסכמות מבוססת AI.',
      features: [
        'חווית גלילה קולנועית (Scroll-Telling)',
        'סצנות ואלמנטים ב-3D (WebGL)',
        'פיתוח סוכן מכירות AI חכם לאתר',
        'דשבורד ביצועים ואנליטיקה עסקי',
        'אוטומציות לידים מתקדמות (Make/Zapier)'
      ],
    }
  ];
  
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => { const t = setTimeout(() => setIsLoaded(true), 300); return () => clearTimeout(t); }, []);

  return (
    <div className="portfolio-wrapper" dir="rtl">
      
      {/* ===== HERO — Silk Background ===== */}
      <header className="relative h-screen w-full overflow-hidden" style={{ background: '#000' }}>
        <SilkBackground />
        <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), transparent 40%, rgba(0,0,0,0.4))' }} />
        
        <div className="relative z-20 flex h-full items-center justify-center">
          <div className="text-center px-8">
            <motion.h1
              className="font-light tracking-[-0.05em] leading-none text-white"
              style={{ 
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(4rem, 15vw, 14rem)',
                textShadow: '0 0 60px rgba(255, 255, 255, 0.08)',
                mixBlendMode: 'difference',
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(2rem)',
                transition: 'all 1s ease-out'
              }}
            >
              Think Big
            </motion.h1>
          </div>
        </div>
      </header>

      <MarqueeBanner />

      {/* ===== Process ===== */}
      <section className="section container" style={{ padding: '8rem 0' }}>
        <div className="text-center" style={{ marginBottom: '5rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem', color: '#ffffff', fontFamily: "'Cormorant Garamond', serif" }}>התהליך שלנו</h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.1rem' }}>כך אנחנו בונים אימפריה דיגיטלית מאפס</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          {[
            { step: '01', title: 'אסטרטגיה', desc: 'מחקר מתחרים, תכנון מסע לקוח ופיצוח ה-DNA של המותג.' },
            { step: '02', title: 'עיצוב פרימיום', desc: 'יצירת שפה ויזואלית ייחודית, אנימציות ו-UI/UX שמשדר יוקרה.' },
            { step: '03', title: 'פיתוח מתקדם', desc: 'כתיבת קוד נקי ומהיר ב-React ושילוב טכנולוגיות 3D ו-AI.' },
            { step: '04', title: 'השקה', desc: 'אופטימיזציה מוחלטת, חיבור למערכות CRM והעלאה לאוויר.' }
          ].map((item, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.15 }} className="glass" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2.5rem', color: 'rgba(255,255,255,0.3)', fontFamily: "'Cormorant Garamond', serif", marginBottom: '1rem' }}>{item.step}</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>{item.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== Why It Works ===== */}
      <section className="section container" style={{ padding: '4rem 0 8rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', background: '#0a0a0a', padding: 'clamp(2rem, 5vw, 5rem)', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.06)' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem', color: '#ffffff', fontFamily: "'Cormorant Garamond', serif" }}>למה השיטה שלנו עובדת?</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              בעידן שבו כולם משתמשים באותן תבניות, עיצוב פרימיום הוא הדרך היחידה לבלוט.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {['בונה סמכות ואמון מיידי בשניות הראשונות', 'מאפשר תמחור גבוה יותר (Premium Positioning)', 'מגדיל משמעותית את אחוזי ההמרה', 'משאיר רושם בלתי נשכח מול המתחרים'].map((b, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'rgba(255,255,255,0.6)' }}>
                  <Check size={20} color="rgba(255,255,255,0.5)" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== Pricing ===== */}
      <section id="pricing" className="section container" style={{ position: 'relative', paddingBottom: '4rem' }}>
        <GradientBlob />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="text-center" style={{ marginBottom: '5rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '1rem', color: '#ffffff', fontFamily: "var(--font-main)", fontWeight: 300, letterSpacing: '-0.02em' }}>חבילות ברורות. רמת ביצוע לפי<br />עומק הפרויקט.</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {packages.map((pkg, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.2 }}
                className={`glass ${pkg.popular ? 'animated-border' : ''}`}
                style={{ padding: '3rem', textAlign: 'right', border: pkg.popular ? 'none' : '1px solid rgba(255,255,255,0.06)', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              >
                {pkg.popular && (
                  <span style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: '#fff', color: '#000', padding: '0.3rem 1.5rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 'bold' }}>הכי נכון לרוב העסקים</span>
                )}
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: '#ffffff', fontFamily: "var(--font-main)", fontWeight: 600, letterSpacing: '1px' }}>{pkg.name}</h3>
                <div style={{ fontSize: '2.5rem', fontFamily: "'Cormorant Garamond', serif", color: '#ffffff', marginBottom: '1rem' }}>{pkg.price}</div>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.95rem', marginBottom: '2.5rem', textAlign: 'center', lineHeight: 1.6, minHeight: '45px' }}>{pkg.description}</p>
                <ul style={{ width: '100%', padding: 0, margin: 0 }}>
                  {pkg.features.map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '0.75rem', marginBottom: '1rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>
                      <Check size={16} color="rgba(255,255,255,0.4)" style={{ flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Add-ons */}
          <div style={{ marginTop: '5rem', paddingTop: '4rem', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div style={{ textAlign: 'right', gridColumn: '1 / -1', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.8rem', color: '#ffffff', fontFamily: "var(--font-main)", fontWeight: 300 }}>שדרוגי קצה (Add-ons)</h3>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1rem' }}>תוספות פרימיום למותגים שדורשים שלמות טכנולוגית.</p>
            </div>
            {[
              { title: 'ארכיטקטורה מרובת שפות', desc: 'מערכת i18n מלאה (כולל RTL/LTR חלקה) המאפשרת חדירה לשווקים גלובליים.' },
              { title: 'פורטל לקוחות סגור', desc: 'אזור אישי מאובטח עם התחברות (Login) המיועד ללקוחות ה-VIP שלכם.' },
              { title: 'עיצוב סאונד אינטראקטיבי', desc: 'הוספת צלילי UI עדינים למיקרו-אינטראקציות, לחוויה שמרגישה כמו אפליקציה.' },
              { title: 'תשתית אופטימיזציית המרות', desc: 'הכנת האתר לבדיקות A/B דינמיות על מנת למקסם אחוזי סגירה (CRO).' }
            ].map((addon, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + idx * 0.1 }}
                style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <h4 style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', marginBottom: '0.8rem', fontFamily: "var(--font-main)" }}>+ {addon.title}</h4>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', lineHeight: 1.6 }}>{addon.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="container" style={{ padding: '4rem 0 8rem' }}>
        <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          style={{ background: '#0a0a0a', borderRadius: '30px', padding: '5rem 2rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}
        >
          <span style={{ color: 'rgba(255,255,255,0.4)', letterSpacing: '3px', fontSize: '0.85rem', fontWeight: 600 }}>READY WHEN YOU ARE</span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontFamily: "'Cormorant Garamond', serif", color: '#ffffff', maxWidth: '800px', lineHeight: 1.1 }}>
            יש לך עסק שצריך להיראות יקר יותר? זה בדיוק המקום להתחיל.
          </h2>
          <Link to="/contact" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
            תאמו שיחת אפיון
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(180deg)' }}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
