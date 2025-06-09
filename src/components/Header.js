import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  
  const scrollToSection = (sectionId) => {
    // 현재 홈페이지가 아니면 홈으로 이동 후 스크롤
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    // 홈페이지에 있으면 바로 스크롤
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
          <button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button>  {/* Skills 추가 */}
          <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;