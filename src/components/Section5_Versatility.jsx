import React, { useState, useEffect } from 'react';

const Section5_Versatility = () => {
  // 1. 사용할 이미지 목록 배열
  const images = [
    "/images/pasta.png",
    "/images/sandwich.png",
    "/images/rice.png"
  ];

  // 2. 현재 몇 번째 이미지를 보여줄지 상태 관리 (0, 1, 2)
  const [currentIndex, setCurrentIndex] = useState(0);

  // 3. 5초마다 자동으로 다음 이미지로 넘어가는 타이머 설정
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5000ms = 5초

    return () => clearInterval(interval); // 컴포넌트가 사라질 때 타이머 정리
  }, [images.length]);

  return (
    <section>
      <div className="animate-up">
        <h2>당신의 식탁 위,<br />모든 순간의 주인공</h2>
        <p>
          바쁜 아침의 샌드위치부터, 아이들을 위한 건강한 볶음밥, 그리고 맥주 한 잔과 곁들이는 근사한 안주까지. 
          머쉬잇은 어떤 요리와도 완벽하게 어우러집니다.<br /><br />
          굽고, 볶고, 끓이세요. 요리의 한계는 없습니다.
        </p>

        {/* ▼▼▼ 슬라이드 이미지 영역 시작 ▼▼▼ */}
        <div style={{
          marginTop: '50px',
          width: '100%',
          maxWidth: '600px', // 슬라이더 전체 너비 제한
          height: '400px',   // 슬라이더 높이 고정
          margin: '50px auto 0',
          overflow: 'hidden', // 옆으로 넘어가는 이미지 숨김
          borderRadius: '20px', // 둥근 모서리
          position: 'relative', // 내부 요소 배치 기준
          boxShadow: '0 20px 50px rgba(0,0,0,0.3)', // 그림자 효과
          backgroundColor: 'rgba(0,0,0,0.1)' // 이미지가 투명할 경우를 대비한 배경
        }}>
          
          {/* 슬라이드 트랙 (기차처럼 가로로 길게 늘어선 형태) */}
          <div style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            // 핵심: currentIndex에 따라 왼쪽으로 이동 (0%, -100%, -200%)
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: 'transform 1s ease-in-out' // 1초 동안 부드럽게 이동
          }}>
            {images.map((img, index) => (
              <div key={index} style={{ 
                minWidth: '100%', // 각 이미지가 부모 너비를 꽉 채움
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src={img} 
                  alt={`활용 예시 ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover' // 이미지가 영역을 꽉 채우도록 (짤려도 됨)
                    // 만약 이미지가 짤리는 게 싫고 전체가 다 보여야 한다면 'contain'으로 변경하세요
                  }} 
                />
              </div>
            ))}
          </div>

          {/* (선택사항) 하단 점 네비게이션 */}
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '10px'
          }}>
            {images.map((_, index) => (
              <div 
                key={index}
                onClick={() => setCurrentIndex(index)} // 클릭 시 해당 사진으로 이동
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: currentIndex === index ? '#F5D01F' : 'rgba(255,255,255,0.5)',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s'
                }}
              />
            ))}
          </div>

        </div>
        {/* ▲▲▲ 슬라이드 이미지 영역 끝 ▲▲▲ */}

      </div>
    </section>
  );
};

export default Section5_Versatility;