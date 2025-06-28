import React, { useState, useEffect } from 'react';
import './Hero.css'; // CSS 파일 import

function Hero() {
  const [techStackVisible, setTechStackVisible] = useState(false);

  const techStacks = {
    Backend: [
      { name: 'Java', color: '#007396', icon: '☕' },
      { name: 'Spring Boot', color: '#6DB33F', icon: '🍃' },
      { name: 'Spring Framework', color: '#6DB33F', icon: '🌱' },
      { name: 'JSP', color: '#E76F00', icon: '📋' },
      { name: 'API', color: '#FF6B35', icon: '🔗' }
    ],
    Frontend: [
      { name: 'JavaScript', color: '#F7DF1E', icon: '📜' },
      { name: 'jQuery', color: '#0769AD', icon: '💫' },
      { name: 'HTML', color: '#E34F26', icon: '📄' },
      { name: 'React', color: '#61DAFB', icon: '⚛️' }
    ],
    'Database & Tools': [
      { name: 'OracleDB', color: '#F80000', icon: '🔴' },
      { name: 'MySQL', color: '#4479A1', icon: '🐬' },
      { name: 'Git', color: '#F05032', icon: '📝' },
      { name: 'Eclipse', color: '#2C2255', icon: '🌙' }
    ]
  };

  useEffect(() => {
    const handleScroll = () => {
      const techStackSection = document.getElementById('hero-tech-stack');
      if (techStackSection) {
        const rect = techStackSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const isVisible = rect.top < windowHeight * 0.8;
        setTechStackVisible(isVisible);
      }
    };

    // 초기 로드 시 체크
    setTimeout(handleScroll, 100);
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const handleProjectClick = (projectId) => {
    window.location.href = `/project/${projectId}`;
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-main-section" id="home">
        <div className="hero-main-container">
          <div className="hero-main-content">
            <div className="hero-main-badge">
              <span>👋</span>
              교사에서 개발자로
            </div>
            <h1 className="hero-main-title">
              안녕하세요! <span className="emoji"></span><br />
              <span className="hero-highlight">웹 개발자</span><br />
              서하나입니다 <span className="emoji"></span>
            </h1>
            <p className="hero-main-description">
              아이들과 함께했던 따뜻한 마음으로<br />
              사용자 중심의 서비스를 만들어갑니다
            </p>
            <div className="hero-main-buttons">
              <button className="hero-btn-primary" onClick={scrollToProjects}>
                내 여정 보기
              </button>
              <button className="hero-btn-secondary" onClick={downloadResume}>
                이력서 다운로드
              </button>
            </div>
          </div>
          
          <div className="hero-main-image">
            <div className="hero-profile-container">
              <img 
                src="/image/profile.png"
                alt="서하나 프로필"
                className="hero-profile-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hero-placeholder-image" style={{display: 'none'}}>
                 Profile Photo
              </div>
              <img 
                src="/image/real-profile.jpg"
                alt="서하나 다른 프로필"
                className="hero-real-profile-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="hero-profile-decoration">🎈</div>
            </div>
          </div>

          <div className="hero-dev-stats-card">
            <div className="hero-stats-header">
              <span className="hero-stats-title">개발자 스탯</span>
              <span className="hero-stats-level">Lv.1 Junior</span>
            </div>
            
            <div className="hero-stat-item">
              <div className="hero-stat-label">
                <span className="hero-stat-icon">🔥</span>
                열정 지수
              </div>
              <div className="hero-stat-bar">
                <div className="hero-stat-fill" style={{width: '100%'}}></div>
                <span className="hero-stat-value">100%</span>
              </div>
            </div>
            
            <div className="hero-stat-item">
              <div className="hero-stat-label">
                <span className="hero-stat-icon">☕</span>
                커피 소비량
              </div>
              <div className="hero-stat-bar">
                <div className="hero-stat-fill infinite" style={{width: '50%'}}></div>
                <span className="hero-stat-value">50%</span>
              </div>
            </div>
            
            <div className="hero-stat-item">
              <div className="hero-stat-label">
                <span className="hero-stat-icon">💝</span>
                따뜻함 레벨
              </div>
              <div className="hero-stat-bar">
                <div className="hero-stat-fill warm" style={{width: '100%'}}></div>
                <span className="hero-stat-value">MAX</span>
              </div>
            </div>
            
            <div className="hero-stat-item">
              <div className="hero-stat-label">
                <span className="hero-stat-icon">🎯</span>
                성장 속도
              </div>
              <div className="hero-stat-bar">
                <div className="hero-stat-fill growth" style={{width: '100%'}}></div>
                <span className="hero-stat-value">100%</span>
              </div>
            </div>
            
            <div className="hero-stats-footer">
              <div className="hero-current-goal">
                <span className="hero-goal-icon"></span>
                <span>목표: 소통을 중시하며 문제를 해결해 가는 개발자</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Journey Timeline Section */}
      <section className="hero-enhanced-journey-section" id="journey">
        <div className="hero-journey-container">
          <h2 className="hero-journey-title">나의 개발자 여정 & 프로젝트</h2>
          <div className="hero-enhanced-timeline">
            <div className="hero-timeline-item" data-type="experience">
              <div className="hero-timeline-icon">👶</div>
              <div className="hero-timeline-content">
                <div className="hero-timeline-date">2020 - 2024</div>
                <h3 className="hero-timeline-title">유치원 교사</h3>
                <p className="hero-timeline-description">
                  아이들과 함께하며 소통의 중요성과 사용자(아이들) 중심의 사고를 배웠어요. 
                  매일 새로운 문제를 창의적으로 해결하는 경험을 쌓았습니다.
                </p>
              </div>
            </div>
            
            <div className="hero-timeline-item" data-type="learning">
              <div className="hero-timeline-icon">💡</div>
              <div className="hero-timeline-content">
                <div className="hero-timeline-date">2024년 하반기</div>
                <h3 className="hero-timeline-title">개발의 시작</h3>
                <p className="hero-timeline-description">
                  더 많은 사람들에게 도움이 되는 서비스를 만들고 싶어 개발 공부를 시작했어요. 
                  교육 현장에서의 경험을 토대로 사용자 친화적인 서비스를 만들고 싶었습니다.
                </p>
              </div>
            </div>

            <div className="hero-timeline-item hero-project-timeline-item" data-type="project" onClick={() => handleProjectClick(4)}>
              <div className="hero-timeline-icon">☕</div>
              <div className="hero-timeline-content">
                <div className="hero-timeline-date">2024년 12월</div>
                <h3 className="hero-timeline-title">첫 번째 프로젝트: 쇼핑몰 웹 <span className="hero-click-hint">👆 클릭해보세요!</span></h3>
                <p className="hero-timeline-description">
                  Java, Eclipse, Oracle, SceneBuilder를 배우며 첫 번째 프로젝트를 완성했어요. 
                  기초부터 차근차근 배워가는 과정이 즐거웠습니다.
                </p>
                <div className="hero-project-tags">
                  <span className="hero-tag">Java</span>
                  <span className="hero-tag">Eclipse</span>
                  <span className="hero-tag">Oracle</span>
                  <span className="hero-tag">SceneBuilder</span>
                </div>
              </div>
            </div>
            
            <div className="hero-timeline-item hero-project-timeline-item" data-type="project" onClick={() => handleProjectClick(2)}>
              <div className="hero-timeline-icon">🏠</div>
              <div className="hero-timeline-content">
                <div className="hero-timeline-date">2025년 2월</div>
                <h3 className="hero-timeline-title">두 번째 프로젝트: 숙소 예약 시스템 <span className="hero-click-hint">👆 클릭해보세요!</span></h3>
                <p className="hero-timeline-description">
                  Spring Framework를 학습하며 API 연동과 예약 시스템의 중복 방지 로직을 구현했어요. 
                  백엔드 개발의 재미를 느꼈습니다.
                </p>
                <div className="hero-project-tags">
                  <span className="hero-tag">Spring Framework</span>
                  <span className="hero-tag">API</span>
                  <span className="hero-tag">Oracle</span>
                </div>
              </div>
            </div>

            <div className="hero-timeline-item hero-project-timeline-item" data-type="project" onClick={() => handleProjectClick(3)}>
              <div className="hero-timeline-icon">⚛️</div>
              <div className="hero-timeline-content">
                <div className="hero-timeline-date">2025년 4월</div>
                <h3 className="hero-timeline-title">세 번째 프로젝트: 포트폴리오 웹사이트 <span className="hero-click-hint">👆 클릭해보세요!</span></h3>
                <p className="hero-timeline-description">
                  React를 배우며 이 포트폴리오 웹사이트를 직접 제작했습니다.
                </p>
                <div className="hero-project-tags">
                  <span className="hero-tag">React</span>
                  <span className="hero-tag">JavaScript</span>
                  <span className="hero-tag">CSS3</span>
                  <span className="hero-tag">Netlify</span>
                </div>
              </div>
            </div>

            <div className="hero-timeline-item hero-project-timeline-item" data-type="project" onClick={() => handleProjectClick(1)}>
              <div className="hero-timeline-icon">💊</div>
              <div className="hero-timeline-content">
                <div className="hero-timeline-date">2025년 6월</div>
                <h3 className="hero-timeline-title">네번째 프로젝트: 탈모인들을 위한 웹 <span className="hero-click-hint">👆 클릭해보세요!</span></h3>
                <p className="hero-timeline-description">
                  딥러닝과 풀스택 개발을 결합한 최종 프로젝트를 완성했어요. 
                  실제 사용자에게 도움이 되는 서비스를 만들 수 있어서 뿌듯했습니다.
                </p>
                <div className="hero-project-tags">
                  <span className="hero-tag">React</span>
                  <span className="hero-tag">Spring Boot</span>
                  <span className="hero-tag">Deep Learning</span>
                  <span className="hero-tag">Websocket</span>
                </div>
              </div>
            </div>
            
            <div className="hero-timeline-item" data-type="future">
              <div className="hero-timeline-icon">🚀</div>
              <div className="hero-timeline-content">
                <div className="hero-timeline-date">2025년 현재 & 미래</div>
                <h3 className="hero-timeline-title">새로운 도전을 향해</h3>
                <p className="hero-timeline-description">
                  교사로서 쌓은 소통 능력과 새롭게 배운 개발 기술을 결합하여, 
                  사용자가 편리하고 따뜻함을 느낄 수 있는 서비스를 만들어가고 있어요!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="hero-tech-stack-section" id="hero-tech-stack">
        <div className="hero-tech-stack-container">
          <h2 className={`hero-tech-section-title ${techStackVisible ? 'visible' : ''}`}>
            보유 기술
          </h2>
          
          <p className={`hero-tech-section-subtitle ${techStackVisible ? 'visible' : ''}`}>
            개발에 사용하는 기술들
          </p>

          <div className="hero-tech-stack-grid">
            {Object.entries(techStacks).map(([category, techs], categoryIndex) => (
              <div 
                key={category} 
                className={`hero-tech-category ${techStackVisible ? 'visible' : ''}`}
                style={{
                  transitionDelay: `${categoryIndex * 200 + 400}ms`
                }}
              >
                <h3>{category}</h3>
                
                <div className="hero-tech-badges-container">
                  {techs.map((tech, index) => (
                    <div
                      key={tech.name}
                      className={`hero-tech-badge ${techStackVisible ? 'visible' : ''}`}
                      style={{
                        backgroundColor: tech.color,
                        color: tech.color === '#F7DF1E' ? '#000' : '#fff',
                        transitionDelay: `${(categoryIndex * 100 + index * 50)}ms`
                      }}
                    >
                      <span>{tech.icon}</span>
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;