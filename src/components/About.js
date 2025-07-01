import React, { useState, useEffect } from 'react';

function About() {
  const [aboutVisible, setAboutVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // 화면의 70% 지점에서 애니메이션 트리거
        if (rect.top < windowHeight * 0.7) {
          setAboutVisible(true);
        }
      }
    };

    // 초기 로드 시 체크
    setTimeout(handleScroll, 100);
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={`about-section ${aboutVisible ? 'visible' : ''}`} id="about">
      <div className="container">
        <div className="about-layout">
          {/* 왼쪽 프로필 카드 */}
          <div className={`profile-card ${aboutVisible ? 'visible' : ''}`}>
            <div className="profile-header">
              <h2 className="name-korean">서하나<br></br>(Seo Hana)</h2>
              <div className="contact-info">
                <p>경기도, 남양주</p>
                <p>Tel. 010-3057-8415</p>
                <p>E. itseohana234@gmail.com</p>
              </div>
            </div>
          </div>
                    
          {/* 오른쪽 상세 정보 */}
          <div className={`about-details ${aboutVisible ? 'visible' : ''}`}>
            <div className="about-intro">
                <h2 className="section-title">About Me</h2>
                        
                <div className="intro-text">
                          <ul>
                            <li>하나의 기관에서 4년 이상 근속 하며 능력을 인정을 받아온 중고 신입 </li>
                            <li>새로운 도전을 위해 노력하고 공부할 줄 아는 신입</li>
                            <li>풀스택 개발자 양성 과정에서 우수 프로젝트팀 수상, 우수 학생 수상을 받은 준비된 신입</li>
                            <li>다양한 연령과의 소통을 경험하며 의사소통 능력을 키워서 온 신입</li>
                          </ul>
                        </div>
            </div>
                        
            <div className={`experience-section ${aboutVisible ? 'visible' : ''}`}>
              <h3 className="section-title">Experience</h3>
              <div className="timeline">
                <h4>총 경력 4년 9개월</h4>
                <ul className="experience-list">
                  <li>유아교육기관 <span className="period">2020.03 ~ 2024.12</span></li>
                </ul>
              </div>
            </div>
                        
            <div className={`education-section ${aboutVisible ? 'visible' : ''}`}>
              <h3 className="section-title">Education</h3>
              <ul className="education-list">
                <li>KG IT BANK FINTECH 풀스택 과정 <span className="period">2024.12.16-2025.06.20</span></li>
                <li>4년제 유아교육과 <span className="period">2016.03.02 ~ 2020.02.28</span></li>
              </ul>
            </div>
                          
            <div className={`education-section ${aboutVisible ? 'visible' : ''}`}>
              <h3 className="section-title">Other</h3>
              <ul className="education-list">
                <li> 필리핀 영어 어학연수 <span className="period">2012.06-2014.01</span></li>
              </ul>
            </div>
            
            <div className={`credential-section ${aboutVisible ? 'visible' : ''}`}>
              <h3 className="section-title">Credential</h3>
              <div className="credentials-grid">
                <div className="credential-item highlight">SQLD(최종 합격)</div>
                <div className="credential-item highlight">리눅스 마스터 2급(1차 합격)</div>
                <div className="credential-item">유치원정교사 2급</div>
                <div className="credential-item">보육교사 2급</div>
                <div className="credential-item">한국사 1급</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;