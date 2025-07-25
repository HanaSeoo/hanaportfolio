import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const handleTreeClick = () => {
    navigate('/skills');
  };
  
  const scrollToSection = (sectionId) => {
    // 현재 홈페이지가 아니면 홈으로 이동 후 스크롤
    if (location.pathname !== '/') {
      navigate('/');
      // 페이지 이동 후 스크롤 실행을 위해 약간의 지연
      setTimeout(() => {
        scrollToElement(sectionId);
      }, 100);
      return;
    }
    
    // 홈페이지에 있으면 바로 스크롤
    scrollToElement(sectionId);
  };
  
  const scrollToElement = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // 헤더 높이를 동적으로 계산
      const header = document.querySelector('.header');
      const headerHeight = header ? header.offsetHeight : 0;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerHeight - 20; // 20px 여백 추가
      
      window.scrollTo({
        top: Math.max(0, offsetPosition), // 음수 방지
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="header">
      <div className="nav-container">
        <div className="logo">
          <Link to="/" className="logo-text">HANA</Link>
        </div>
        
        <nav className="navigation">
          <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
          <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
          <button onClick={handleTreeClick} className="nav-link">Skills</button>
          <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
        </nav>
        
        {/* 헤더 소셜 링크 */}
        <div className="header-social-links">
          <a 
            href="https://github.com/HanaSeoo"
            target="_blank"
            rel="noopener noreferrer"
            className="header-social-link github"
            title="GitHub"
          >
            <div className="header-social-icon"></div>
          </a>
          <a 
            href="https://www.notion.so/1b9db822a28e801eb04af2f96ab48d5a"
            target="_blank"
            rel="noopener noreferrer"
            className="header-social-link notion"
            title="Notion"
          >
            <div className="header-social-icon"></div>
          </a>
          <a 
            href="https://velog.io/@gkskquf109/posts"
            target="_blank"
            rel="noopener noreferrer"
            className="header-social-link velog"
            title="Velog"
          >
            <div className="header-social-icon"></div>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;