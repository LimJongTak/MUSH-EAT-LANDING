import React from 'react';
import { useLanguage } from '../LanguageContext'; // 다국어 지원 기능 가져오기
import './Section4_Variant.css'; // CSS 파일 import

const Section4_Variant = () => {
  const { t } = useLanguage(); // 번역 함수 사용

  return (
    <section>
      <div className="animate-up">
        {/* SHOP NOW 텍스트 */}
        <p className="shop-now-text">{t('shop_now')}</p>
        
        {/* 메인 타이틀: 자연의 기적을 / 만나볼 차례 */}
        <h2>{t('product_title_1')}<br />{t('product_title_2')}</h2>
        
        {/* 이미지 컨테이너 (투명 배경 + 그림자 효과 유지) */}
        <div className="product-image-wrapper">
          <img 
            src="/images/musheatcan.png" 
            alt="머쉬잇 비건 표고 슬라이스 캔"
            className="product-image"
          />
        </div>

        {/* 제품명 */}
        <h3 className="product-name">{t('product_name')}</h3>
        
        {/* 용량 및 칼로리 */}
        <p className="product-spec">{t('product_spec')}</p>
        
        {/* 제품 설명 */}
        <p className="product-desc">{t('product_desc')}</p>

        {/* 구매하기 버튼 */}
        <a href="http://jjpyogo.com/goods/goods_view.php?goodsNo=1000000105" target="_blank" rel="noopener noreferrer">
          <button className="buy-button">{t('btn_buy')}</button>
        </a>
      </div>
    </section>
  );
};

export default Section4_Variant;