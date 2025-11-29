import React from 'react';
import { useLanguage } from '../LanguageContext'; // 다국어 지원 기능 가져오기

const Section2_Intro = () => {
  const { t } = useLanguage(); // 번역 함수 사용

  return (
    <section>
      <div className="animate-up">
        {/* 제목 부분 번역 적용 */}
        <h2>
          {t('intro_title_1')}<br />
          <span style={{ color: '#EEE1A8' }}>{t('intro_title_2')}</span>
        </h2>
        
        {/* 본문 부분 번역 적용 */}
        <p style={{ marginBottom: '30px' }}>
          {t('intro_desc_1')}<br /><br />
          {t('intro_desc_2')}
        </p>
        
        {/* ▼▼▼ 이미지 영역 (배경/그림자 없이 깔끔하게 유지) ▼▼▼ */}
        <div style={{ 
          marginTop: '50px', 
          display: 'flex', 
          justifyContent: 'center',
          width: '100%' 
        }}>
          <img 
            src="/images/slice.png" 
            alt="머쉬잇 슬라이스 구이 조리예" 
            style={{
              width: '100%',
              maxWidth: '700px',
              height: 'auto',
              // borderRadius와 boxShadow 제거됨 (누끼 느낌)
              objectFit: 'contain'
            }}
          />
        </div>
        {/* ▲▲▲ 이미지 영역 끝 ▲▲▲ */}

      </div>
    </section>
  );
};

export default Section2_Intro;