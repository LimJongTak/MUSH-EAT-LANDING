import React, { useState } from 'react';
import '../index.css';
import { useLanguage } from '../LanguageContext'; // 언어 기능 가져오기

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 모바일 메뉴 상태
  const [isLangOpen, setIsLangOpen] = useState(false); // 언어 메뉴 상태
  const { language, changeLanguage, t } = useLanguage(); // 번역 기능

  // 메뉴 리스트 (카탈로그가 포함됨)
  const menuItems = [
    { id: 'section1', title: t('nav_main'), type: 'scroll' },
    { id: 'section2', title: t('nav_taste'), type: 'scroll' },
    { id: 'section4', title: t('nav_product'), type: 'scroll' },
    { id: 'section5', title: t('nav_usage'), type: 'scroll' },
    { id: 'section6', title: t('nav_nutrition'), type: 'scroll' },
    { id: 'section7', title: t('nav_ingredients'), type: 'scroll' },
    { id: 'section3', title: t('nav_faq'), type: 'scroll' },
    // 카탈로그를 메뉴 아이템으로 통합 (type: 'link')
    { id: 'catalog', title: t('nav_catalog'), type: 'link', url: 'http://jjpyogo-catalog.onrender.com/' },
  ];

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed-header">
      {/* 1. 좌측 로고 */}
      <div className="logo-container" onClick={scrollToTop}>
        <img src="/images/logo.png" alt="Mush Eat Logo" />
      </div>

      {/* 2. 데스크탑 중앙 메뉴 (카탈로그 포함) */}
      <nav className="header-nav desktop-only">
        {menuItems.map((item, index) => (
          <div key={item.id} className="menu-item-container">
            {/* 링크 타입(카탈로그)과 스크롤 타입 구분 */}
            {item.type === 'link' ? (
              <a 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="menu-btn"
                style={{ textDecoration: 'none' }}
              >
                <span className="title-text">{item.title}</span>
              </a>
            ) : (
              <button onClick={() => scrollToSection(item.id)} className="menu-btn">
                <span className="title-text">{item.title}</span>
              </button>
            )}
            
            {/* 구분선 (마지막 아이템 제외) */}
            {index !== menuItems.length - 1 && <div className="divider"></div>}
          </div>
        ))}
      </nav>

      {/* 3. 우측 Language 버튼 (데스크탑) */}
      <div className="language-container desktop-only">
        <button 
          className="lang-btn" 
          onClick={() => setIsLangOpen(!isLangOpen)}
        >
          Language ▾
        </button>
        {/* 언어 선택 드롭다운 */}
        {isLangOpen && (
          <div className="lang-dropdown">
            <button onClick={() => { changeLanguage('ko'); setIsLangOpen(false); }}>한국어</button>
            <button onClick={() => { changeLanguage('en'); setIsLangOpen(false); }}>English</button>
            <button onClick={() => { changeLanguage('ar'); setIsLangOpen(false); }}>العربية</button>
          </div>
        )}
      </div>

      {/* 4. 모바일 햄버거 버튼 */}
      <button 
        className="hamburger-btn mobile-only" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
      </button>

      {/* 5. 모바일 메뉴 오버레이 */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}>
        <nav className="mobile-nav">
          {/* 메뉴 목록 */}
          {menuItems.map((item) => (
            item.type === 'link' ? (
             // 모바일 카탈로그 버튼 (노란 테두리 강조 스타일 유지)
             <a 
               key={item.id}
               href={item.url} 
               target="_blank" 
               rel="noopener noreferrer"
               className="mobile-menu-item catalog-highlight"
               onClick={() => setIsMenuOpen(false)}
             >
               {t('catalog_view')}
             </a>
            ) : (
              <button 
                key={item.id} 
                onClick={() => scrollToSection(item.id)} 
                className="mobile-menu-item"
              >
                {item.title}
              </button>
            )
          ))}

          {/* 모바일 하단 언어 선택 영역 */}
          <div className="mobile-lang-options">
            <button className={language === 'ko' ? 'active' : ''} onClick={() => changeLanguage('ko')}>한국어</button>
            <span className="divider-mobile">|</span>
            <button className={language === 'en' ? 'active' : ''} onClick={() => changeLanguage('en')}>English</button>
            <span className="divider-mobile">|</span>
            <button className={language === 'ar' ? 'active' : ''} onClick={() => changeLanguage('ar')}>العربية</button>
          </div>

        </nav>
      </div>
    </header>
  );
};

export default Header;