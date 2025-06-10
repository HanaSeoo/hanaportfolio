import React from 'react';

function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/myprofile/SeoHanaProfile.pdf';
    link.download = '서하나_이력서.pdf';
    link.click();
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-container">
          {/* 좌측: 메인 콘텐츠 */}
          <div className="hero-content">
            <div className="hero-badge">
              <span>👋</span>
              교사에서 개발자로
            </div>
            <h1 className="hero-title">
              안녕하세요! <span className="emoji">🌸</span><br />
              <span className="highlight">따뜻한 개발자</span><br />
              서하나입니다 <span className="emoji">✨</span>
            </h1>
            <p className="hero-description">
              아이들과 함께했던 따뜻한 마음으로<br />
              사용자 중심의 서비스를 만들어갑니다 💝
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={scrollToProjects}>
                내 여정 보기 🚀
              </button>
              <button className="btn-secondary" onClick={downloadResume}>
                이력서 다운로드 📄
              </button>
            </div>
          </div>
          
          {/* 중앙: 프로필 이미지 */}
          <div className="hero-image">
            <div className="profile-container">
              {/* 기본으로 보이는 프로필 이미지 */}
              <img 
                src="/image/profile.png"
                alt="서하나 프로필"
                className="profile-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              
              {/* 기본 이미지 로드 실패시 대체 아바타 */}
              <div className="placeholder-image" style={{display: 'none'}}>
                👩‍💻 Profile Photo
              </div>
              
              {/* 호버시 나타나는 다른 실제 이미지 */}
              <img 
                src="/image/real-profile.jpg"
                alt="서하나 다른 프로필"
                className="real-profile-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              
              <div className="profile-decoration">🎈</div>
            </div>
          </div>

          {/* 우측: 개발자 스탯 카드 */}
          <div className="dev-stats-card">
            <div className="stats-header">
              <span className="stats-title">개발자 스탯</span>
              <span className="stats-level">Lv.1 Junior</span>
            </div>
            
            <div className="stat-item">
              <div className="stat-label">
                <span className="stat-icon">🔥</span>
                열정 지수
              </div>
              <div className="stat-bar">
                <div className="stat-fill" style={{width: '100%'}}></div>
                <span className="stat-value">100%</span>
              </div>
            </div>
            
            <div className="stat-item">
              <div className="stat-label">
                <span className="stat-icon">☕</span>
                커피 소비량
              </div>
              <div className="stat-bar">
                <div className="stat-fill infinite" style={{width: '50%'}}></div>
                <span className="stat-value">50%</span>
              </div>
            </div>
            
            <div className="stat-item">
              <div className="stat-label">
                <span className="stat-icon">💝</span>
                따뜻함 레벨
              </div>
              <div className="stat-bar">
                <div className="stat-fill warm" style={{width: '100%'}}></div>
                <span className="stat-value">MAX</span>
              </div>
            </div>
            
            <div className="stat-item">
              <div className="stat-label">
                <span className="stat-icon">🎯</span>
                성장 속도
              </div>
              <div className="stat-bar">
                <div className="stat-fill growth" style={{width: '%'}}></div>
                <span className="stat-value">100%</span>
              </div>
            </div>
            
            <div className="stats-footer">
              <div className="current-goal">
                <span className="goal-icon">🌟</span>
                <span>목표: 사용자를 행복하게 하는 개발자</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 오른쪽 플로팅 소셜 링크 */}
      <div className="social-links">
        <a 
          href="https://github.com/HanaSeoo" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-link github"
        >
          <div className="social-icon"></div>
        </a>
        <a 
          href="https://www.notion.so/1b9db822a28e801eb04af2f96ab48d5a" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-link notion"
        >
          <div className="social-icon"></div>
        </a>
        <a 
          href="https://velog.io/@gkskquf109/posts" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-link velog"
        >
          <div className="social-icon"></div>
        </a>
      </div>

      {/* Journey Timeline Section */}
      <section className="journey-section" id="journey">
        <div className="container">
          <h2 className="journey-title">나의 개발자 여정</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-icon">👶</div>
              <div className="timeline-content">
                <div className="timeline-date">2020 - 2024</div>
                <h3 className="timeline-title">유치원 교사</h3>
                <p className="timeline-description">
                  아이들과 함께하며 소통의 중요성과 사용자(아이들) 중심의 사고를 배웠어요. 
                  매일 새로운 문제를 창의적으로 해결하는 경험을 쌓았습니다.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-icon">💡</div>
              <div className="timeline-content">
                <div className="timeline-date">2024년 하반기</div>
                <h3 className="timeline-title">개발의 시작</h3>
                <p className="timeline-description">
                  더 많은 사람들에게 도움이 되는 서비스를 만들고 싶어 개발 공부를 시작했어요. 
                  교육 현장에서의 경험을 토대로 사용자 친화적인 서비스를 만들고 싶었습니다.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-icon">📚</div>
              <div className="timeline-content">
                <div className="timeline-date">2024년 말 - 2025년</div>
                <h3 className="timeline-title">풀스택 과정 수료</h3>
                <p className="timeline-description">
                  Java, Spring, React를 학습하며 백엔드부터 프론트엔드까지 전체적인 개발 흐름을 이해했어요. 
                  팀 프로젝트를 통해 협업의 중요성도 배웠습니다.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-icon">🚀</div>
              <div className="timeline-content">
                <div className="timeline-date">2025년 현재</div>
                <h3 className="timeline-title">새로운 도전</h3>
                <p className="timeline-description">
                  교사로서 쌓은 소통 능력과 새롭게 배운 개발 기술을 결합하여, 
                  사용자가 편리하고 따뜻함을 느낄 수 있는 서비스를 만들어가고 있어요!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;