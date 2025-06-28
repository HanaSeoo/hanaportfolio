import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/ProjectData';
import './ProjectDetail.css';

function ProjectDetail() {
  const { id } = useParams();
  const project = projects[id];
  const [selectedImage, setSelectedImage] = useState(null);

  // 페이지 진입 시 맨 위로 스크롤
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="project-detail">
        <div className="container">
          <Link to="/" className="back-button">← 홈으로 돌아가기</Link>
          <h1>프로젝트를 찾을 수 없습니다</h1>
        </div>
      </div>
    );
  }

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="project-detail">
      <div className="container">
        <Link to="/" className="back-button">← 홈으로 돌아가기</Link>
        
        {/* 프로젝트 헤더 */}
        <header className="project-header">
          <h1>{project.title}</h1>
          <p className="project-period">{project.period}</p>
          <p className="project-description">{project.description}</p>
          
          {/* 시연 영상 */}
          {project.videoUrl && (
            <div className="project-video">
              <h3>프로젝트 시연 영상</h3>
              <div className="video-container">
                <iframe
                  src={project.videoUrl}
                  title={`${project.title} 시연 영상`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
          
          {/* 노션 링크 버튼 */}
          {project.notionLink && (
            <div className="project-actions">
              <a 
                href={project.notionLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="notion-link-btn"
              >
                상세보기
              </a>
            </div>
          )}
        </header>

        {/* 프로젝트 개요 */}
        {project.projectOverview && (
          <section className="project-overview">
            <h2>프로젝트 개요</h2>
            <div className="overview-grid">
              <div className="overview-item">
                <strong>프로젝트명:</strong> {project.projectOverview.projectName}
              </div>
              <div className="overview-item">
                <strong>개발 기간:</strong> {project.projectOverview.developmentPeriod}
              </div>
              <div className="overview-item">
                <strong>개발 인원:</strong> {project.projectOverview.developmentTeam}명
              </div>
              <div className="overview-item">
                <strong>프로젝트 형태:</strong> {project.projectOverview.projectType}
              </div>
              {project.projectOverview.gitRepository && (
                <div className="overview-item">
                  <strong>Git Repository:</strong> 
                  <a href={project.projectOverview.gitRepository} target="_blank" rel="noopener noreferrer">
                    {project.projectOverview.gitRepository}
                  </a>
                </div>
              )}
              {project.projectOverview.nameOrigin && (
                <div className="overview-item">
                  <strong>명칭 유래:</strong> {project.projectOverview.nameOrigin}
                </div>
              )}
            </div>
          </section>
        )}

        {/* 기술 스택 */}
        <section className="tech-stack">
          <h2>사용 기술</h2>
          <div className="skills-list">
            {project.skills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </section>

        {/* 기술 스택 상세 */}
        {project.techStack && (
          <section className="tech-stack-detail">
            <h2>기술 스택 상세</h2>
            {Object.entries(project.techStack).map(([category, techs]) => (
              <div key={category} className="tech-category">
                <h3>{category}</h3>
                <ul className="tech-list">
                  {Array.isArray(techs) ? (
                    techs.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))
                  ) : (
                    <li>{techs}</li>
                  )}
                </ul>
              </div>
            ))}
          </section>
        )}

        {/* 프로젝트 목표 */}
        {project.projectGoals && (
          <section className="project-goals">
            <h2>프로젝트 목표</h2>
            <ul>
              {project.projectGoals.map((goal, index) => (
                <li key={index}>{goal}</li>
              ))}
            </ul>
          </section>
        )}

        {/* 프로젝트 배경 */}
        <section className="project-background">
          <h2>프로젝트 배경</h2>
          <ul>
            {project.background.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* 주요 기능 상세 */}
        {project.mainFeatures && (
          <section className="main-features">
            <h2>주요 기능 상세</h2>
            {Object.entries(project.mainFeatures).map(([key, feature]) => (
              <div key={key} className="feature-section">
                <h3>{feature.title}</h3>
                {feature.description && (
                  <div className="feature-description">{feature.description}</div>
                )}
                
                {/* 일반 기능 목록 */}
                {feature.features && (
                  <ul>
                    {feature.features.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}

                {/* 사용자/관리자 기능 분리 */}
                {feature.userFeatures && (
                  <div className="sub-feature">
                    <h4>사용자 기능</h4>
                    <ul>
                      {feature.userFeatures.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {feature.adminFeatures && (
                  <div className="sub-feature">
                    <h4>관리자 기능</h4>
                    <ul>
                      {feature.adminFeatures.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 고객 기능 */}
                {feature.customerFeatures && (
                  <div className="sub-feature">
                    <h4>고객 기능</h4>
                    <ul>
                      {feature.customerFeatures.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 기술적 세부사항 */}
                {feature.technicalDetails && (
                  <div className="feature-details">
                    <h4>기술적 특징</h4>
                    <ul>
                      {feature.technicalDetails.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 중첩 구조 처리 (투표 시스템 등) */}
                {feature.votingSystem && (
                  <div className="sub-feature">
                    <h4>{feature.votingSystem.title}</h4>
                    <ul>
                      {feature.votingSystem.features.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    {feature.votingSystem.technicalDetails && (
                      <div className="feature-details">
                        <h5>기술적 특징</h5>
                        <ul>
                          {feature.votingSystem.technicalDetails.map((detail, index) => (
                            <li key={index}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* 추가 중첩 구조들 */}
                {feature.questionManagement && (
                  <div className="sub-feature">
                    <h4>{feature.questionManagement.title}</h4>
                    <ul>
                      {feature.questionManagement.features.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {feature.votingStatistics && (
                  <div className="sub-feature">
                    <h4>{feature.votingStatistics.title}</h4>
                    <ul>
                      {feature.votingStatistics.features.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    {feature.votingStatistics.calculations && (
                      <div className="calculations">
                        <h5>계산 공식</h5>
                        <ul>
                          {feature.votingStatistics.calculations.map((calc, index) => (
                            <li key={index}>{calc}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* 통계 기능 */}
                {feature.statistics && (
                  <div className="sub-feature">
                    <h4>통계 기능</h4>
                    <ul>
                      {feature.statistics.features.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </section>
        )}

        {/* 주요 기능 (간단 목록) */}
        <section className="project-features">
          <h2>주요 기능</h2>
          <ul>
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>

        {/* 핵심 기술 특징 */}
        {project.keyTechnicalFeatures && (
          <section className="key-technical-features">
            <h2>핵심 기술 특징</h2>
            {project.keyTechnicalFeatures.map((feature, index) => (
              <div key={index} className="technical-feature">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </section>
        )}

        {/* 기술 사용처 */}
        {project.technologyUsage && (
          <section className="technology-usage">
            <h2>기술 사용처</h2>
            {Object.entries(project.technologyUsage).map(([key, usage]) => (
              <div key={key} className="usage-category">
                <h3>{usage.role && key === 'backend' ? '백엔드 (Backend)' : 
                     usage.role && key === 'database' ? '데이터베이스 (Database)' :
                     usage.role && key === 'frontend' ? '프론트엔드 (Frontend)' : key}</h3>
                <p><strong>역할:</strong> {usage.role}</p>
                {usage.urbanVillageRole && <p><strong>Urban Village에서의 역할:</strong> {usage.urbanVillageRole}</p>}
                {usage.abcShoppingRole && <p><strong>ABC Shopping에서의 역할:</strong> {usage.abcShoppingRole}</p>}
              </div>
            ))}
          </section>
        )}

        {/* 트러블슈팅 */}
        {project.troubleshooting && (
          <section className="troubleshooting-section">
            <h2>트러블슈팅</h2>
            <div className="troubleshooting-content">
              <h3>{project.troubleshooting.title}</h3>
              
              <div className="troubleshooting-problem">
                <h4>문제점</h4>
                <p>{project.troubleshooting.problem}</p>
                {project.troubleshooting.casesDescription && (
                  <div className="cases-description">
                    <h5>중복 경우의 수</h5>
                    <ol>
                      {project.troubleshooting.casesDescription.map((case_desc, index) => (
                        <li key={index}>{case_desc}</li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>

              <div className="troubleshooting-solution">
                <h4>해결방안</h4>
                <p>{project.troubleshooting.solution}</p>
              </div>

              <div className="troubleshooting-result">
                <h4>결과</h4>
                <p>{project.troubleshooting.result}</p>
              </div>
            </div>
          </section>
        )}

        {/* 프로젝트 이미지 */}
        {project.images && project.images.length > 0 && (
          <section className="project-images">
            <h2>프로젝트 이미지</h2>
            <div className="images-grid">
              {project.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${project.title} 스크린샷 ${index + 1}`}
                  onClick={() => openImageModal(image)}
                />
              ))}
            </div>
          </section>
        )}

        {/* 시스템 구조 */}
        <section className="project-architecture">
          <h2>시스템 구조</h2>
          <div className="architecture-grid">
            {Object.entries(project.architecture).map(([key, value]) => (
              <div key={key} className="architecture-item">
                <strong>{key}:</strong> {value}
              </div>
            ))}
          </div>
        </section>

        {/* 사용 API */}
        {project.apis && (
          <section className="apis-section">
            <h2>사용 API</h2>
            <ul className="api-list">
              {project.apis.map((api, index) => (
                <li key={index}>{api}</li>
              ))}
            </ul>
          </section>
        )}

        {/* 팀 멤버 */}
        <section className="team-members">
          <h2>팀 멤버</h2>
          <div className="members-list">
            {project.teamMembers.map((member, index) => (
              <div key={index} className="member">
                <span className="member-name">{member.name}</span>
                <span className="member-role">({member.role})</span>
                {member.portfolio && (
                  <a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                    포트폴리오 보기
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 도전과제와 성과 */}
        <section className="challenges-outcome">
          <div className="challenges">
            <h2>도전과제</h2>
            <p>{project.challenges}</p>
          </div>
          <div className="outcome">
            <h2>성과 및 배운점</h2>
            <p>{project.outcome}</p>
          </div>
        </section>

        {/* 이미지 모달 */}
        {selectedImage && (
          <div className="image-modal" onClick={closeImageModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close-button" onClick={closeImageModal}>&times;</span>
              <img className="modal-image" src={selectedImage} alt="확대 이미지" />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default ProjectDetail;