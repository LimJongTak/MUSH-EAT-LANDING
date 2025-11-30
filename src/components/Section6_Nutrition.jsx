import React from 'react';
import { useLanguage } from '../LanguageContext'; // 다국어 지원 기능 가져오기
import { useScrollAnimation } from './useScrollAnimation'; // 커스텀 훅 import
import './Section6_Nutrition.css'; // CSS 파일 import

const Section6_Nutrition = () => {
  const { t } = useLanguage(); // 번역 함수 사용
  const [textRef, textInView] = useScrollAnimation();

  return (
    <section>
      <div ref={textRef} className="animate-up">
        {/* 제목 번역 */}
        <h2 className={`text-reveal ${textInView ? 'in-view' : ''}`} style={{ transitionDelay: '0.2s' }}>
          <span style={{ display: 'block' }}>{t('nutri_title_1')}</span>
          <span className="nutrition-highlight" style={{ display: 'block' }}>{t('nutri_title_2')}</span>
        </h2>
        
        {/* 설명 번역 */}
        <p className={`nutrition-desc-main text-reveal ${textInView ? 'in-view' : ''}`} style={{ transitionDelay: '0.4s' }}>
          {t('nutri_desc')}
        </p>
        
        {/* 반응형 그리드 적용 */}
        <div className="responsive-grid nutrition-grid">
          {/* 1. 칼로리 */}
          <div className={`text-reveal ${textInView ? 'in-view' : ''}`} style={{ transitionDelay: '0.6s' }}>
            <div className="nutrition-value">125<span className="nutrition-unit">kcal</span></div>
            <div className="nutrition-label">{t('nutri_item_1')}</div>
            <div className="nutrition-sub-label">{t('nutri_sub_1')}</div>
          </div>
          
          {/* 2. 단백질 */}
          <div className={`text-reveal ${textInView ? 'in-view' : ''}`} style={{ transitionDelay: '0.8s' }}>
            <div className="nutrition-value">11.7<span className="nutrition-unit">g</span></div>
            <div className="nutrition-label">{t('nutri_item_2')}</div>
            <div className="nutrition-sub-label">{t('nutri_sub_2')}</div>
          </div>
          
          {/* 3. 콜레스테롤 */}
          <div className={`text-reveal ${textInView ? 'in-view' : ''}`} style={{ transitionDelay: '1.0s' }}>
            <div className="nutrition-value">0<span className="nutrition-unit">mg</span></div>
            <div className="nutrition-label">{t('nutri_item_3')}</div>
            <div className="nutrition-sub-label">{t('nutri_sub_3')}</div>
          </div>
          
          {/* 4. 항생제 */}
          <div className={`text-reveal ${textInView ? 'in-view' : ''}`} style={{ transitionDelay: '1.2s' }}>
            <div className="nutrition-value">NO</div>
            <div className="nutrition-label">{t('nutri_item_4')}</div>
            <div className="nutrition-sub-label">{t('nutri_sub_4')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6_Nutrition;