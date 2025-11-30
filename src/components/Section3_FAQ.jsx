import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext'; // 다국어 지원 기능

const Section3_FAQ = () => {
  const { t } = useLanguage();
  
  // 현재 열려있는 질문의 인덱스를 저장 (null이면 모두 닫힘)
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // 질문 개수 (5개)
  const faqIndices = [1, 2, 3, 4, 5];

  return (
    <section style={{ backgroundColor: '#4C1C24' }}> {/* 배경색 명시 */}
      <div className="animate-up" style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ marginBottom: '10px' }}>{t('faq_title')}</h2>
        <p style={{ marginBottom: '50px', color: '#EEE1A8' }}>{t('faq_desc')}</p>
        
        <div className="faq-list" style={{ textAlign: 'left' }}>
          {faqIndices.map((idx) => (
            <div 
              key={idx} 
              className="faq-item"
              style={{
                borderBottom: '1px solid rgba(255,255,255,0.2)',
                marginBottom: '10px'
              }}
            >
              {/* 질문 부분 (클릭 가능) */}
              <button 
                onClick={() => toggleAccordion(idx)}
                style={{
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  padding: '20px 10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  color: '#fff',
                  textAlign: 'left', // 텍스트 왼쪽 정렬
                  fontSize: '1.2rem',
                  fontWeight: 'bold'
                }}
              >
                <span>{t(`faq_q${idx}`)}</span>
                {/* 화살표 아이콘 (열리면 회전) */}
                <span style={{ 
                  transform: activeIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                  fontSize: '1.5rem',
                  color: '#F5D01F'
                }}>
                  ▼
                </span>
              </button>

              {/* 답변 부분 (아코디언 효과) */}
              <div 
                style={{
                  maxHeight: activeIndex === idx ? '200px' : '0', // 열리면 높이 늘어남
                  overflow: 'hidden',
                  transition: 'max-height 0.4s ease-in-out',
                  backgroundColor: 'rgba(0,0,0,0.2)', // 답변 배경을 약간 어둡게
                  borderRadius: '8px'
                }}
              >
                <p style={{ 
                  padding: '20px', 
                  fontSize: '1rem', 
                  color: '#EEE1A8',
                  lineHeight: '1.6',
                  margin: 0
                }}>
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