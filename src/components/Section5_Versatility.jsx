import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../LanguageContext'; // 다국어 지원 기능 가져오기
import './Section5_Versatility.css'; // CSS 파일 import

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
  const wrapperRef = useRef(null);
  const [wrapperOpacity, setWrapperOpacity] = useState(1);

  // 3. Intersection Observer 로직
  useEffect(() => {
    const thresholds = Array.from({ length: 101 }, (_, i) => i / 100);
    const observer = new IntersectionObserver(
      ([entry]) => {
        const intensity = 2;
        setWrapperOpacity(Math.pow(entry.intersectionRatio, intensity));
      },
      { threshold: thresholds }
    );

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => observer.disconnect();
  }, []);


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
        <div 
          ref={wrapperRef}
          className="slider-wrapper"
          style={{ opacity: wrapperOpacity, transform: `scale(${wrapperOpacity})` }}
        >
          
          {/* 슬라이드 트랙 */}
          <div style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
          className="slider-track">
            {images.map((img, index) => (
              <div key={index} className="slide-item">
                <img 
                  src={img} 
                  alt={`활용 예시 ${index + 1}`}
                  className="slide-image"
                />
              </div>
            ))}
          </div>

          {/* 하단 점 네비게이션 */}
          <div className="slider-dots">
            {images.map((_, index) => (
              <div 
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`dot ${currentIndex === index ? 'active' : ''}`}
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