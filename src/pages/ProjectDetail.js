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
          
          {/* 노션 링크 버튼 */}
          {project.notionLink && (
            <div className="project-actions">
              <a 
                href={project.notionLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="notion-link-btn"
              >
                📋 Notion 상세보기
              </a>
            </div>
          )}
        </header>

        {/* 프로젝트 개요 (Urban Village만) */}
        {project.projectOverview && (
          <section className="project-overview">
            <h2>⚙️ 프로젝트 개요</h2>
            <div className="overview-grid">
              <div className="overview-item">
                <strong>프로젝트 명:</strong> {project.projectOverview.projectName}
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
                  <strong>GitHub:</strong> 
                  <a href={project.projectOverview.gitRepository} target="_blank" rel="noopener noreferrer">
                    Urban&Village
                  </a>
                </div>
              )}
            </div>
          </section>
        )}

        {/* 프로젝트 데모 */}
        {project.projectDemo && (
          <section className="project-demo">
            <h2>📙 프로젝트 구동</h2>
            <p>{project.projectDemo.description}</p>
            <div className="video-container">
              <iframe
                width="100%"
                height="400"
                src={project.projectDemo.mainVideo.replace('youtu.be/', 'www.youtube.com/embed/')}
                title="프로젝트 데모 영상"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </section>
        )}

        {/* 기존 비디오가 있는 경우 */}
        {project.videoUrl && !project.projectDemo && (
          <section className="project-video">
            <h2>프로젝트 데모</h2>
            <div className="video-container">
              <iframe
                width="100%"
                height="400"
                src={project.videoUrl}
                title="프로젝트 데모 영상"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </section>
        )}

        {/* 프로젝트 구성 및 설계 */}
        {project.projectStructureAndDesign && (
          <section className="project-structure-design">
            <h2>⚡️ 프로젝트 구성 및 설계</h2>
            
            {/* Site Map */}
            {project.projectStructureAndDesign.siteMap && (
              <div className="site-map">
                <h3>📙 Site Map</h3>
                
                {project.projectStructureAndDesign.siteMap.customerFlow && (
                  <div className="flow-section">
                    <h4>{project.projectStructureAndDesign.siteMap.customerFlow.title}</h4>
                    <p>{project.projectStructureAndDesign.siteMap.customerFlow.description}</p>
                    {project.projectStructureAndDesign.siteMap.customerFlow.image && (
                      <img 
                        src={project.projectStructureAndDesign.siteMap.customerFlow.image} 
                        alt="고객 데이터 흐름" 
                        className="flow-image"
                      />
                    )}
                  </div>
                )}
                
                {project.projectStructureAndDesign.siteMap.adminFlow && (
                  <div className="flow-section">
                    <h4>{project.projectStructureAndDesign.siteMap.adminFlow.title}</h4>
                    <p>{project.projectStructureAndDesign.siteMap.adminFlow.description}</p>
                    {project.projectStructureAndDesign.siteMap.adminFlow.image && (
                      <img 
                        src={project.projectStructureAndDesign.siteMap.adminFlow.image} 
                        alt="관리자 데이터 흐름" 
                        className="flow-image"
                      />
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Database ERD */}
            {project.projectStructureAndDesign.databaseERD && (
              <div className="database-erd">
                <h3>📙 Database ERD</h3>
                <p>{project.projectStructureAndDesign.databaseERD.description}</p>
                {project.projectStructureAndDesign.databaseERD.image && (
                  <img 
                    src={project.projectStructureAndDesign.databaseERD.image} 
                    alt="Database ERD" 
                    className="erd-image"
                    onClick={() => openImageModal(project.projectStructureAndDesign.databaseERD.image)}
                  />
                )}
                {project.projectStructureAndDesign.databaseERD.features && (
                  <ul className="erd-features">
                    {project.projectStructureAndDesign.databaseERD.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
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
            <h2>🔎 사용 기술 상세</h2>
            {Object.entries(project.techStack).map(([category, techs]) => (
              <div key={category} className="tech-category">
                <h3>{category}</h3>
                <ul className="tech-list">
                  {techs.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        )}

        {/* 기술 사용처 설명 (Urban Village만) */}
        {project.technologyUsage && (
          <section className="technology-usage">
            <h2>🔎 사용 기술의 사용처</h2>
            
            <div className="usage-category">
              <h3>백엔드 (Backend)</h3>
              <p><strong>역할:</strong> {project.technologyUsage.backend.role}</p>
              <p><strong>Urban Village에서의 역할:</strong> {project.technologyUsage.backend.urbanVillageRole}</p>
            </div>

            <div className="usage-category">
              <h3>데이터베이스 (DB)</h3>
              <p><strong>역할:</strong> {project.technologyUsage.database.role}</p>
              <p><strong>Urban Village에서의 역할:</strong> {project.technologyUsage.database.urbanVillageRole}</p>
            </div>

            <div className="usage-category">
              <h3>프론트엔드 (Frontend)</h3>
              <p><strong>역할:</strong> {project.technologyUsage.frontend.role}</p>
              <p><strong>Urban Village에서의 역할:</strong> {project.technologyUsage.frontend.urbanVillageRole}</p>
            </div>
          </section>
        )}

        {/* 프로젝트 키워드 */}
        {project.keyTechnicalFeatures && (
          <section className="key-technical-features">
            <h2>⚡️ 프로젝트 키워드</h2>
            {project.keyTechnicalFeatures.map((feature, index) => (
              <div key={index} className="technical-feature">
                <h3>📙 {feature.title}</h3>
                <p>{feature.description}</p>
                {feature.image && (
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="feature-image"
                    onClick={() => openImageModal(feature.image)}
                  />
                )}
              </div>
            ))}
          </section>
        )}

        {/* 프로젝트 이미지 (기존 방식) */}
        {project.images && project.images.length > 0 && !project.mainFeatures && (
          <section className="project-images">
            <h2>프로젝트 스크린샷</h2>
            <div className="images-grid">
              {project.images.map((image, index) => (
                <img 
                  key={index} 
                  src={image} 
                  alt={`프로젝트 스크린샷 ${index + 1}`} 
                  className="project-screenshot"
                  onClick={() => openImageModal(image)}
                />
              ))}
            </div>
          </section>
        )}

        {/* 주요 기능 (모든 프로젝트 대응) */}
        {project.mainFeatures && (
          <section className="main-features">
            <h2>⚡️ 프로젝트 주요 기능</h2>
            
            {/* 모갔슈 - 회원가입/로그인 */}
            {project.mainFeatures.authentication && (
              <div className="feature-section">
                <h3>📙 {project.mainFeatures.authentication.title}</h3>
                <p className="feature-description">{project.mainFeatures.authentication.description}</p>
                
                <div className="feature-details">
                  <h4>🔎 주요 기능</h4>
                  <ul>
                    {project.mainFeatures.authentication.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  
                  <h4>🔎 기술적 특징</h4>
                  <ul>
                    {project.mainFeatures.authentication.technicalDetails.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* 모갔슈 - 커뮤니티 */}
            {project.mainFeatures.community && (
              <div className="feature-section">
                <h3>📙 {project.mainFeatures.community.title}</h3>
                <p className="feature-description">{project.mainFeatures.community.description}</p>
                
                <div className="feature-details">
                  <h4>🔎 주요 기능</h4>
                  <ul>
                    {project.mainFeatures.community.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  
                  <h4>🔎 기술적 특징</h4>
                  <ul>
                    {project.mainFeatures.community.technicalDetails.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* 모갔슈 - AI 진단 */}
            {project.mainFeatures.aiDiagnosis && (
              <div className="feature-section">
                <h3>📙 {project.mainFeatures.aiDiagnosis.title}</h3>
                <p className="feature-description">{project.mainFeatures.aiDiagnosis.description}</p>
                
                <div className="feature-details">
                  <h4>🔎 주요 기능</h4>
                  <ul>
                    {project.mainFeatures.aiDiagnosis.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  
                  <h4>🔎 기술적 특징</h4>
                  <ul>
                    {project.mainFeatures.aiDiagnosis.technicalDetails.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* 모갔슈 - 지도 서비스 */}
            {project.mainFeatures.mapService && (
              <div className="feature-section">
                <h3>📙 {project.mainFeatures.mapService.title}</h3>
                <p className="feature-description">{project.mainFeatures.mapService.description}</p>
                
                <div className="feature-details">
                  <h4>🔎 주요 기능</h4>
                  <ul>
                    {project.mainFeatures.mapService.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  
                  <h4>🔎 기술적 특징</h4>
                  <ul>
                    {project.mainFeatures.mapService.technicalDetails.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* 모갔슈 - 포인트 시스템 */}
            {project.mainFeatures.pointSystem && (
              <div className="feature-section">
                <h3>📙 {project.mainFeatures.pointSystem.title}</h3>
                <p className="feature-description">{project.mainFeatures.pointSystem.description}</p>
                
                <div className="feature-details">
                  <h4>🔎 주요 기능</h4>
                  <ul>
                    {project.mainFeatures.pointSystem.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  
                  <h4>🔎 기술적 특징</h4>
                  <ul>
                    {project.mainFeatures.pointSystem.technicalDetails.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Urban Village - 로그인 및 회원가입 */}
            {project.mainFeatures.loginAndSignup && (
              <div className="feature-section">
                <h3>📙 {project.mainFeatures.loginAndSignup.title}</h3>
                {project.mainFeatures.loginAndSignup.image && (
                  <img 
                    src={project.mainFeatures.loginAndSignup.image} 
                    alt="로그인 및 회원가입" 
                    className="feature-image"
                    onClick={() => openImageModal(project.mainFeatures.loginAndSignup.image)}
                  />
                )}
                <ul>
                  {project.mainFeatures.loginAndSignup.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Urban Village - 숙소 검색 */}
            {project.mainFeatures.accommodationSearch && (
              <div className="feature-section">
                <h3>📙 {project.mainFeatures.accommodationSearch.title}</h3>
                {project.mainFeatures.accommodationSearch.image && (
                  <img 
                    src={project.mainFeatures.accommodationSearch.image} 
                    alt="숙소 검색" 
                    className="feature-image"
                    onClick={() => openImageModal(project.mainFeatures.accommodationSearch.image)}
                  />
                )}
                <ul>
                  {project.mainFeatures.accommodationSearch.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Urban Village - 숙소 찜하기 */}
            {project.mainFeatures.wishlist && (
              <div className="feature-section">
                <h3>📙 {project.mainFeatures.wishlist.title}</h3>
                {project.mainFeatures.wishlist.image && (
                  <img 
                    src={project.mainFeatures.wishlist.image} 
                    alt="숙소 찜하기" 
                    className="feature-image"
                    onClick={() => openImageModal(project.mainFeatures.wishlist.image)}
                  />
                )}
                <ul>
                  {project.mainFeatures.wishlist.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Urban Village - 결제 및 예약 */}
            {project.mainFeatures.paymentAndReservation && (
              <div className="feature-section">
                <h3>📙 {project.mainFeatures.paymentAndReservation.title}</h3>
                {project.mainFeatures.paymentAndReservation.images && (
                  <div className="images-grid">
                    {project.mainFeatures.paymentAndReservation.images.map((image, index) => (
                      <img 
                        key={index} 
                        src={image} 
                        alt={`결제 및 예약 ${index + 1}`} 
                        className="feature-image"
                        onClick={() => openImageModal(image)}
                      />
                    ))}
                  </div>
                )}
                <ul>
                  {project.mainFeatures.paymentAndReservation.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Urban Village - 리뷰 */}
            {project.mainFeatures.reviews && (
              <div className="feature-section">
                <h3>📙 {project.mainFeatures.reviews.title}</h3>
                {project.mainFeatures.reviews.customer && (
                  <div className="sub-feature">
                    <h4>🔎 고객</h4>
                    {project.mainFeatures.reviews.customer.images && (
                      <div className="images-grid">
                        {project.mainFeatures.reviews.customer.images.map((image, index) => (
                          <img 
                            key={index} 
                            src={image} 
                            alt={`리뷰 ${index + 1}`} 
                            className="feature-image"
                            onClick={() => openImageModal(image)}
                          />
                        ))}
                      </div>
                    )}
                    <ul>
                      {project.mainFeatures.reviews.customer.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Urban Village - 관리자 모드 */}
            {project.mainFeatures.adminMode && (
              <div className="feature-section">
                <h3>📙 {project.mainFeatures.adminMode.title}</h3>
                {project.mainFeatures.adminMode.statistics && (
                  <div className="sub-feature">
                    <h4>🔎 통계</h4>
                    {project.mainFeatures.adminMode.statistics.images && (
                      <div className="images-grid">
                        {project.mainFeatures.adminMode.statistics.images.map((image, index) => (
                          <img 
                            key={index} 
                            src={image} 
                            alt={`관리자 통계 ${index + 1}`} 
                            className="feature-image"
                            onClick={() => openImageModal(image)}
                          />
                        ))}
                      </div>
                    )}
                    <ul>
                      {project.mainFeatures.adminMode.statistics.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </section>
        )}

        {/* 이미지 모달 */}
        {selectedImage && (
          <div className="image-modal" onClick={closeImageModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close-button" onClick={closeImageModal}>&times;</span>
              <img src={selectedImage} alt="확대된 이미지" className="modal-image" />
            </div>
          </div>
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

        {/* 주요 기능 (기존 방식) */}
        {project.features && !project.mainFeatures && (
          <section className="project-features">
            <h2>주요 기능</h2>
            <ul>
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
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

        {/* 트러블슈팅 */}
        {project.troubleshooting && (
          <section className="troubleshooting-section">
            <h2>⚡️ Troubleshooting</h2>
            <div className="troubleshooting-content">
              <h3>📙 {project.troubleshooting.title}</h3>
              
              <div className="troubleshooting-problem">
                <h4>문제 상황</h4>
                <p>{project.troubleshooting.problem}</p>
                
                {project.troubleshooting.casesDescription && (
                  <div className="cases-description">
                    <p>객실이 예약 기간에 대해 중복될 경우의 수는 다음과 같습니다:</p>
                    <ol>
                      {project.troubleshooting.casesDescription.map((caseDesc, index) => (
                        <li key={index}>{caseDesc}</li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>

              <div className="troubleshooting-solution">
                <h4>해결 방법</h4>
                <p>{project.troubleshooting.solution}</p>
              </div>

              {project.troubleshooting.images && (
                <div className="troubleshooting-images">
                  <div className="images-grid">
                    {project.troubleshooting.images.map((image, index) => (
                      <img 
                        key={index} 
                        src={image} 
                        alt={`트러블슈팅 ${index + 1}`} 
                        className="troubleshooting-image"
                        onClick={() => openImageModal(image)}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div className="troubleshooting-result">
                <h4>결과</h4>
                <p>{project.troubleshooting.result}</p>
              </div>
            </div>
          </section>
        )}

        {/* 사용 API */}
        {project.apis && project.apis.length > 0 && (
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

      </div>
    </div>
  );
}

export default ProjectDetail;