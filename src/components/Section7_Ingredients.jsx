import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext'; // 다국어 지원 기능 가져오기
import { useScrollAnimation } from './useScrollAnimation'; // 커스텀 훅 import
import ProductLabel from './ProductLabel'; // 제품 정보 컴포넌트 import
import IngredientChart from './IngredientChart'; // 원형 차트 컴포넌트 import
import './Section7_Ingredients.css'; // CSS 파일 import

const Section7_Ingredients = () => {
  const { t } = useLanguage(); // 번역 함수와 현재 언어 코드 가져오기
  const [textRef, textInView] = useScrollAnimation();
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section className="ingredients-section-wrapper">
      <div className="ingredients-container">
        {/* 1. 왼쪽 텍스트 영역 */}
        <div ref={textRef} className="ingredients-text-content">
          <h2 className={`ingredients-title text-reveal ${textInView ? 'in-view' : ''}`} style={{ transitionDelay: '0.2s' }}>{t('ingredients_title')}</h2>
          <p className={`ingredients-desc text-reveal ${textInView ? 'in-view' : ''}`} style={{ transitionDelay: '0.4s' }}>{t('ingredients_desc')}</p>
        </div>

        {/* 2. 오른쪽 카드 영역 */}
        <div className="flip-card-container">
          <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardFlip}>
            <div className="flip-card-front">
              <IngredientChart />
            </div>
            <div className="flip-card-back">
              <ProductLabel side="back" />
            </div>
          </div>
          {/* 버튼을 카드 컨테이너의 직접적인 자식으로 이동 */}
          <button className="flip-button" onClick={handleCardFlip}>{t('ingredients_btn_show')}</button>
        </div>
      </div>
    </section>
  );
};

export default Section7_Ingredients;