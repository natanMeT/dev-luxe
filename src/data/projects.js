export const projects = [
  {
    id: 'safed-bar',
    name: 'מרתף צפת',
    category: 'Hospitality & Luxury',
    description: 'אתר קונספט יוקרתי עבור בר יין וקוקטיילים. תוכנן עם דגש על אווירה סינמטית, אנימציות רכות וחוויית משתמש שמעבירה את התחושה של פרימיום כבר מהקליק הראשון.',
    image: 'https://safed-bar.netlify.app/hero-bg.png',
    link: 'https://safed-bar.netlify.app/',
    details: {
      goal: 'יצירת נוכחות דיגיטלית שמעבירה את האווירה הייחודית של בר יין בוטיקי, תוך עידוד הזמנות שולחן מראש. האתר נדרש לשדר קלאס, מסתורין ויוקרה.',
      designDirection: 'בחרנו בפלטת צבעים כהה המשלבת שחור-פחם עם נגיעות של זהב עתיק ואדום-יין. השתמשנו בטיפוגרפיה קלאסית (Cormorant Garamond) כדי להעניק תחושה של מוסד קולינרי אירופאי ותיק.',
      features: [
        'אנימציות כניסה רכות מבוססות חלל (Scroll Animations)',
        'תפריט קוקטיילים אינטראקטיבי',
        'ממשק הזמנת מקום (Booking UI)',
        'עיצוב קנבס פתוח ללא מסגרות מגבילות'
      ],
      techStack: ['React', 'Vite', 'Framer Motion', 'Vanilla CSS']
    }
  },
  {
    id: 'genesis-vr',
    name: 'Genesis VR',
    category: 'VR & Technology',
    description: 'אתר פרימיום לחברת חוויות מציאות מדומה. עיצוב עתידני, אנימציות 3D, חלקיקים מרחפים וחוויה סינמטית מלאה שלוקחת את המשתמש למסע דיגיטלי.',
    image: '/genesis-vr-preview.png',
    link: 'https://vr-bible.netlify.app/',
    details: {
      goal: 'העברת החוויה של מציאות מדומה (VR) אל תוך מסך דו-מימדי. המטרה הייתה לגרום למשתמש להרגיש שהוא כבר בתוך עולם וירטואלי ברגע שהוא נכנס לאתר.',
      designDirection: 'שילוב של אסתטיקה עתידנית, צבעי נאון (סגול-כחול) על רקע חלל עמוק. שימוש באנימציות ריחוף ו-WebGL כדי ליצור תחושת עומק ומימדיות.',
      features: [
        'רקע חלקיקים תלת-מימדי (Particles)',
        'חוויית גלילה סינמטית עתירת גרפיקה',
        'ממשק תצוגת חוויות אינטראקטיבי',
        'אופטימיזציית ביצועים כבדה לטעינה חלקה'
      ],
      techStack: ['React', 'WebGL / Three.js', 'Framer Motion', 'Tailwind / CSS Modules']
    }
  }
];
