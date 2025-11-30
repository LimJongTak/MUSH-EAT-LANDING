import React from 'react';
import { useLanguage } from '../LanguageContext';
import { useScrollAnimation } from './useScrollAnimation';
import './Section6_Nutrition.css';

const Section6_Nutrition = () => {
  const { t } = useLanguage();
  const [textRef, textInView] = useScrollAnimation();

  return (
    <section>
      <div ref={textRef} className="animate-up">
        {/* 제목 */}
        <h2 className={`text-reveal ${textInView ? 'in-view' : ''}`} style={{ transitionDelay: '0.2s' }}>
          <span style={{ display: 'block' }}>{t('nutri_title_1')}</span>
          <span className="nutrition-highlight" style={{ display: 'block' }}>{t('nutri_title_2')}</span>
        </h2>
        
        {/* 설명 */}
        <p className={`nutrition-desc-main text-reveal ${textInView ? 'in-view' : ''}`} style={{ transitionDelay: '0.4s' }}>
          {t('nutri_desc')}
        </p>
        
        {/* 수정됨: responsive-grid 삭제하고 nutrition-grid만 사용 */}
        <div className="s6-nutrition-grid"> 
          
          {/* 1. 칼로리 */}
          <div className={`text-reveal ${textInView ? 'in-view' : ''}`} style={{ transitionDelay: '0.6s' }}>
            <div className="s6-nutrition-value">125<span className="s6-nutrition-unit">kcal</span></div>
            <div className="s6-nutrition-label">{t('nutri_item_1')}</div>
            <div className="s6-nutrition-sub-label">{t('nutri_sub_1')}</div>
          </div>
          
          {/* 2. 단백질 */}
          <div className={`text-reveal ${textInView ? 'in-view' : ''}`} style={{ transitionDelay: '0.8s' }}>
            <div className="s6-nutrition-value">11.7<span className="s6-nutrition-unit">g</span></div>
            <div className="s6-nutrition-label">{t('nutri_item_2')}</div>
            <div className="s6-nutrition-sub-label">{t('nutri_sub_2')}</div>
          </div>
          
          {/* 3. 콜레스테롤 */}
          <div className={`text-reveal ${textInView ? 'in-view' : ''}`} style={{ transitionDelay: '1.0s' }}>
            <div className="s6-nutrition-value">0<span className="s6-nutrition-unit">mg</span></div>
            <div className="s6-nutrition-label">{t('nutri_item_3')}</div>
            <div className="s6-nutrition-sub-label">{t('nutri_sub_3')}</div>
          </div>
          
          {/* 4. 항생제 */}
          <div className={`text-reveal ${textInView ? 'in-view' : ''}`} style={{ transitionDelay: '1.2s' }}>
            <div className="s6-nutrition-value">NO</div>
            <div className="s6-nutrition-label">{t('nutri_item_4')}</div>
            <div className="s6-nutrition-sub-label">{t('nutri_sub_4')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6_Nutrition;