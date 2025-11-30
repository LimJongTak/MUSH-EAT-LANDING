import React from 'react';
import { useLanguage } from '../LanguageContext';
import './Section1_Hero.css';

const Section1_Hero = () => {
  const { t } = useLanguage();

  return (
    <section style={{ position: 'relative' }}>
      <div className="animate-up">
        <p className="hero-tag">
          {t('hero_tag')}
        </p>
        <h1 className="hero-title">
          {t('hero_title_1')}<br />
          {t('hero_title_2')}<br />
          <span className="hero-highlight">{t('hero_title_3')}</span>
        </h1>
        
        <div className="hero-image-wrapper">
          <img 
            src="/images/slicecan.png" 
            alt="머쉬잇 슬라이스 캔 메인 이미지"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Section1_Hero;