import { useState, useEffect, useRef } from 'react';

/**
 * IntersectionObserver를 사용하여 요소가 뷰포트에 들어왔는지 감지하는 커스텀 훅
 * @param {object} options - IntersectionObserver 옵션 (예: { threshold: 0.1 })
 * @returns {[React.RefObject, boolean]} - ref 객체와 inView 상태
 */
export const useScrollAnimation = (options) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // 요소가 뷰포트에 들어오면 inView를 true로, 나가면 false로 설정
        setInView(entry.isIntersecting);
      },
      { rootMargin: '0px', threshold: 0.1, ...options }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
};