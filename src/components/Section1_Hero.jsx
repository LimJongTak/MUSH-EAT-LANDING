import React from 'react';

const Section1_Hero = () => {
  return (
    <section style={{ position: 'relative' }}>
      <div className="animate-up">
        <p style={{ color: '#F5D01F', fontWeight: 'bold', marginBottom: '10px' }}>
          [쫄깃한] [훈연향]
        </p>
        <h1 style={{ fontSize: '5rem', lineHeight: '1.1', fontWeight: '900', color: '#fff' }}>
          고기보다 더<br />
          고기 같은<br />
          <span style={{ color: '#F5D01F' }}>버 섯</span>
        </h1>
        
        {/* ▼▼▼ 이미지 영역 수정됨 ▼▼▼ */}
        <div style={{ 
          marginTop: '50px', 
          display: 'flex', 
          justifyContent: 'center',
          width: '100%',
          background: 'transparent' // 배경 투명
        }}>
           <img 
             src="/images/slicecan.png" 
             alt="머쉬잇 슬라이스 캔 메인 이미지"
             style={{
               width: '100%',
               maxWidth: '600px', // 메인 이미지 크기 조절 (너무 크면 줄이세요)
               height: 'auto',
               objectFit: 'contain' // 비율 유지하며 잘리지 않게
             }} 
           />
        </div>
        {/* ▲▲▲ 수정 끝 ▲▲▲ */}

      </div>
    </section>
  );
};

export default Section1_Hero;