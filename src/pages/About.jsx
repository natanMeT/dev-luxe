import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BeamsBackground } from '@/components/ui/beams-background';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-wrapper" dir="rtl">
      
      {/* ===== Hero with Beams ===== */}
      <BeamsBackground intensity="strong">
        <div className="flex flex-col items-center justify-center gap-6 px-4 text-center">
          <motion.h1
            className="text-5xl sm:text-7xl md:text-8xl font-bold text-white tracking-tighter"
            style={{ fontFamily: "'Cormorant Garamond', serif", lineHeight: 1.1 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            אנחנו לא בונים אתרים.
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              אנחנו בונים אימפריות.
            </span>
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl max-w-2xl leading-relaxed"
            style={{ color: 'rgba(148, 163, 184, 0.8)', direction: 'rtl' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            בעולם שבו רוב העסקים מסתפקים בנוכחות בינונית, אנחנו מאמינים שנוכחות דיגיטלית צריכה להיות חוויה סינמטית.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Link
              to="/contact"
              className="inline-block rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(to bottom, rgba(59,130,246,0.15), rgba(4,8,18,0.15))',
                padding: '1px',
              }}
            >
              <span
                className="block rounded-[0.95rem] px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  background: 'rgba(4, 8, 18, 0.9)',
                  color: '#ffffff',
                  border: '1px solid rgba(59, 130, 246, 0.15)',
                }}
              >
                בואו נדבר ←
              </span>
            </Link>
          </motion.div>
        </div>
      </BeamsBackground>

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
