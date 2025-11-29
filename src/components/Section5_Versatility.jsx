import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext'; // 다국어 지원 기능 가져오기

const Section5_Versatility = () => {
  const { t } = useLanguage(); // 번역 함수 사용

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
        {/* 다국어 번역 적용된 제목 */}
        <h2>{t('usage_title')}</h2>
        
        {/* 다국어 번역 적용된 설명 */}
        <p>
          {t('usage_desc')}
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
          backgroundColor: 'rgba(0,0,0,0.1)', // 이미지가 투명할 경우를 대비한 배경
          
          // [핵심 수정] 아랍어(RTL) 환경에서도 슬라이드는 왼쪽->오른쪽(LTR) 구조 유지
          direction: 'ltr' 
        }}>
          
          {/* 슬라이드 트랙 */}
          <div style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            // LTR 기준이므로 기존 로직(-100%씩 이동)이 정상 작동함
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: 'transform 1s ease-in-out'
          }}>
            {images.map((img, index) => (
              <div key={index} style={{ 
                minWidth: '100%',
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
                    objectFit: 'cover'
                  }} 
                />
              </div>
            ))}
          </div>

          {/* 하단 점 네비게이션 */}
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
                onClick={() => setCurrentIndex(index)}
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