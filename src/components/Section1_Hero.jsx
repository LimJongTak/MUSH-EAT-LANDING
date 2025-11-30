import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../LanguageContext';
import './Section1_Hero.css';

const Section1_Hero = () => {
  const { t } = useLanguage();
  const imageRef = useRef(null);
  const [imageOpacity, setImageOpacity] = useState(1);

  useEffect(() => {
    // 0.0부터 1.0까지 101개의 threshold 배열 생성 (애니메이션을 부드럽게 하기 위함)
    const thresholds = Array.from({ length: 101 }, (_, i) => i / 100);

    const observer = new IntersectionObserver(
      ([entry]) => {
        // intersectionRatio를 제곱하여 초반에 더 빠르게 투명해지도록 강도를 높임
        // 예: 이미지가 50% 보일 때(0.5), 투명도는 25%(0.25)가 됨
        const intensity = 2; // 강도를 높이려면 이 숫자를 올리세요 (예: 3, 4)
        setImageOpacity(Math.pow(entry.intersectionRatio, intensity));
      },
      // threshold를 여러 개 설정하여 intersectionRatio가 변경될 때마다 콜백 실행
      // 이를 통해 스크롤에 따라 부드러운 애니메이션 효과를 줌
      { threshold: thresholds }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    // 컴포넌트가 언마운트될 때 observer 정리
    return () => observer.disconnect();
  }, []);

  return (
    <section style={{ position: 'relative' }}>
      <div className="animate-up">
        <p className="hero-tag">
          {t('hero_tag')}
        </p>
        <h1 className="hero-title">
          {t('hero_title_1')}<br />
          {t('hero_title_2')}<br />
          <span className="hero-highlight">{t('hero_title_3')}</span>
        </h1>
        
        <div className="hero-image-wrapper">
          <img 
            ref={imageRef}
            src="/images/slicecan.png" 
            alt="머쉬잇 슬라이스 캔 메인 이미지"
            className="hero-image"
            style={{ opacity: imageOpacity, transform: `scale(${imageOpacity})` }}
          />
        </div>
      </div>
    </section>
  );
};

export default Section1_Hero;