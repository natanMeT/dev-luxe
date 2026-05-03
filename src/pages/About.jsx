import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BackgroundPaths } from '@/components/ui/background-paths';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-wrapper" dir="rtl">
      
      {/* ===== Hero with Animated Paths ===== */}
      <BackgroundPaths title="Flux Studio">
        <p style={{ 
          fontSize: '1.4rem', 
          color: 'rgba(148, 163, 184, 0.8)', 
          maxWidth: '650px', 
          margin: '0 auto 2.5rem', 
          lineHeight: 1.8,
          direction: 'rtl'
        }}>
          אנחנו לא בונים אתרים. אנחנו בונים אימפריות דיגיטליות.
        </p>

        <Link
          to="/contact"
          className="inline-block group relative rounded-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(to bottom, rgba(59,130,246,0.15), rgba(4,8,18,0.15))',
            padding: '1px',
            backdropFilter: 'blur(16px)',
          }}
        >
          <span
            className="block rounded-[0.95rem] px-8 py-4 text-lg font-semibold transition-all duration-300"
            style={{
              background: 'rgba(4, 8, 18, 0.95)',
              color: '#ffffff',
              border: '1px solid rgba(59, 130, 246, 0.1)',
            }}
          >
            <span style={{ opacity: 0.9 }}>בואו נדבר</span>
            <span style={{ marginRight: '12px', opacity: 0.7 }}>←</span>
          </span>
        </Link>
      </BackgroundPaths>

      {/* ===== The Standard (4 Columns) ===== */}
      <section className="container" style={{ padding: '10rem 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem', color: '#ffffff', fontFamily: "'Cormorant Garamond', serif" }}>
            מה מבדיל אותנו
          </h2>
          <p style={{ color: 'rgba(148, 163, 184, 0.6)', fontSize: '1.1rem' }}>ארבעת העמודים של הגישה שלנו</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          
          <motion.div 
            className="animated-border"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ padding: '3rem', background: 'var(--color-slate)', borderRadius: '20px', '--animated-color': '#3b82f6' }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🎬</div>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', fontFamily: "'Cormorant Garamond', serif", color: '#ffffff' }}>חוויה סינמטית</h3>
            <p style={{ color: 'rgba(148, 163, 184, 0.7)', lineHeight: 1.8 }}>
              אנחנו מתייחסים לכל אתר כמו להפקת סרט פרימיום. התנועה, האנימציות, והזרימה של העמוד מתוכננים כדי להשאיר את המבקרים מהופנטים למסך.
            </p>
          </motion.div>

          <motion.div 
            className="animated-border"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            style={{ padding: '3rem', background: 'var(--color-slate)', borderRadius: '20px', '--animated-color': '#60a5fa' }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>💎</div>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', fontFamily: "'Cormorant Garamond', serif", color: '#ffffff' }}>יוקרה ללא פשרות</h3>
            <p style={{ color: 'rgba(148, 163, 184, 0.7)', lineHeight: 1.8 }}>
              כל פיקסל נבחר בקפידה. אנחנו משתמשים בפלטות צבעים יוקרתיות, טיפוגרפיה ברמה בינלאומית, ופרופורציות שמייצרות תחושת אקסקלוסיביות.
            </p>
          </motion.div>

          <motion.div 
            className="animated-border"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ padding: '3rem', background: 'var(--color-slate)', borderRadius: '20px', '--animated-color': '#2563eb' }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🧊</div>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', fontFamily: "'Cormorant Garamond', serif", color: '#ffffff' }}>טכנולוגיה ותלת-מימד</h3>
            <p style={{ color: 'rgba(148, 163, 184, 0.7)', lineHeight: 1.8 }}>
              מאחורי העיצוב המרהיב פועלת טכנולוגיה מתקדמת. אנחנו מומחים בבניית אתרי תלת-מימד (3D Websites) באמצעות WebGL ו-React, ומחברים הכל למערכות חכמות.
            </p>
          </motion.div>

          <motion.div 
            className="animated-border"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.45 }}
            style={{ padding: '3rem', background: 'var(--color-slate)', borderRadius: '20px', '--animated-color': '#93c5fd' }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🤖</div>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', fontFamily: "'Cormorant Garamond', serif", color: '#ffffff' }}>הפקת תוכן ו-AI</h3>
            <p style={{ color: 'rgba(148, 163, 184, 0.7)', lineHeight: 1.8 }}>
              אנחנו מספקים מעטפת קריאייטיב מלאה: הפקת סרטונים שיווקיים ותוכן ויזואלי מהפנט באמצעות טכנולוגיות הבינה המלאכותית (AI) המתקדמות בעולם.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ===== Manifesto ===== */}
      <section className="container" style={{ padding: '0 0 10rem', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ 
            padding: '5rem 2rem', 
            border: '1px solid rgba(59, 130, 246, 0.15)', 
            borderRadius: '30px',
            background: 'linear-gradient(180deg, rgba(4, 8, 18, 0) 0%, rgba(30, 58, 138, 0.12) 100%)'
          }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontFamily: "'Cormorant Garamond', serif", color: '#ffffff' }}>הסטנדרט של Flux</h2>
          <p style={{ fontSize: '1.2rem', color: 'rgba(148, 163, 184, 0.8)', maxWidth: '800px', margin: '0 auto', lineHeight: 2 }}>
            אנחנו עובדים עם מותגים שמבינים שנוכחות דיגיטלית היא לא הוצאה, אלא השקעה. 
            מותגים שרוצים להוביל את התחום שלהם ולא רק להשתתף בו. 
            אם אתם מחפשים "עוד אתר", אנחנו כנראה לא הכתובת. אבל אם אתם רוצים יצירת אמנות דיגיטלית שתעבוד בשבילכם 24/7, הגעתם למקום הנכון.
          </p>
        </motion.div>
      </section>

    </div>
  );
};

export default About;
