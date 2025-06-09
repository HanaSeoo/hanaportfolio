import React from 'react';

function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-layout">
          {/* 왼쪽 프로필 카드 */}
          <div className="profile-card">
            <div className="profile-header">
              <h2 className="name-korean">서(Seo) 하나(Hana)</h2>
              <div className="contact-info">
                <p>경기도, 남양주</p>
                <p>Tel. 010-3057-8415</p>
                <p>E. gkskuqf123123@gmail.com</p>
              </div>
            </div>
          </div>
          
          {/* 오른쪽 상세 정보 */}
          <div className="about-details">
            <div className="about-intro">
                <h2 className="section-title">About Me</h2>
                    <h3 className="intro-quote">"소통을 이해로 연결하고, 상황에 유연하게 대처할 줄 아는 웹 개발자 지망생입니다."</h3>
                         <p className="intro-text">
                            15살에 필리핀 로컬학교에서의 어학연수 경험을 통해 언어 장벽을 넘어서는 깊이 있는 소통 능력을 키웠습니다. 이후 유아교사로 일하며, 말보다 행동으로 표현하는 아이들과 학부모를 세심하게 이해하고 조율하는 과정에서 '이해 기반의 커뮤니케이션'을 제 강점으로 다져왔습니다. 개발 협업에서도 이런 소통 능력을 바탕으로 팀원 간의 의견을 조율하고, 갈등을 유연하게 해결하는 데 익숙합니다. 기술뿐 아니라 사람과의 연결도 중요하게 생각하는 저는, 함께 성장하는 개발 팀에 긍정적인 시너지를 줄 수 있는 인재입니다.
                        </p>
            </div>
            
            <div className="experience-section">
              <h3 className="section-title">Experience</h3>
              <div className="timeline">
                <h4>총 경력 4년 9개월</h4>
                <ul className="experience-list">
                  <li>해종 유아 음악학원 <span className="period">2023.03 ~ 2024.12</span></li>
                  <li>하늘땅 어린이집 <span className="period">2022.03 ~ 2023.02</span></li>
                  <li>해종 유아 음악학원 <span className="period">2020.03 ~ 2022.02</span></li>
                </ul>
              </div>
            </div>
            
            <div className="education-section">
              <h3 className="section-title">Education</h3>
              <ul className="education-list">
                <li>KG IT BANK FINTECH 풀스택 과정 <span className="period">2024.12.16-2025.06.20</span></li>
                <li>중부대학교 유아교육과 <span className="period">2016.03.02 ~ 2020.02.28</span></li>
              </ul>
            </div>
            
             <div className="education-section">
              <h3 className="section-title">Other</h3>
              <ul className="education-list">
                <li> 필리핀 영어 어학연수 <span className="period">2012.06-2014.01</span></li>
              </ul>
            </div>

            <div className="credential-section">
              <h3 className="section-title">Credential</h3>
              <div className="credentials-grid">
                <div className="credential-item highlight">리눅스 마스터 2급(1차 합격)</div>
                <div className="credential-item">유치원정교사 2급</div>
                <div className="credential-item">보육교사 2급</div>
                <div className="credential-item">한국사 1급</div>
                <div className="credential-item">운전면허 보통 2종</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;