import React, { useState, useEffect } from 'react';

function Hero() {
  const [treeVisible, setTreeVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 나무 섹션이 보이면 애니메이션 시작
      const treeSection = document.getElementById('skills-tree');
      if (treeSection) {
        const rect = treeSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const isVisible = rect.top < windowHeight && rect.bottom > 0;
        setTreeVisible(isVisible);
      }
    };

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

  // 프로젝트 클릭 핸들러
  const handleProjectClick = (projectId) => {
    window.location.href = `/project/${projectId}`;
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
              안녕하세요! <span className="emoji"></span><br />
              <span className="highlight">웹 개발자</span><br />
              서하나입니다 <span className="emoji">✨</span>
            </h1>
            <p className="hero-description">
              아이들과 함께했던 따뜻한 마음으로<br />
              사용자 중심의 서비스를 만들어갑니다
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={scrollToProjects}>
                내 여정 보기
              </button>
              <button className="btn-secondary" onClick={downloadResume}>
                이력서 다운로드
              </button>
            </div>
          </div>
          
          {/* 중앙: 프로필 이미지 */}
          <div className="hero-image">
            <div className="profile-container">
              <img 
                src="/image/profile.png"
                alt="서하나 프로필"
                className="profile-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              
              <div className="placeholder-image" style={{display: 'none'}}>
                👩‍💻 Profile Photo
              </div>
              
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
                <div className="stat-fill growth" style={{width: '100%'}}></div>
                <span className="stat-value">100%</span>
              </div>
            </div>
            
            <div className="stats-footer">
              <div className="current-goal">
                <span className="goal-icon"></span>
                <span>목표: 소통을 중시하며 문제를 해결해 가는 개발자</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Journey Timeline Section */}
      <section className="enhanced-journey-section" id="journey">
        <div className="container">
          <h2 className="journey-title">나의 개발자 여정 & 프로젝트</h2>
          <div className="enhanced-timeline">
            {/* 교사 시절 */}
            <div className="timeline-item" data-type="experience">
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
            
            {/* 개발 시작 */}
            <div className="timeline-item" data-type="learning">
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

            {/* 기초 학습 + 첫 번째 프로젝트 */}
            <div className="timeline-item project-timeline-item" data-type="project" onClick={() => handleProjectClick(4)}>
              <div className="timeline-icon">☕</div>
              <div className="timeline-content">
                <div className="timeline-date">2024년 12월</div>
                <h3 className="timeline-title">첫 번째 프로젝트: 쇼핑몰 웹 <span className="click-hint">👆 클릭해보세요!</span></h3>
                <p className="timeline-description">
                  Java, Eclipse, Oracle, SceneBuilder를 배우며 첫 번째 프로젝트를 완성했어요. 
                  기초부터 차근차근 배워가는 과정이 즐거웠습니다.
                </p>
                <div className="project-tags">
                  <span className="tag">Java</span>
                  <span className="tag">Eclipse</span>
                  <span className="tag">Oracle</span>
                  <span className="tag">SceneBuilder</span>
                </div>
              </div>
            </div>
            
            {/* 웹 개발 학습 + 두 번째 프로젝트 */}
            <div className="timeline-item project-timeline-item" data-type="project" onClick={() => handleProjectClick(2)}>
              <div className="timeline-icon"></div>
              <div className="timeline-content">
                <div className="timeline-date">2025년 2월</div>
                <h3 className="timeline-title">두 번째 프로젝트: 숙소 예약 시스템 <span className="click-hint">👆 클릭해보세요!</span></h3>
                <p className="timeline-description">
                  Spring Framework를 학습하며 API 연동과 예약 시스템의 중복 방지 로직을 구현했어요. 
                  백엔드 개발의 재미를 느꼈습니다.
                </p>
                <div className="project-tags">
                  <span className="tag">Spring</span>
                  <span className="tag">API</span>
                  <span className="tag">MySQL</span>
                </div>
              </div>
            </div>

            {/* 풀스택 과정 + 세 번째 프로젝트 */}
            <div className="timeline-item project-timeline-item" data-type="project" onClick={() => handleProjectClick(3)}>
              <div className="timeline-icon">⚛️</div>
              <div className="timeline-content">
                <div className="timeline-date">2025년 4월</div>
                <h3 className="timeline-title">세 번째 프로젝트: 포트폴리오 웹사이트 <span className="click-hint">👆 클릭해보세요!</span></h3>
                <p className="timeline-description">
                  React를 배우며 이 포트폴리오 웹사이트를 직접 제작했습니다.
                </p>
                <div className="project-tags">
                  <span className="tag">React</span>
                  <span className="tag">JavaScript</span>
                  <span className="tag">CSS3</span>
                  <span className="tag">Netlify</span>
                </div>
              </div>
            </div>

            {/* 최종 프로젝트 */}
            <div className="timeline-item project-timeline-item" data-type="project" onClick={() => handleProjectClick(1)}>
              <div className="timeline-icon"></div>
              <div className="timeline-content">
                <div className="timeline-date">2025년 6월</div>
                <h3 className="timeline-title">최종 프로젝트: 탈모인들을 위한 웹 <span className="click-hint">👆 클릭해보세요!</span></h3>
                <p className="timeline-description">
                  딥러닝과 풀스택 개발을 결합한 최종 프로젝트를 완성했어요. 
                  실제 사용자에게 도움이 되는 서비스를 만들 수 있어서 뿌듯했습니다.
                </p>
                <div className="project-tags">
                  <span className="tag">React</span>
                  <span className="tag">Spring Boot</span>
                  <span className="tag">Deep Learning</span>
                  <span className="tag">Python</span>
                </div>
              </div>
            </div>
            
            {/* 현재와 미래 */}
            <div className="timeline-item" data-type="future">
              <div className="timeline-icon">🚀</div>
              <div className="timeline-content">
                <div className="timeline-date">2025년 현재 & 미래</div>
                <h3 className="timeline-title">새로운 도전을 향해</h3>
                <p className="timeline-description">
                  교사로서 쌓은 소통 능력과 새롭게 배운 개발 기술을 결합하여, 
                  사용자가 편리하고 따뜻함을 느낄 수 있는 서비스를 만들어가고 있어요!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Tree Image Section - 나뭇잎 효과 제거 */}
      <section className="simple-tree-section" id="skills-tree">
        <div className="container">
          <h2 className="tree-title">나의 성장 나무</h2>
          <p className="tree-subtitle">개발을 공부하며 배운 나의 흔적</p>
          
          <div className="tree-image-container">
            {/* 나무 이미지만 */}
            <div className="tree-image-wrapper" style={{
              opacity: treeVisible ? 1 : 0,
              transform: treeVisible ? 'scale(1)' : 'scale(0.8)',
              transition: 'all 1s ease-out'
            }}>
              <img 
                src="/image/skills-tree.png" 
                alt="기술 나무" 
                className="skills-tree-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div className="tree-placeholder" style={{display: 'none'}}>
                🌳 기술 나무 이미지가 로드되지 않았습니다
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;