import React from 'react';
import { useLanguage } from '../LanguageContext'; // 다국어 지원 기능 가져오기

const Section7_Ingredients = () => {
  const { t } = useLanguage(); // 번역 함수 사용

  return (
    <section>
      <div className="animate-up">
        <h2>{t('ingredients_title')}</h2>
        <p>{t('ingredients_desc')}</p>
        {/* 원형 차트 자리 */}
      </div>
    </section>
  );
};

export default Section7_Ingredients;