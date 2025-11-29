import React from 'react';
import { useLanguage } from '../LanguageContext'; // 다국어 지원 기능 가져오기

const Section4_Variant = () => {
  const { t } = useLanguage(); // 번역 함수 사용

  return (
    <section>
      <div className="animate-up">
        {/* SHOP NOW 텍스트 */}
        <p style={{ color: '#F5D01F', fontWeight: 'bold' }}>{t('shop_now')}</p>
        
        {/* 메인 타이틀: 자연의 기적을 / 만나볼 차례 */}
        <h2>{t('product_title_1')}<br />{t('product_title_2')}</h2>
        
        {/* 이미지 컨테이너 (투명 배경 + 그림자 효과 유지) */}
        <div className="img-placeholder" style={{ height: '350px', border: 'none', background: 'transparent' }}>
          <img 
            src="/images/musheatcan.png" 
            alt="머쉬잇 비건 표고 슬라이스 캔"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain', 
              filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.4))' 
            }}
          />
        </div>

        {/* 제품명 */}
        <h3 style={{ fontSize: '1.8rem', marginTop: '30px', fontWeight: '700' }}>
          {t('product_name')}
        </h3>
        
        {/* 용량 및 칼로리 */}
        <p style={{ fontSize: '1rem', color: '#EEE1A8', marginBottom: '30px' }}>
          {t('product_spec')}
        </p>
        
        {/* 제품 설명 */}
        <p style={{ marginBottom: '40px', fontSize: '1.1rem' }}>
          {t('product_desc')}
        </p>

        {/* 구매하기 버튼 */}
        <a 
          href="http://jjpyogo.com/goods/goods_view.php?goodsNo=1000000105" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <button style={{
            padding: '20px 60px',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            color: '#4C1C24',
            backgroundColor: '#F5D01F',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(245, 208, 31, 0.3)',
            transition: 'transform 0.2s'
          }}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            {t('btn_buy')}
          </button>
        </a>
      </div>
    </section>
  );
};

export default Section4_Variant;