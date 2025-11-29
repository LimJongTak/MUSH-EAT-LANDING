import React, { useState } from 'react';
import '../index.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 메뉴 열림/닫힘 상태 관리

  const menuItems = [
    { id: 'section1', title: '메인' },
    { id: 'section2', title: '맛 소개' },
    { id: 'section4', title: '제품' },
    { id: 'section5', title: '활용성' },
    { id: 'section6', title: '영양정보' },
    { id: 'section7', title: '재료·성분' },
    { id: 'section3', title: 'FAQ' },
  ];

  const scrollToSection = (id) => {
    setIsMenuOpen(false); // 이동 시 모바일 메뉴 닫기
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
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

      {/* 2. 데스크탑용 메뉴 (화면이 클 때만 보임) */}
      <nav className="header-nav desktop-only">
        {menuItems.map((item, index) => (
          <div key={item.id} className="menu-item-container">
            <button onClick={() => scrollToSection(item.id)} className="menu-btn">
              <span className="title-text">{item.title}</span>
            </button>
            {index !== menuItems.length - 1 && <div className="divider"></div>}
          </div>
        ))}
      </nav>

      {/* 3. 데스크탑용 카탈로그 버튼 */}
      <a 
        href="http://jjpyogo-catalog.onrender.com/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="catalog-link desktop-only"
      >
        카탈로그
      </a>

      {/* 4. 모바일 햄버거 버튼 (화면이 작을 때만 보임) */}
      <button 
        className="hamburger-btn mobile-only" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {/* 햄버거 아이콘 (3줄) */}
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
      </button>

      {/* 5. 모바일 전체화면 메뉴 오버레이 */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}>
        <nav className="mobile-nav">
          {menuItems.map((item) => (
            <button 
              key={item.id} 
              onClick={() => scrollToSection(item.id)} 
              className="mobile-menu-item"
            >
              {item.title}
            </button>
          ))}
          {/* 모바일 메뉴 안의 카탈로그 링크 */}
          <a 
            href="http://jjpyogo-catalog.onrender.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mobile-menu-item catalog-highlight"
            onClick={() => setIsMenuOpen(false)}
          >
            카탈로그 보기
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;