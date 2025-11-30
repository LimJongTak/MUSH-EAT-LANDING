import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { useScrollAnimation } from './useScrollAnimation'; // 커스텀 훅 import
import './Section3_FAQ.css';

const Section3_FAQ = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(null);
  const [textRef, textInView] = useScrollAnimation();

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqIndices = [1, 2, 3, 4, 5];

  return (
    <section className="faq-section">
      <div ref={textRef} className="animate-up faq-container">
        <h2 className={`faq-title text-reveal ${textInView ? 'in-view' : ''}`} style={{ transitionDelay: '0.2s' }}>{t('faq_title')}</h2>
        <p className={`faq-desc text-reveal ${textInView ? 'in-view' : ''}`} style={{ transitionDelay: '0.4s' }}>{t('faq_desc')}</p>
        
        <div className="faq-list">
          {faqIndices.map((idx) => (
            <div key={idx} className="faq-item">
              <button 
                onClick={() => toggleAccordion(idx)}
                className="faq-button"
              >
                <span>{t(`faq_q${idx}`)}</span>
                <span 
                  className="faq-arrow"
                  style={{ transform: activeIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  ▼
                </span>
              </button>

              <div 
                className="faq-answer-wrapper"
                style={{ maxHeight: activeIndex === idx ? '200px' : '0' }}
              >
                <p className="faq-answer">
                  {t(`faq_a${idx}`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3_FAQ;