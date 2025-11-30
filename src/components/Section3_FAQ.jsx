import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import './Section3_FAQ.css';

const Section3_FAQ = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqIndices = [1, 2, 3, 4, 5];

  return (
    <section className="faq-section">
      <div className="animate-up faq-container">
        <h2 className="faq-title">{t('faq_title')}</h2>
        <p className="faq-desc">{t('faq_desc')}</p>
        
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