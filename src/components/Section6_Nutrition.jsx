import React from 'react';
import { useLanguage } from '../LanguageContext'; // 다국어 지원 기능 가져오기
import './Section6_Nutrition.css'; // CSS 파일 import

const Section6_Nutrition = () => {
  const { t } = useLanguage(); // 번역 함수 사용

  return (
    <section>
      <div className="animate-up">
        {/* 제목 번역 */}
        <h2>
          {t('nutri_title_1')}<br />
          <span className="nutrition-highlight">{t('nutri_title_2')}</span>
        </h2>
        
        {/* 설명 번역 */}
        <p className="nutrition-desc-main">
          {t('nutri_desc')}
        </p>
        
        {/* 반응형 그리드 적용 */}
        <div className="responsive-grid nutrition-grid">
          {/* 1. 칼로리 */}
          <div>
            <div className="nutrition-value">125<span className="nutrition-unit">kcal</span></div>
            <div className="nutrition-label">{t('nutri_item_1')}</div>
            <div className="nutrition-sub-label">{t('nutri_sub_1')}</div>
          </div>
          
          {/* 2. 단백질 */}
          <div>
            <div className="nutrition-value">11.7<span className="nutrition-unit">g</span></div>
            <div className="nutrition-label">{t('nutri_item_2')}</div>
            <div className="nutrition-sub-label">{t('nutri_sub_2')}</div>
          </div>
          
          {/* 3. 콜레스테롤 */}
          <div>
            <div className="nutrition-value">0<span className="nutrition-unit">mg</span></div>
            <div className="nutrition-label">{t('nutri_item_3')}</div>
            <div className="nutrition-sub-label">{t('nutri_sub_3')}</div>
          </div>
          
          {/* 4. 항생제 */}
          <div>
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