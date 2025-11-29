// src/LanguageContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ko'); // 기본 언어: 한국어

  // 언어 변경 함수
  const changeLanguage = (lang) => {
    setLanguage(lang);
    
    // 아랍어(ar)일 경우 문서 방향을 RTL(오른쪽->왼쪽)로 변경
    if (lang === 'ar') {
      document.body.dir = 'rtl';
      document.body.style.fontFamily = "'Noto Sans Arabic', sans-serif"; // 아랍어 폰트 적용 필요시
    } else {
      document.body.dir = 'ltr';
      document.body.style.fontFamily = ""; // 기본 폰트로 복귀
    }
  };

  // 번역 텍스트 가져오기 함수 (t('hero_title'))
  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);