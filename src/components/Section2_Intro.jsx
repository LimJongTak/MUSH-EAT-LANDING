import React from 'react';
import { useLanguage } from '../LanguageContext';
import './Section2_Intro.css';

const Section2_Intro = () => {
  const { t } = useLanguage();

  return (
    <section>
      <div className="animate-up">
        <h2>
          {t('intro_title_1')}<br />
          <span className="intro-highlight">{t('intro_title_2')}</span>
        </h2>
        <p className="intro-desc">
          {t('intro_desc_1')}<br /><br />
          {t('intro_desc_2')}
        </p>
        
        <div className="intro-image-wrapper">
          <img 
            src="/images/slice.png" 
            alt="머쉬잇 슬라이스 구이 조리예" 
            className="intro-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Section2_Intro;