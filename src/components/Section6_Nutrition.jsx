import React from 'react';
import { useLanguage } from '../LanguageContext'; // 다국어 지원 기능 가져오기

const Section6_Nutrition = () => {
  const { t } = useLanguage(); // 번역 함수 사용

  // 숫자 스타일
  const numStyle = { fontSize: 'clamp(3rem, 5vw, 4rem)', fontWeight: '900', color: '#F5D01F', lineHeight: '1' };
  const labelStyle = { fontSize: '1.2rem', fontWeight: 'bold', color: '#fff', marginTop: '10px' };
  const descStyle = { fontSize: '0.9rem', color: '#EEE1A8' };

  return (
    <section>
      <div className="animate-up">
        {/* 제목 번역 */}
        <h2>
          {t('nutri_title_1')}<br />
          <span style={{ color: '#F5D01F' }}>{t('nutri_title_2')}</span>
        </h2>
        
        {/* 설명 번역 */}
        <p style={{ marginBottom: '60px' }}>
          {t('nutri_desc')}
        </p>
        
        {/* 반응형 그리드 적용 */}
        <div className="responsive-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', // 기본(데스크탑)은 2열
          gap: '40px', 
          width: '100%', 
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {/* 1. 칼로리 */}
          <div>
            <div style={numStyle}>125<span style={{fontSize:'2rem'}}>kcal</span></div>
            <div style={labelStyle}>{t('nutri_item_1')}</div>
            <div style={descStyle}>{t('nutri_sub_1')}</div>
          </div>
          
          {/* 2. 단백질 */}
          <div>
            <div style={numStyle}>11.7<span style={{fontSize:'2rem'}}>g</span></div>
            <div style={labelStyle}>{t('nutri_item_2')}</div>
            <div style={descStyle}>{t('nutri_sub_2')}</div>
          </div>
          
          {/* 3. 콜레스테롤 */}
          <div>
            <div style={numStyle}>0<span style={{fontSize:'2rem'}}>mg</span></div>
            <div style={labelStyle}>{t('nutri_item_3')}</div>
            <div style={descStyle}>{t('nutri_sub_3')}</div>
          </div>
          
          {/* 4. 항생제 */}
          <div>
            <div style={numStyle}>NO</div>
            <div style={labelStyle}>{t('nutri_item_4')}</div>
            <div style={descStyle}>{t('nutri_sub_4')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6_Nutrition;