import React from 'react';

const Section4_Variant = () => {
  return (
    <section>
      <div className="animate-up">
        <p style={{ color: '#F5D01F', fontWeight: 'bold' }}>SHOP NOW</p>
        <h2>자연의 기적을<br />만나볼 차례</h2>
        
        {/* 이미지 컨테이너 (투명 배경) */}
        <div className="img-placeholder" style={{ height: '350px', border: 'none', background: 'transparent' }}>
          
          {/* ▼▼▼ 여기를 수정했습니다 (이미지 태그 추가) ▼▼▼ */}
          <img 
            src="/images/musheatcan.png"  // public/images 폴더 경로
            alt="머쉬잇 비건 표고 슬라이스 캔"
            style={{
              width: '100%',       // 컨테이너 너비에 맞춤
              height: '100%',      // 컨테이너 높이에 맞춤
              objectFit: 'contain', // 비율을 유지하면서 잘리지 않게 표시
              // (선택사항) 제품을 입체적으로 보이게 하는 그림자 효과
              filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.4))' 
            }}
          />
           {/* ▲▲▲ 여기까지 수정했습니다 ▲▲▲ */}

        </div>

        <h3 style={{ fontSize: '1.8rem', marginTop: '30px', fontWeight: '700' }}>
          머쉬잇(Mush-Eat) 비건 표고 슬라이스
        </h3>
        <p style={{ fontSize: '1rem', color: '#EEE1A8', marginBottom: '30px' }}>
          190g (125kcal)
        </p>
        
        <p style={{ marginBottom: '40px', fontSize: '1.1rem' }}>
          죄송합니다. 한 번 맛보면 일반 햄으로 돌아갈 수 없습니다.
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
            구매하기
          </button>
        </a>
      </div>
    </section>
  );
};

export default Section4_Variant;