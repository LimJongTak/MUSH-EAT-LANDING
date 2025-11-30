import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../LanguageContext';
import { useScrollAnimation } from './useScrollAnimation'; // 커스텀 훅 import
import './Section2_Intro.css';

const Section2_Intro = () => {
  const { t } = useLanguage();
  const [textRef, textInView] = useScrollAnimation();

  const imageRef = useRef(null);
  const [imageOpacity, setImageOpacity] = useState(1);

  useEffect(() => {
    // 0.0부터 1.0까지 101개의 threshold 배열 생성 (애니메이션을 부드럽게 하기 위함)
    const thresholds = Array.from({ length: 101 }, (_, i) => i / 100);

    const observer = new IntersectionObserver(
      ([entry]) => {
        // intersectionRatio를 제곱하여 초반에 더 빠르게 투명해지도록 강도를 높임
        const intensity = 2; // 강도를 높이려면 이 숫자를 올리세요 (예: 3, 4)
        setImageOpacity(Math.pow(entry.intersectionRatio, intensity));
      },
      // threshold를 여러 개 설정하여 intersectionRatio가 변경될 때마다 콜백 실행
      { threshold: thresholds }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    // 컴포넌트가 언마운트될 때 observer 정리
    return () => observer.disconnect();
  }, []);

  return (
    <section>
      <div ref={textRef} className="animate-up">
        <h2 className={`text-reveal ${textInView ? 'in-view' : ''}`} style={{ transitionDelay: '0.2s' }}>
          <span style={{ display: 'block' }}>{t('intro_title_1')}</span>
          <span className="intro-highlight" style={{ display: 'block' }}>{t('intro_title_2')}</span>
        </h2>
        <p 
          className={`intro-desc text-reveal ${textInView ? 'in-view' : ''}`}
          style={{ transitionDelay: '0.4s' }}
        >
          <span style={{ display: 'block' }}>{t('intro_desc_1')}</span>
          <br />
          <span style={{ display: 'block' }}>{t('intro_desc_2')}</span>
        </p>
        
        <div className="intro-image-wrapper">
          <img 
            ref={imageRef}
            src="/images/slice.png" 
            alt="머쉬잇 슬라이스 구이 조리예" 
            className="intro-image"
            style={{ opacity: imageOpacity, transform: `scale(${imageOpacity})` }}
          />
        </div>
      </div>
    </section>
  );
};

export default Section2_Intro;