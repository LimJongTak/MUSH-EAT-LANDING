import React from 'react';
import { useLanguage } from '../LanguageContext'; // 다국어 지원 기능 가져오기

const Section1_Hero = () => {
  const { t } = useLanguage(); // 번역 함수 사용

  return (
    <section style={{ position: 'relative' }}>
      <div className="animate-up">
        {/* 태그: [쫄깃한] [훈연향] */}
        <p style={{ color: '#F5D01F', fontWeight: 'bold', marginBottom: '10px' }}>
          {t('hero_tag')}
        </p>
        
        {/* 메인 타이틀: 고기보다 더 / 고기 같은 / 버섯 */}
        <h1 style={{ fontSize: '5rem', lineHeight: '1.1', fontWeight: '900', color: '#fff' }}>
          {t('hero_title_1')}<br />
          {t('hero_title_2')}<br />
          <span style={{ color: '#F5D01F' }}>{t('hero_title_3')}</span>
        </h1>
        
        {/* ▼▼▼ 이미지 영역 (배경 없이 깔끔하게) ▼▼▼ */}
        <div style={{ 
          marginTop: '50px', 
          display: 'flex', 
          justifyContent: 'center',
          width: '100%',
          background: 'transparent'
        }}>
           <img 
             src="/images/slicecan.png" 
             alt="머쉬잇 슬라이스 캔 메인 이미지"
             style={{
               width: '100%',
               maxWidth: '600px', // 이미지 크기 조절
               height: 'auto',
               objectFit: 'contain'
             }} 
           />
        </div>
        {/* ▲▲▲ 이미지 영역 끝 ▲▲▲ */}

      </div>
    </section>
  );
};

export default Section1_Hero;