import React from 'react';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            안녕하세요, <br />
            <span className="highlight">웹 개발자</span> 서하나입니다
          </h1>
          <p className="hero-description">
            유치원 교사에서 웹 개발자로의 새로운 도전! <br />
            사용자 중심의 따뜻한 서비스를 만들어갑니다.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => document.getElementById('projects').scrollIntoView({behavior: 'smooth'})}>
              프로젝트 보기
            </button>
            <button className="btn-secondary" onClick={() => window.open('/resume.pdf', '_blank')}>
              이력서 다운로드
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="/image/profile.png" 
            alt="서하나 프로필" 
            className="profile-image"
            onError={(e) => {
              // 이미지 로드 실패시 기본 placeholder 표시
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="placeholder-image" style={{display: 'none'}}>
            <span>프로필 이미지</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;