// src/pages/PortfolioProjectPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProjectDetail.css'; // 공통 스타일 시트 사용

function PortfolioProjectPage() {
  // 개인 포트폴리오 프로젝트 데이터를 이 컴포넌트 안에 직접 작성
  const project = {
    id: 'portfolio',
    title: '개인 포트폴리오 웹사이트',
    description: 'React를 활용하여 개발한 개인 포트폴리오 웹사이트로, 모던한 UI/UX와 반응형 디자인을 통해 개발자로서의 역량과 프로젝트들을 효과적으로 소개하는 Single Page Application입니다.',
    period: '2025.06.01 - 06.20',
    thumbnail: '/image/projectimage/3_1.png',
    mainimage: '/image/projectimage/3_1.png',
    notionLink: 'https://www.notion.so/프로젝트1-링크-여기에-추가',
    videoUrl: null,
    projectOverview: {
      projectName: '개인 포트폴리오 웹사이트',
      developmentPeriod: '2025.06.01 - 06.20',
      developmentTeam: 1,
      projectType: 'Single Page Application (개인 포트폴리오)',
      notionLink: 'https://www.notion.so/프로젝트1-링크-여기에-추가',
    },
    background: [
      '개발자 브랜딩: 개발자로서의 정체성을 명확히 하고 전문성을 어필할 수 있는 온라인 포트폴리오의 필요성을 느꼈습니다.',
      'React 실무 역량 향상: 이론으로만 배웠던 React를 실제 프로젝트에 적용하여 컴포넌트 기반 개발 경험을 쌓고자 했습니다.',
      '모던 웹 개발 경험: 최신 웹 개발 트렌드를 반영한 SPA(Single Page Application) 개발 경험을 통해 실무 역량을 기르고자 했습니다.',
      '사용자 경험 최적화: 방문자가 정보를 쉽고 빠르게 찾을 수 있는 직관적인 UI/UX 설계에 집중하고자 했습니다.',
    ],
    features: [
      'React 기반 Single Page Application',
      '반응형 웹 디자인 (모바일, 태블릿, 데스크톱 대응)',
      '모던하고 세련된 UI/UX 디자인',
      '부드러운 페이지 전환 및 스크롤 애니메이션',
      '프로젝트 상세 페이지 및 이미지 모달',
      '스킬셋 및 경력 시각화',
      'GitHub 연동 및 외부 링크 관리',
      'SEO 최적화 및 성능 최적화',
      '실시간 배포 및 자동 업데이트',
    ],
    mainFeatures: {
      reactBasedSPA: {
        title: 'React 기반 Single Page Application',
        description: 'React의 컴포넌트 기반 아키텍처를 활용하여 유지보수가 용이하고 확장 가능한 SPA를 개발했습니다.',
        features: [
          '컴포넌트 재사용성 극대화를 통한 효율적인 개발',
          'Virtual DOM을 활용한 최적화된 렌더링 성능',
          '선언적 프로그래밍 방식으로 코드 가독성 향상',
          'JSX 문법을 통한 직관적인 UI 구성',
        ],
        technicalDetails: [
          'React Hooks (useState, useEffect)를 활용한 상태 관리',
          'Functional Component 기반 모던 React 개발',
          'React.memo를 통한 컴포넌트 렌더링 최적화',
          'Custom Hooks를 통한 로직 재사용',
        ],
      },
      responsiveDesign: {
        title: '반응형 웹 디자인',
        description: '모든 디바이스에서 최적화된 사용자 경험을 제공하는 반응형 웹 디자인을 구현했습니다.',
        features: [
          '모바일 퍼스트 접근 방식 적용',
          'Flexbox와 CSS Grid를 활용한 유연한 레이아웃',
          '브레이크포인트별 최적화된 UI 구성',
          '터치 인터페이스 고려한 모바일 UX',
        ],
        technicalDetails: [
          'CSS Media Queries를 통한 기기별 스타일 분기',
          'Viewport Meta Tag 설정으로 모바일 최적화',
          'rem, em 단위 사용으로 확장성 있는 레이아웃',
          'Progressive Enhancement 원칙 적용',
        ],
      },
      modernUIUX: {
        title: '모던하고 세련된 UI/UX 디자인',
        description: '최신 디자인 트렌드를 반영한 직관적이고 아름다운 사용자 인터페이스를 설계했습니다.',
        features: [
          '미니멀하고 깔끔한 디자인 언어',
          '일관된 색상 팔레트와 타이포그래피',
          '사용자 중심의 정보 구조 설계',
          '접근성을 고려한 인터페이스 구성',
        ],
        technicalDetails: [
          'CSS3 애니메이션과 트랜지션 효과 적용',
          'Box Shadow와 Border Radius로 깊이감 연출',
          'Color Theory 기반 색상 조합',
          'WCAG 접근성 가이드라인 준수',
        ],
      },
      routingManagement: {
        title: 'React Router를 이용한 SPA 라우팅',
        description: 'React Router를 활용하여 매끄러운 페이지 전환과 URL 관리를 구현했습니다.',
        features: [
          '페이지 새로고침 없는 부드러운 라우팅',
          'URL 기반 네비게이션과 북마크 지원',
          '동적 라우팅으로 프로젝트 상세 페이지 구현',
          '404 에러 페이지와 리다이렉션 처리',
        ],
        technicalDetails: [
          'BrowserRouter를 통한 HTML5 History API 활용',
          'Route 컴포넌트로 경로별 컴포넌트 매핑',
          'useNavigate, useParams 훅 활용',
          'Lazy Loading을 통한 코드 스플리팅',
        ],
      },
      performanceOptimization: {
        title: 'SEO 최적화 및 성능 최적화',
        description: '검색 엔진 최적화와 웹 성능 향상을 위한 다양한 기법을 적용했습니다.',
        features: [
          '이미지 최적화와 지연 로딩 구현',
          '메타데이터와 Open Graph 태그 설정',
          '번들 크기 최소화와 코드 스플리팅',
          '웹 표준 준수와 시맨틱 HTML 구조',
        ],
        technicalDetails: [
          'React.lazy()를 통한 컴포넌트 지연 로딩',
          'Webpack Bundle Analyzer로 번들 크기 분석',
          'Lighthouse 성능 점수 90+ 달성',
          'Helmet을 통한 동적 메타데이터 관리',
        ],
      },
    },
    skills: ['React', 'JavaScript', 'HTML', 'CSS', 'React Router', 'Node.js', 'Git', 'GitHub', 'Netlify', 'Responsive Design'],
    techStack: {
      프론트엔드: [
        'React 18 - 컴포넌트 기반 사용자 인터페이스 라이브러리',
        'JavaScript ES6+ - 모던 JavaScript 문법 활용',
        'HTML5 - 시맨틱 마크업 구조',
        'CSS3 - Flexbox, Grid, 애니메이션을 활용한 스타일링',
        'React Router - SPA 라우팅 관리',
      ],
      배포_및_운영: [
        'Git - 버전 관리 시스템',
        'GitHub - 원격 저장소 및 협업',
        'Netlify - 정적 사이트 호스팅 및 자동 배포',
      ],
    },
    architecture: {
      프론트엔드: 'React 컴포넌트 기반 SPA 구조',
      라우팅: 'React Router를 통한 클라이언트 사이드 라우팅',
      상태관리: 'React Hooks (useState, useEffect)를 통한 상태 관리',
      스타일링: 'CSS3 + Flexbox/Grid를 활용한 반응형 디자인',
      배포: 'Netlify를 통한 정적 사이트 호스팅',
      버전관리: 'Git/GitHub를 통한 소스코드 관리',
    },
    teamMembers: [
      { name: '서하나', role: '풀스택 개발자', portfolio: 'https://www.notion.so/1b9db822a28e801eb04af2f96ab48d5a' },
    ],
    challenges: 'React 초기 학습 곡선 극복, 컴포넌트 간 상태 관리 최적화, 반응형 디자인에서의 일관된 사용자 경험 구현, 이미지 최적화 및 성능 향상, SEO 최적화를 위한 메타데이터 관리, 다양한 브라우저 호환성 확보, 지속적인 콘텐츠 업데이트를 위한 확장 가능한 구조 설계 등 프론트엔드 개발의 전반적인 영역에서 실무 수준의 품질을 달성하는 도전이 있었습니다.',
    outcome: 'React를 활용한 실제 프로젝트 개발 경험을 통해 컴포넌트 기반 개발 역량을 크게 향상시켰고, 모던 JavaScript와 ES6+ 문법에 대한 이해도를 높일 수 있었습니다. 반응형 웹 디자인과 사용자 경험 최적화에 대한 실무 감각을 기를 수 있었으며, Git을 활용한 버전 관리와 Netlify를 통한 배포 경험으로 개발 전 과정에 대한 이해도를 높였습니다.',
    images: [
      '/image/projectimage/3_1.png',
      '/image/projectimage/3_2.png',
      '/image/projectimage/3_3.png',
      '/image/projectimage/3_4.png',
      '/image/projectimage/3_5.png',
    ],
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (image) => setSelectedImage(image);
  const closeImageModal = () => setSelectedImage(null);

  if (!project) {
    return (
      <div className="project-detail-page">
        <div className="container">
          <Link to="/" className="back-button">← 홈으로 돌아가기</Link>
          <h1>프로젝트 정보를 찾을 수 없습니다.</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      <div className="container">
        <Link to="/" className="back-button">← 홈으로 돌아가기</Link>

        {/* 프로젝트 헤더 */}
        <header className="project-header">
          <img className="mainimage" src={project.mainimage || project.thumbnail} alt={project.title} />
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

          {/* 노션/GitHub 링크 버튼 */}
          {(project.notionLink || project.gitRepository) && (
            <div className="project-actions">
              {project.notionLink && (
                <a href={project.notionLink} target="_blank" rel="noopener noreferrer" className="notion-link-btn">
                  상세보기 (Notion)
                </a>
              )}
              {project.gitRepository && !project.notionLink && (
                <a href={project.gitRepository} target="_blank" rel="noopener noreferrer" className="notion-link-btn">
                  GitHub Repository
                </a>
              )}
            </div>
          )}
        </header>

        {/* 프로젝트 개요 */}
        {project.projectOverview && (
          <section className="project-overview">
            <h2>프로젝트 개요</h2>
            <div className="overview-grid">
              <div className="overview-item"><strong>프로젝트명:</strong> {project.projectOverview.projectName}</div>
              <div className="overview-item"><strong>개발 기간:</strong> {project.projectOverview.developmentPeriod}</div>
              <div className="overview-item"><strong>개발 인원:</strong> {project.projectOverview.developmentTeam}명</div>
              <div className="overview-item"><strong>프로젝트 형태:</strong> {project.projectOverview.projectType}</div>
              {project.projectOverview.notionLink && (
                <div className="overview-item">
                  <strong>Notion Link:</strong>
                  <a href={project.projectOverview.notionLink} target="_blank" rel="noopener noreferrer">
                    {project.projectOverview.notionLink}
                  </a>
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
                {feature.description && (<div className="feature-description">{feature.description}</div>)}
                {feature.features && (<ul>{feature.features.map((item, index) => (<li key={index}>{item}</li>))}</ul>)}
                {feature.technicalDetails && (<div className="feature-details"><h4>기술적 특징</h4><ul>{feature.technicalDetails.map((detail, index) => (<li key={index}>{detail}</li>))}</ul></div>)}
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

        {/* 이미지 모달 */}
        {selectedImage && (
          <div className="image-modal" onClick={closeImageModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close-button" onClick={closeImageModal}>×</span>
              <img className="modal-image" src={selectedImage} alt="확대 이미지" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PortfolioProjectPage;