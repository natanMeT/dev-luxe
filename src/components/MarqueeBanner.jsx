import React from 'react';
import './MarqueeBanner.css';

const MarqueeBanner = () => {
  const items = [
    'עיצוב יוקרתי',
    'חוויית משתמש פרימיום',
    'אנימציות סינמטיות',
    'פיתוח מותאם אישית',
    'מיתוג דיגיטלי',
    'AI Visual Content',
    'React & Next.js',
  ];

  // Duplicate items enough for seamless loop
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="marquee-section" dir="ltr">
      <div className="marquee-glow"></div>
      <div className="marquee-track">
        <div className="marquee-content" aria-hidden="false">
          {repeated.map((item, i) => (
            <span key={`a-${i}`} className="marquee-item">
              {item}
              <span className="marquee-dot">✦</span>
            </span>
          ))}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {repeated.map((item, i) => (
            <span key={`b-${i}`} className="marquee-item">
              {item}
              <span className="marquee-dot">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeBanner;
