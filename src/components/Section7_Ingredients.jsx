import React from 'react';
import { useLanguage } from '../LanguageContext'; // 다국어 지원 기능 가져오기
import { useScrollAnimation } from './useScrollAnimation'; // 커스텀 훅 import
import './Section7_Ingredients.css'; // CSS 파일 import

const Section7_Ingredients = () => {
  const { t } = useLanguage(); // 번역 함수 사용
  const [textRef, textInView] = useScrollAnimation();

  return (
    <section>
      <div ref={textRef} className="animate-up">
        <h2 className={`ingredients-title text-reveal ${textInView ? 'in-view' : ''}`} style={{ transitionDelay: '0.2s' }}>{t('ingredients_title')}</h2>
        <p className={`ingredients-desc text-reveal ${textInView ? 'in-view' : ''}`} style={{ transitionDelay: '0.4s' }}>{t('ingredients_desc')}</p>
        {/* 원형 차트 자리 */}
      </div>
    </section>
  );
};

export default Section7_Ingredients;