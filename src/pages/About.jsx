import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-wrapper" dir="rtl" style={{ minHeight: '100vh', paddingTop: '100px', color: '#ffffff' }}>
      
      {/* Hero Section */}
      <section className="container" style={{ padding: '8rem 0 4rem', textAlign: 'center' }}>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ 
            fontSize: 'clamp(3rem, 6vw, 6rem)', 
            fontFamily: "'Cormorant Garamond', serif", 
            fontWeight: 300,
            marginBottom: '2rem',
            lineHeight: 1.1,
            color: '#ffffff'
          }}
        >
          אנחנו לא בונים אתרים.<br />
          <span style={{ color: 'var(--color-gold)', fontStyle: 'italic' }}>אנחנו בונים אימפריות דיגיטליות.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ 
            fontSize: '1.5rem', 
            color: 'rgba(180, 190, 220, 0.8)', 
            maxWidth: '700px', 
            margin: '0 auto', 
            lineHeight: 1.8 
          }}
        >
          בעולם שבו רוב העסקים מסתפקים בנוכחות בינונית, אנחנו מאמינים שנוכחות דיגיטלית צריכה להיות חוויה סינמטית. המטרה שלנו היא לא רק להציג מידע, אלא לייצר רגש, לבנות יוקרה, ולהמיר מבקרים ללקוחות משלמים.
        </motion.p>
      </section>

      {/* The Standard (3 Columns) */}
      <section className="container" style={{ padding: '10rem 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ padding: '3rem', background: 'var(--color-slate)', borderRadius: '20px', borderTop: '2px solid var(--color-gold)' }}
          >
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontFamily: "'Cormorant Garamond', serif" }}>01. חוויה סינמטית</h3>
            <p style={{ color: 'rgba(180, 190, 220, 0.7)', lineHeight: 1.8 }}>
              אנחנו מתייחסים לכל אתר כמו להפקת סרט פרימיום. התנועה, האנימציות, והזרימה של העמוד מתוכננים כדי להשאיר את המבקרים מהופנטים למסך.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ padding: '3rem', background: 'var(--color-slate)', borderRadius: '20px', borderTop: '2px solid #00d4aa' }}
          >
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontFamily: "'Cormorant Garamond', serif" }}>02. יוקרה ללא פשרות</h3>
            <p style={{ color: 'rgba(180, 190, 220, 0.7)', lineHeight: 1.8 }}>
              כל פיקסל נבחר בקפידה. אנחנו משתמשים בפלטות צבעים יוקרתיות, טיפוגרפיה ברמה בינלאומית, ופרופורציות שמייצרות תחושת אקסקלוסיביות.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ padding: '3rem', background: 'var(--color-slate)', borderRadius: '20px', borderTop: '2px solid #2d7aed' }}
          >
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontFamily: "'Cormorant Garamond', serif" }}>03. טכנולוגיה ותלת-מימד</h3>
            <p style={{ color: 'rgba(180, 190, 220, 0.7)', lineHeight: 1.8 }}>
              מאחורי העיצוב המרהיב פועלת טכנולוגיה מתקדמת. אנחנו מומחים בבניית אתרי תלת-מימד (3D Websites) באמצעות WebGL ו-React, ומחברים הכל למערכות חכמות.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ padding: '3rem', background: 'var(--color-slate)', borderRadius: '20px', borderTop: '2px solid #ff007f' }}
          >
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontFamily: "'Cormorant Garamond', serif" }}>04. הפקת תוכן ו-AI</h3>
            <p style={{ color: 'rgba(180, 190, 220, 0.7)', lineHeight: 1.8 }}>
              אנחנו מספקים מעטפת קריאייטיב מלאה: הפקת סרטונים שיווקיים ותוכן ויזואלי מהפנט באמצעות טכנולוגיות הבינה המלאכותית (AI) המתקדמות בעולם, כדי לייצר קמפיינים ונוכחות מדיה שאי אפשר להתעלם מהם.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Manifesto */}
      <section className="container" style={{ padding: '5rem 0 10rem', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ 
            padding: '5rem 2rem', 
            border: '1px solid rgba(212, 175, 55, 0.2)', 
            borderRadius: '30px',
            background: 'linear-gradient(180deg, rgba(5, 15, 20, 0) 0%, rgba(15, 58, 40, 0.2) 100%)'
          }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontFamily: "'Cormorant Garamond', serif" }}>הסטנדרט של Flux</h2>
          <p style={{ fontSize: '1.2rem', color: 'rgba(180, 190, 220, 0.8)', maxWidth: '800px', margin: '0 auto', lineHeight: 2 }}>
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
