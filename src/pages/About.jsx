import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BeamsBackground } from '@/components/ui/beams-background';

const About = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="about-wrapper" dir="rtl">
      <BeamsBackground intensity="strong">
        <div className="flex flex-col items-center justify-center gap-6 px-4 text-center">
          <motion.h1
            className="text-5xl sm:text-7xl md:text-8xl font-bold text-white tracking-tighter"
            style={{ fontFamily: "'Cormorant Garamond', serif", lineHeight: 1.1 }}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
          >
            אנחנו לא בונים אתרים.
            <br />
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>אנחנו בונים אימפריות.</span>
          </motion.h1>
          
          <motion.p className="text-lg md:text-xl max-w-2xl leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.45)', direction: 'rtl' }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }}
          >
            בעולם שבו רוב העסקים מסתפקים בנוכחות בינונית, אנחנו מאמינים שנוכחות דיגיטלית צריכה להיות חוויה סינמטית.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}>
            <Link to="/contact" className="btn btn-primary">בואו נדבר ←</Link>
          </motion.div>
        </div>
      </BeamsBackground>

      <section className="container" style={{ padding: '10rem 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem', color: '#ffffff', fontFamily: "'Cormorant Garamond', serif" }}>מה מבדיל אותנו</h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.1rem' }}>ארבעת העמודים של הגישה שלנו</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {[
            { icon: '🎬', title: 'חוויה סינמטית', desc: 'אנחנו מתייחסים לכל אתר כמו להפקת סרט פרימיום.', color: 'rgba(255,255,255,0.3)' },
            { icon: '💎', title: 'יוקרה ללא פשרות', desc: 'כל פיקסל נבחר בקפידה. טיפוגרפיה ברמה בינלאומית ופרופורציות שמייצרות אקסקלוסיביות.', color: 'rgba(255,255,255,0.25)' },
            { icon: '🧊', title: 'טכנולוגיה ותלת-מימד', desc: 'מומחים בבניית אתרי 3D באמצעות WebGL ו-React, ומחברים הכל למערכות חכמות.', color: 'rgba(255,255,255,0.2)' },
            { icon: '🤖', title: 'הפקת תוכן ו-AI', desc: 'הפקת סרטונים שיווקיים ותוכן ויזואלי מהפנט באמצעות טכנולוגיות AI המתקדמות בעולם.', color: 'rgba(255,255,255,0.15)' }
          ].map((item, idx) => (
            <motion.div key={idx} className="animated-border" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: idx * 0.15 }}
              style={{ padding: '3rem', background: '#0a0a0a', borderRadius: '20px', '--animated-color': item.color }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{item.icon}</div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', fontFamily: "'Cormorant Garamond', serif", color: '#ffffff' }}>{item.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.8 }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container" style={{ padding: '0 0 10rem', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
          style={{ padding: '5rem 2rem', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '30px', background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(255,255,255,0.02) 100%)' }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontFamily: "'Cormorant Garamond', serif", color: '#ffffff' }}>הסטנדרט של Flux</h2>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.5)', maxWidth: '800px', margin: '0 auto', lineHeight: 2 }}>
            אנחנו עובדים עם מותגים שמבינים שנוכחות דיגיטלית היא לא הוצאה, אלא השקעה. 
            אם אתם רוצים יצירת אמנות דיגיטלית שתעבוד בשבילכם 24/7, הגעתם למקום הנכון.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
