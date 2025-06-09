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
            {/* 비디오가 있는 경우 */}
            {project.videoUrl && (
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

        {/* 기술 스택 */}
        <section className="tech-stack">
          <h2>사용 기술</h2>
          <div className="skills-list">
            {project.skills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </section>

        {/* 프로젝트 이미지 */}
        {project.images && project.images.length > 0 && (
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

        {/* 주요 기능 */}
        <section className="project-features">
          <h2>주요 기능</h2>
          <ul>
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>

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

        {/* 기술 스택 상세 */}
        {project.techStack && (
          <section className="tech-stack-detail">
            <h2>기술 스택 상세</h2>
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

        {/* 프로젝트 구조 */}
        {project.projectStructure && (
          <section className="project-structure">
            <h2>프로젝트 구조</h2>
            {Object.entries(project.projectStructure).map(([folder, contents]) => (
              <div key={folder} className="structure-folder">
                <h4>{folder}</h4>
                {typeof contents === 'object' ? (
                  <ul className="structure-contents">
                    {Object.entries(contents).map(([key, value]) => (
                      <li key={key}><strong>{key}:</strong> {value}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{contents}</p>
                )}
              </div>
            ))}
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