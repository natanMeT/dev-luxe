import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MessageCircle, ChevronDown } from 'lucide-react';
import { EtherealBeams } from '@/components/ui/ethereal-beams';

const Contact = () => {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const faqs = [
    {
      question: "למה לבחור דווקא ב-Flux?",
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
      question: "מה קורה אחרי שהאתר עולה לאוויר?",
      answer: "אנחנו לא נעלמים אחרי ההשקה. כל לקוח מקבל תקופת ליווי שבה אנחנו עוקבים אחרי ביצועי האתר, מבצעים אופטימיזציות, ומוודאים שהכל רץ חלק. בנוסף, אנחנו מציעים חבילות תחזוקה שוטפת שכוללות עדכוני תוכן, גיבויים, ואבטחה – כדי שתוכלו להתמקד בניהול העסק בלי לדאוג לצד הטכני."
    }
  ];

  return (
    <div className="contact-wrapper relative overflow-hidden" dir="rtl" style={{ minHeight: '100vh', paddingTop: '100px', color: '#ffffff', background: '#000' }}>
      
      {/* Ethereal Beams Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <EtherealBeams
          beamWidth={2.5}
          beamHeight={18}
          beamNumber={15}
          lightColor="#ffffff"
          speed={2.5}
          noiseIntensity={2}
          scale={0.15}
          rotation={43}
        />
      </div>

      <div className="relative z-10">
      
      {/* Discovery Call Hero */}
      <section className="container" style={{ padding: '6rem 0 4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            style={{ textAlign: 'right' }}
          >
            <h1 style={{ 
              fontSize: 'clamp(3rem, 5vw, 5rem)', 
              fontFamily: "'Cormorant Garamond', serif", 
              fontWeight: 300,
              marginBottom: '1.5rem',
              lineHeight: 1.1,
              color: '#ffffff'
            }}>
              בואו נבנה את <span style={{ color: 'rgba(255,255,255,0.5)', fontStyle: 'italic' }}>האימפריה שלכם.</span>
            </h1>
            
            <p style={{ 
              fontSize: '1.2rem', 
              color: 'rgba(255,255,255,0.5)', 
              lineHeight: 1.8,
              marginBottom: '2rem'
            }}>
              האתר שלכם הוא הליבה של העסק. בשיחת האפיון אנחנו נפרק את המטרות שלכם לגורמים, ונרכיב בחזרה אקו-סיסטם דיגיטלי שלם - מעיצוב UX פרימיום, דרך אנימציות 3D ועד למנוע לידים חכם מבוסס AI.
            </p>
            
            <a href="#lead-form" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
              מלאו את שאלון האפיון ↓
            </a>
          </motion.div>


        </div>
      </section>

      {/* Contact Methods */}
      <section className="container" style={{ padding: '4rem 0 8rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          <motion.a 
            href="mailto:natanturgeman365@gmail.com"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, borderColor: 'rgba(255,255,255,0.2)' }}
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
            <Mail size={48} color="rgba(255,255,255,0.5)" />
            <h3 style={{ fontSize: '1.8rem', fontFamily: "'Cormorant Garamond', serif", margin: 0, color: '#ffffff' }}>שלחו מייל</h3>
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>נחזור אליכם בהקדם האפשרי</span>
          </motion.a>

          <motion.a 
            href="tel:+972538514365"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -10, borderColor: 'rgba(255,255,255,0.2)' }}
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
            <Phone size={48} color="rgba(255,255,255,0.5)" />
            <h3 style={{ fontSize: '1.8rem', fontFamily: "'Cormorant Garamond', serif", margin: 0, color: '#ffffff' }}>חייגו אלינו</h3>
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>מעדיפים לדבר? אנחנו זמינים</span>
          </motion.a>

          <motion.a 
            href="https://wa.me/972538514365"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -10, borderColor: 'rgba(255,255,255,0.2)' }}
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
            <MessageCircle size={48} color="rgba(255,255,255,0.5)" />
            <h3 style={{ fontSize: '1.8rem', fontFamily: "'Cormorant Garamond', serif", margin: 0, color: '#ffffff' }}>וואטסאפ</h3>
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>למענה מהיר ונוח התכתבו איתנו</span>
          </motion.a>

        </div>
      </section>

      {/* Contact Form Section */}
      <section id="lead-form" className="container" style={{ padding: '0 0 8rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--color-slate)', padding: 'clamp(2rem, 5vw, 4rem)', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontFamily: "'Cormorant Garamond', serif", marginBottom: '1rem', color: '#fff' }}>ספרו לנו על הפרויקט שלכם</h2>
            <p style={{ color: 'rgba(255,255,255,0.4)' }}>מלאו את הפרטים ונחזור אליכם עם אסטרטגיה מדויקת.</p>
          </div>
          
          <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }} onSubmit={(e) => e.preventDefault()}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)' }}>שם מלא *</label>
                <input type="text" required style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', color: '#fff', outline: 'none', transition: 'border-color 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.4)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)' }}>מספר טלפון *</label>
                <input type="tel" required style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', color: '#fff', outline: 'none', transition: 'border-color 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.4)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)' }}>סוג העסק</label>
                <input type="text" placeholder="לדוגמה: עריכת דין, נדל״ן, איקומרס" style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', color: '#fff', outline: 'none', transition: 'border-color 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.4)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)' }}>סוג הפרויקט</label>
                <input type="text" placeholder="לדוגמה: אתר תדמית 3D, חנות וירטואלית" style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', color: '#fff', outline: 'none', transition: 'border-color 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.4)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)' }}>טווח תקציב משוער</label>
              <select style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', color: '#fff', outline: 'none', transition: 'border-color 0.3s', cursor: 'pointer', appearance: 'none' }} onFocus={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.4)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}>
                <option value="not_sure">טרם הוחלט</option>
                <option value="1500-4000">1,500 ₪ - 4,000 ₪ (בסיסי)</option>
                <option value="4000-8000">4,000 ₪ - 8,000 ₪ (מתקדם)</option>
                <option value="8000+">8,000 ₪ ומעלה (פרימיום)</option>
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)' }}>ספרו לנו קצת על החזון שלכם</label>
              <textarea rows="4" style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', color: '#fff', outline: 'none', transition: 'border-color 0.3s', resize: 'vertical' }} onFocus={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.4)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', padding: '1.2rem', fontSize: '1.1rem' }}>שליחת פנייה</button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container" style={{ padding: '4rem 0 10rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', fontFamily: "'Cormorant Garamond', serif", marginBottom: '1rem' }}>שאלות נפוצות</h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.1rem' }}>כל מה שרציתם לדעת על תהליך העבודה איתנו</p>
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
                  <span style={{ color: isOpen ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.7)', transition: 'color 0.3s' }}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown color={isOpen ? '#ffffff' : 'rgba(255,255,255,0.3)'} />
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
                        color: 'rgba(255,255,255,0.5)', 
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
    </div>
  );
};

export default Contact;
