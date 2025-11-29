import React from 'react';

const Section2_Intro = () => {
  return (
    <section>
      <div className="animate-up">
        <h2>
          의심하지 마세요.<br />
          <span style={{ color: '#EEE1A8' }}>당신의 입맛은 틀리지 않았습니다.</span>
        </h2>
        <p style={{ marginBottom: '30px' }}>
          햄을 굽는 지글거리는 소리, 코끝을 자극하는 훈연 향, 씹는 순간 터지는 풍부한 육즙까지.<br/>
          이 모든 것이 버섯으로 가능하다면 믿으시겠습니까?<br /><br />
          머쉬잇은 장흥의 숲에서 자란 표고버섯의 '천연 감칠맛(Guanylic Acid)'으로 고기의 풍미를 완벽하게 재현했습니다. 
          사람들은 이것을 "기적"이라 부르지만, 우리는 이것을 <strong style={{ color: '#F5D01F' }}>"머쉬잇(Mush-Eat)"</strong>이라 부릅니다.
        </p>
        
        {/* ▼▼▼ 이미지 영역 수정됨 ▼▼▼ */}
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
              // borderRadius와 boxShadow를 제거했습니다.
              objectFit: 'contain' // 이미지가 잘리지 않고 전체가 다 보이도록 설정
            }}
          />
        </div>
        {/* ▲▲▲ 수정 끝 ▲▲▲ */}

      </div>
    </section>
  );
};

export default Section2_Intro;