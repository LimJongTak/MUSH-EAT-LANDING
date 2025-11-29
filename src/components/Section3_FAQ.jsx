import React from 'react';
import { useLanguage } from '../LanguageContext'; // 다국어 지원 기능 가져오기

const Section3_FAQ = () => {
  const { t } = useLanguage(); // 번역 함수 사용

  return (
    <section>
      <div className="animate-up">
        <h2>{t('faq_title')}</h2>
        <p>{t('faq_desc')}</p>
        {/* 나중에 아코디언(접기/펼치기) 기능 추가 예정 */}
      </div>
    </section>
  );
};

export default Section3_FAQ;