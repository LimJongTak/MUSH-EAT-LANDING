import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLanguage } from '../LanguageContext'; // 다국어 지원 기능 가져오기
import { useScrollAnimation } from './useScrollAnimation'; // 커스텀 훅 import
import './Section5_Versatility.css'; // CSS 파일 import

const Section5_Versatility = () => {
  const { t } = useLanguage(); // 번역 함수 사용
  const slideCount = 3; // 이미지 개수

  // 1. 사용할 이미지 목록 배열
  const images = [
    "/images/pasta.png",
    "/images/sandwich.png",
    "/images/rice.png"
  ];

  // 2. 현재 몇 번째 이미지를 보여줄지 상태 관리 (0, 1, 2)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textRef, textInView] = useScrollAnimation();
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);

  // 드래그/스와이프 관련 Ref 추가
  const isDragging = useRef(false);
  const startPos = useRef(0);
  const currentTranslate = useRef(0);
  const prevTranslate = useRef(0);
  const animationRef = useRef(null);

  // 자동 슬라이드 기능
  useEffect(() => {
    const interval = setInterval(() => {
      // 드래그 중이 아닐 때만 자동 슬라이드 실행
      if (!isDragging.current) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
      }
    }, 5000); // 5초마다 자동 슬라이드

    return () => clearInterval(interval); // 컴포넌트가 사라질 때 타이머 정리
  }, [slideCount]);

  // 슬라이더 위치를 설정하는 함수
  const setSliderPosition = useCallback(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${currentTranslate.current}px)`;
    }
  }, []);

  // 드래그 중 애니메이션을 처리하는 함수
  const animation = useCallback(() => {
    setSliderPosition();
    if (isDragging.current) {
      animationRef.current = requestAnimationFrame(animation);
    }
  }, [setSliderPosition]);

  // 마우스/터치 이벤트에서 X 좌표를 가져오는 함수
  const getPositionX = (event) => {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
  };

  // 드래그 시작 이벤트 핸들러
  const dragStart = useCallback((index) => (event) => {
    event.preventDefault(); // 이미지 드래그 시 고스트 이미지 방지
    isDragging.current = true;
    startPos.current = getPositionX(event);
    prevTranslate.current = -index * wrapperRef.current.offsetWidth;
    trackRef.current.style.transition = 'none'; // 드래그 중에는 transition 비활성화
    animationRef.current = requestAnimationFrame(animation);
  }, [animation]);

  // 드래그 중 이동 이벤트 핸들러
  const dragMove = useCallback((event) => {
    if (isDragging.current) {
      const currentPosition = getPositionX(event);
      currentTranslate.current = prevTranslate.current + currentPosition - startPos.current;
    }
  }, []);

  // 드래그 종료 이벤트 핸들러
  const dragEnd = useCallback(() => {
    cancelAnimationFrame(animationRef.current);
    isDragging.current = false;
    const movedBy = currentTranslate.current - prevTranslate.current;

    // 50px 이상 움직였을 때 슬라이드 넘김 (무한 순환 로직 적용)
    if (movedBy < -50) { // 왼쪽으로 스와이프 (다음 슬라이드)
      setCurrentIndex((prev) => (prev + 1) % slideCount);
    } else if (movedBy > 50) { // 오른쪽으로 스와이프 (이전 슬라이드)
      setCurrentIndex((prev) => (prev - 1 + slideCount) % slideCount);
    } else {
      // 스와이프 거리가 짧으면 원래 위치로 복귀
      trackRef.current.style.transform = `translateX(${prevTranslate.current}px)`;
    }

    // 드래그 종료 시 항상 transition을 다시 활성화합니다.
    trackRef.current.style.transition = 'transform 1s ease-in-out';
  }, [currentIndex, slideCount]);

  // currentIndex가 변경될 때 슬라이더 위치 업데이트 및 이벤트 리스너 설정
  useEffect(() => {
    const track = trackRef.current;
    if (!track || !wrapperRef.current) return;

    const slideWidth = wrapperRef.current.offsetWidth;
    currentTranslate.current = -currentIndex * slideWidth;
    prevTranslate.current = currentTranslate.current;
    track.style.transform = `translateX(${currentTranslate.current}px)`;

    // 이벤트 리스너 함수 생성
    const handleTouchStart = dragStart(currentIndex);
    const handleMouseDown = dragStart(currentIndex);

    // 이벤트 리스너 등록
    track.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', dragMove, { passive: true });
    document.addEventListener('touchend', dragEnd);
    track.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', dragMove);
    document.addEventListener('mouseup', dragEnd);
    track.addEventListener('mouseleave', dragEnd);

    // 클린업 함수: 컴포넌트 언마운트 또는 currentIndex 변경 시 이벤트 리스너 제거
    return () => {
      track.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', dragMove);
      document.removeEventListener('touchend', dragEnd);
      track.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', dragMove);
      document.removeEventListener('mouseup', dragEnd);
      track.removeEventListener('mouseleave', dragEnd);
    };
  }, [currentIndex, dragStart, dragMove, dragEnd]);

  return (
    <section>
      <div ref={textRef} className="animate-up">
        {/* 다국어 번역 적용된 제목 */}
        <h2 className={`text-reveal ${textInView ? 'in-view' : ''}`} style={{ transitionDelay: '0.2s' }}>{t('usage_title')}</h2>
        
        {/* 다국어 번역 적용된 설명 */}
        <p className={`text-reveal ${textInView ? 'in-view' : ''}`} style={{ transitionDelay: '0.4s' }}>
          {t('usage_desc')}
        </p>

        {/* ▼▼▼ 슬라이드 이미지 영역 시작 ▼▼▼ */}
        <div 
          ref={wrapperRef}
          className="slider-wrapper"
        >
          
          {/* 슬라이드 트랙 */}
          <div 
            ref={trackRef}
            className="slider-track"
          >
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