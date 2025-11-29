import React from 'react';
// 다국어 지원을 위한 Provider import
import { LanguageProvider } from './LanguageContext';

import Header from './components/Header';
import Section1_Hero from './components/Section1_Hero';
import Section2_Intro from './components/Section2_Intro';
import Section6_Nutrition from './components/Section6_Nutrition'; // 3번째: 영양
import Section5_Versatility from './components/Section5_Versatility'; // 4번째: 활용
import Section4_Variant from './components/Section4_Variant'; // 5번째: 패키지(구매)
import Section7_Ingredients from './components/Section7_Ingredients';
import Section3_FAQ from './components/Section3_FAQ';


function App() {
  return (
    /* 앱 전체를 LanguageProvider로 감싸야 모든 섹션에서 언어 변경이 가능합니다 */
    <LanguageProvider>
      <div className="App">
        <Header />
        
        {/* 1. 메인 헤드라인 */}
        <div id="section1"><Section1_Hero /></div>
        
        {/* 2. 맛에 대한 확신 */}
        <div id="section2"><Section2_Intro /></div>
        
        {/* 3. 영양 정보 */}
        <div id="section6"><Section6_Nutrition /></div>
        
        {/* 4. 활용성 강조 */}
        <div id="section5"><Section5_Versatility /></div>
        
        {/* 5. 제품 패키지 & 구매 */}
        <div id="section4"><Section4_Variant /></div>
        
        {/* 기타 섹션 */}
        <div id="section7"><Section7_Ingredients /></div>
        <div id="section3"><Section3_FAQ /></div>
        
        <footer style={{ textAlign: 'center', padding: '40px', color: '#eee1a8', fontSize: '0.9rem' }}>
          <p style={{fontSize: '0.9rem'}}>&copy; 2024 Mush Eat. All rights reserved.</p>
        </footer>
      </div>
    </LanguageProvider>
  );
}

export default App;