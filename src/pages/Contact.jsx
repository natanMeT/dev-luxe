import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MessageCircle, ChevronDown } from 'lucide-react';

const Contact = () => {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const faqs = [
    {
      question: "למה לבחור דווקא ב-Dev Luxe?",
      answer: "כי אנחנו לא מספקים תבניות. בניגוד לרוב בוני האתרים שמחפשים לסגור פרויקט מהר, אנחנו מתייחסים לכל אתר כאל חוויה סינמטית ומותג פרימיום. אנחנו משלבים אנימציות חלקות, עיצוב 'קנבס פתוח' ואופטימיזציה שמשאירה רושם חזק על הלקוחות שלכם מהרגע הראשון."
    },
    {
      question: "כמה זמן לוקח לבנות אתר פרימיום?",
      answer: "תהליך העבודה שלנו דורש דיוק. בממוצע, הקמת אתר תדמית יוקרתי לוקחת בין 3 ל-6 שבועות. אנחנו לא מקצרים תהליכים על חשבון האיכות, וכל פיקסל מקבל את תשומת הלב המלאה כדי להבטיח שהתוצאה הסופית תהיה מושלמת."
    },
    {
      question: "האם אתם מספקים גם תחזוקה ואחסון?",
      answer: "בהחלט. אנחנו יודעים שאתר יוקרתי חייב להישאר מהיר ומאובטח. אנחנו מציעים חבילות אחסון בשרתי פרימיום ותחזוקה שוטפת, כך שאתם יכולים להתעסק בניהול העסק שלכם, ואנחנו נדאג שהתשתית הטכנולוגית תעבוד 24/7 ללא תקלות."
    },
    {
      question: "למה האתרים שלכם מתומחרים גבוה מהממוצע בשוק?",
      answer: "פשוט מאוד: אתר רגיל עולה כסף, אתר פרימיום מייצר כסף. התמחור שלנו משקף את העובדה שאנחנו לא בונים 'עוד כרטיס ביקור אינטרנטי', אלא נכס דיגיטלי אינטראקטיבי הכולל אנימציות מורכבות, אסטרטגיה שיווקית ופיתוח תלת-מימד (3D) במידת הצורך. מי שמחפש פתרון זול ימצא אותו בקלות, אבל מי שמחפש להוביל את התחום שלו – מגיע אלינו."
    }
  ];

  return (
    <div className="contact-wrapper" dir="rtl" style={{ minHeight: '100vh', paddingTop: '100px', color: '#ffffff' }}>
      
      {/* Marketing Header */}
      <section className="container" style={{ padding: '8rem 0 4rem', textAlign: 'center' }}>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ 
            fontSize: 'clamp(3rem, 6vw, 6rem)', 
            fontFamily: "'Cormorant Garamond', serif", 
            fontWeight: 300,
            marginBottom: '1rem',
            lineHeight: 1.1,
            color: '#ffffff'
          }}
        >
          הגיע הזמן לעלות <span style={{ color: 'var(--color-gold)', fontStyle: 'italic' }}>לשלב הבא.</span>
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
          בואו נבנה יחד את הנוכחות הדיגיטלית שתבסס אתכם כמותג המוביל בתחומכם. אנחנו כאן לכל שאלה, התייעצות, או קפיצת מדרגה.
        </motion.p>
      </section>

      {/* Contact Methods */}
      <section className="container" style={{ padding: '4rem 0 8rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          <motion.a 
            href="mailto:natanturgeman365@gmail.com"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, borderColor: 'rgba(212, 175, 55, 0.5)' }}
            style={{ 
              padding: '4rem 2rem', 
              background: 'var(--color-slate)', 
              borderRadius: '20px', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              gap: '1.5rem',
              textDecoration: 'none',
              color: '#ffffff',
              border: '1px solid rgba(255,255,255,0.05)',
              transition: 'all 0.3s ease'
            }}
          >
            <Mail size={48} color="#d4af37" />
            <h3 style={{ fontSize: '1.8rem', fontFamily: "'Cormorant Garamond', serif", margin: 0 }}>שלחו מייל</h3>
            <span style={{ color: 'rgba(180, 190, 220, 0.6)' }}>נחזור אליכם בהקדם האפשרי</span>
          </motion.a>

          <motion.a 
            href="tel:+972538514365"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -10, borderColor: 'rgba(45, 122, 237, 0.5)' }}
            style={{ 
              padding: '4rem 2rem', 
              background: 'var(--color-slate)', 
              borderRadius: '20px', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              gap: '1.5rem',
              textDecoration: 'none',
              color: '#ffffff',
              border: '1px solid rgba(255,255,255,0.05)',
              transition: 'all 0.3s ease'
            }}
          >
            <Phone size={48} color="#2d7aed" />
            <h3 style={{ fontSize: '1.8rem', fontFamily: "'Cormorant Garamond', serif", margin: 0 }}>חייגו אלינו</h3>
            <span style={{ color: 'rgba(180, 190, 220, 0.6)' }}>מעדיפים לדבר? אנחנו זמינים</span>
          </motion.a>

          <motion.a 
            href="https://wa.me/972538514365"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -10, borderColor: 'rgba(0, 212, 170, 0.5)' }}
            style={{ 
              padding: '4rem 2rem', 
              background: 'var(--color-slate)', 
              borderRadius: '20px', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              gap: '1.5rem',
              textDecoration: 'none',
              color: '#ffffff',
              border: '1px solid rgba(255,255,255,0.05)',
              transition: 'all 0.3s ease'
            }}
          >
            <MessageCircle size={48} color="#00d4aa" />
            <h3 style={{ fontSize: '1.8rem', fontFamily: "'Cormorant Garamond', serif", margin: 0 }}>וואטסאפ</h3>
            <span style={{ color: 'rgba(180, 190, 220, 0.6)' }}>למענה מהיר ונוח התכתבו איתנו</span>
          </motion.a>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="container" style={{ padding: '4rem 0 10rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', fontFamily: "'Cormorant Garamond', serif", marginBottom: '1rem' }}>שאלות נפוצות</h2>
          <p style={{ color: 'rgba(180, 190, 220, 0.6)', fontSize: '1.1rem' }}>כל מה שרציתם לדעת על תהליך העבודה איתנו</p>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            
            return (
              <div 
                key={index}
                style={{ 
                  background: 'rgba(255,255,255,0.02)', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  borderRadius: '16px',
                  overflow: 'hidden'
                }}
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  style={{
                    width: '100%',
                    padding: '2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'transparent',
                    border: 'none',
                    color: '#ffffff',
                    cursor: 'pointer',
                    textAlign: 'right',
                    fontSize: '1.2rem',
                    fontWeight: 500
                  }}
                >
                  <span style={{ color: isOpen ? 'var(--color-gold)' : '#ffffff', transition: 'color 0.3s' }}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown color={isOpen ? 'var(--color-gold)' : 'rgba(180, 190, 220, 0.6)'} />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ 
                        padding: '0 2rem 2rem', 
                        color: 'rgba(180, 190, 220, 0.8)', 
                        lineHeight: 1.8,
                        fontSize: '1.1rem' 
                      }}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};

export default Contact;
