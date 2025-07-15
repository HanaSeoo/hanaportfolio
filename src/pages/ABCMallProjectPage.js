// src/pages/ABCMallProjectPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProjectDetail.css'; // 공통 스타일 시트 사용

function ABCMallProjectPage() {
  const project = {
    id: 'abcmall',
    title: 'ABC ShoppingMall',
    description: '의류 쇼핑몰 구축 프로젝트',
    period: '2025.03.3 - 2025.03.13',
    mainimage: '/image/projectimage/abcShopping/3-3.jpg',
    videoUrl: 'https://www.youtube.com/embed/AosiUaQ-lYo',
    gitRepository: 'https://github.com/abc/ABC-ShoppingMall',
    projectOverview: {
      projectName: 'ABC ShoppingMall',
      developmentPeriod: '2025.03.3 - 2025.03.13',
      developmentTeam: 3,
      projectType: '의류 및 악세사리 판매 쇼핑몰',
      gitRepository: 'https://github.com/abc/ABC-ShoppingMall',
    },
    background: [
      '온라인 쇼핑의 확산과 의류 시장의 다양화에 따라 사용자 맞춤형 쇼핑 경험을 제공하는 플랫폼의 필요성이 증가했습니다.',
      '기존 쇼핑몰 시스템의 복잡한 구매 과정과 제한적인 상품 관리 기능을 개선하여 효율성을 높이고자 했습니다.',
      'JavaFX를 활용한 데스크톱 기반 쇼핑몰 시스템을 구축하여 직관적이고 사용자 친화적인 인터페이스를 제공하고자 했습니다.',
    ],
    projectGoals: [
      '사용자 친화적인 데스크톱 쇼핑몰 애플리케이션 개발',
      '의류 및 악세사리 상품의 효율적인 카테고리 관리 시스템 구축',
      '회원 가입, 로그인, 정보 수정 등 포괄적인 회원 관리 기능 구현',
      '장바구니, 결제, 배송 조회 등 완전한 쇼핑 프로세스 지원',
      '관리자용 상품 등록 및 재고 관리 시스템 개발',
    ],
    features: [
      '쇼핑기능: 상품 카테고리별 조회, 상품 상세 정보 확인, 장바구니 담기 및 관리',
      '회원기능: 회원 가입, 로그인/로그아웃, 개인정보 수정, 마이페이지',
      '상품 구매 및 배송조회: 결제 처리, 주문 내역 확인, 배송 상태 추적',
      '관리자 기능: 상품 등록/수정/삭제, 재고 관리, 회원 관리',
      'Q&A 기능: 고객 문의 등록 및 답변 관리',
    ],
    projectStructure: {
      title: '프로젝트 주요 구조',
      description: 'ABCShopping Mall 프로젝트는 모듈별로 체계적으로 구성되어 있습니다.',
      structure: [
        'category: 상품 카테고리 관련',
        'member: 회원관리 기능',
        'login: API 로그인(구글 등)',
        'pay: 결제 관리자 기능',
        'delivery: 배송번호로 배송 조회',
        'question: Q & A 기능',
        'common: 공통 모듈',
        'resource: 리소스 파일',
        'fxml: Scene Builder',
      ],
    },
    storyboard: {
      title: '스토리보드',
      description: 'ABC Shopping 스토리보드는 main에서 시작하여 각 모듈로 연결되는 구조입니다.',
      flow: 'main → abcShoppingMall → category/member/login → question/delivery/pay → common/resource/fxml (모든 패키지가 참조하는 패키지)',
    },
    mainFeatures: {
      shoppingFunction: {
        title: '쇼핑기능',
        description: '카테고리별 상품 조회 및 쇼핑카트 관리 기능을 제공합니다.',
        features: [
          '카테고리 분류: 의류, 신발, 액세서리 등 체계적인 상품 분류',
          '상품 상세 조회: 상품 이미지, 가격, 설명 등 상세 정보 확인',
          '장바구니 관리: 상품 추가, 수량 변경, 삭제 기능',
          '쇼핑카트: 선택한 상품들의 총합 계산 및 주문 진행',
        ],
        technicalDetails: [
          'JavaFX TableView를 활용한 상품 목록 표시',
          'Observable 패턴을 사용한 실시간 장바구니 업데이트',
          'DAO 패턴을 통한 데이터베이스 연동',
        ],
      },
      memberFunction: {
        title: '회원기능',
        description: '회원 가입부터 정보 관리까지 포괄적인 회원 서비스를 제공합니다.',
        features: [
          '회원가입: 아이디, 비밀번호, 개인정보 등록',
          '로그인/로그아웃: 세션 기반 인증 시스템',
          '회원정보 수정: 개인정보 변경 및 업데이트',
          '마이페이지: 주문 내역, 개인정보 관리',
        ],
        technicalDetails: [
          'BCrypt를 사용한 비밀번호 암호화',
          'Session 관리를 통한 로그인 상태 유지',
          'TextField 유효성 검사 및 실시간 피드백',
        ],
      },
      purchaseAndDelivery: {
        title: '상품 구매 및 배송조회',
        description: '결제부터 배송 추적까지 완전한 구매 프로세스를 지원합니다.',
        features: [
          '결제 처리: 신용카드, 계좌이체 등 다양한 결제 수단',
          '주문 확인: 주문 상품, 수량, 총액 등 주문 정보 확인',
          '배송 조회: 배송번호를 통한 실시간 배송 상태 추적',
          '주문 내역: 과거 주문 이력 조회 및 관리',
        ],
        technicalDetails: [
          'Oracle Database를 활용한 주문 정보 저장',
          'API 연동을 통한 배송 상태 조회',
          'Transaction 처리를 통한 데이터 일관성 보장',
        ],
      },
    },
    skills: ['JDK 17', 'Eclipse', 'Oracle Database', 'JavaFX Scene Builder'],
    techStack: {
      Backend: ['JDK 17'],
      IDE: ['Eclipse'],
      Database: ['Oracle Database'],
      Frontend: ['JavaFX Scene Builder'],
    },
    architecture: {
      Backend: 'JDK 17 (Java 개발 키트)',
      IDE: 'Eclipse (통합 개발 환경)',
      Database: 'Oracle Database (데이터 저장 및 관리)',
      Frontend: 'JavaFX Scene Builder (사용자 인터페이스 구축)',
    },
    databaseDesign: {
      description: '쇼핑몰 시스템의 효율적인 데이터 관리를 위한 Oracle Database ERD를 설계했습니다.',
      features: [
        '회원 테이블: 회원 정보, 로그인 인증, 개인정보 관리',
        '상품 테이블: 의류 및 액세서리 상품 정보, 가격, 재고 관리',
        '주문 테이블: 주문 정보, 결제 내역, 주문 상태 관리',
        '카테고리 테이블: 상품 분류 체계, 계층적 카테고리 구조',
        '배송 테이블: 배송 정보, 배송 상태, 추적 번호 관리',
        'Q&A 테이블: 고객 문의, 답변 관리 시스템',
        'ERD 설계를 통한 테이블 간 관계 정의 및 데이터 무결성 보장',
      ],
    },
    teamMembers: [
      { name: '김범룡', role: 'Backend Developer', portfolio: '' },
      { name: '서하나', role: 'Frontend,Backend Developer', portfolio: 'https://github.com/HanaSeoo' },
      { name: '정성효', role: 'Database Developer', portfolio: '' },
    ],
    technologyUsage: {
      backend: {
        role: '사용자에게는 보이지 않는 서버 쪽에서 작동하는 핵심 로직 부분입니다. 프론트엔드로부터 전달받은 요청을 처리하고, 데이터베이스와 연동하여 데이터를 관리하며, 비즈니스 규칙에 따라 필요한 연산이나 작업을 수행합니다.',
        abcShoppingRole: '회원 가입 및 로그인/로그아웃 처리 등과 같은 회원 관리와 물건을 등록하고 재고 관리 등과 같은 관리자 기능을 수행합니다.',
      },
      database: {
        role: '프로그램 운영에 필요한 모든 데이터를 영구적으로 저장하고 관리하는 시스템입니다. 사용자의 정보, 서비스 운영에 필요한 콘텐츠(구매, 쿠폰 등), 사용자의 활동 기록(배송조회) 등이 안전하게 보관되며, 백엔드 애플리케이션은 DB에 접근하여 데이터를 읽거나 씁니다.',
      },
      frontend: {
        role: '사용자가 웹 브라우저나 모바일 앱 화면을 통해 직접 보고 상호작용하는 부분입니다. 사용자 인터페이스(UI)를 구축하고 사용자 경험(UX)을 디자인하며, 사용자의 입력이나 동작을 감지하여 백엔드에 요청을 보내는 역할을 합니다.',
        abcShoppingRole: 'Scene Builder를 이용하여 사용자가 직관적으로 쇼핑을 하고 구매를 할 수 있도록 흰색, 검정색을 사용하여 상품의 색상이 더욱 돋보일 수 있도록 하였고 구매 버튼, 회원탈퇴 등 사용자에게 강조하며 전달해야 할 정보에는 강한 색감을 사용하는 전략적 디자인을 구성했습니다.',
      },
    },
    troubleshooting: {
      title: '데이터베이스 연동 및 JavaFX 컴포넌트 최적화',
      problem: 'Oracle Database와 JavaFX 컴포넌트 간의 데이터 연동 과정에서 성능 저하와 메모리 누수 문제가 발생했습니다. 특히 대량의 상품 데이터를 TableView에 로드할 때 응답 속도가 현저히 느려지고, 반복적인 데이터 조회로 인한 메모리 사용량 증가 문제가 발생했습니다.',
      casesDescription: [
        'TableView에 상품 데이터 로드 시 전체 데이터를 한 번에 로드하여 성능 저하',
        'Database Connection Pool 설정 미흡으로 인한 연결 지연',
        'JavaFX Observable 컬렉션의 비효율적 사용으로 인한 메모리 누수',
        'Scene Builder로 생성한 FXML 파일의 컨트롤러 바인딩 오류',
      ],
      solution: 'Database 연동 부분에서는 Connection Pool을 적절히 설정하고, 페이징 처리를 통해 필요한 데이터만 조회하도록 최적화했습니다. JavaFX TableView에는 가상화된 셀을 사용하여 메모리 사용량을 줄이고, Observable 패턴을 효율적으로 활용하여 실시간 데이터 업데이트를 구현했습니다. 또한 FXML 파일의 컨트롤러 바인딩을 정확히 설정하여 UI 컴포넌트 간의 데이터 동기화 문제를 해결했습니다.',
      result: '데이터베이스 연동 최적화를 통해 상품 목록 로딩 속도가 약 70% 향상되었고, 메모리 사용량도 현저히 감소했습니다. 사용자가 쇼핑몰을 이용할 때 더욱 원활하고 빠른 응답을 경험할 수 있게 되었으며, 시스템의 안정성도 크게 개선되었습니다. 이 과정을 통해 JavaFX 애플리케이션 개발 시 성능 최적화의 중요성과 데이터베이스 연동 시 고려해야 할 사항들을 깊이 이해하게 되었습니다.',
    },
    challenges: 'JavaFX를 활용한 데스크톱 애플리케이션 개발이 가장 큰 도전 과제였습니다. 특히, Oracle Database와의 효율적인 연동과 사용자 인터페이스의 반응성을 동시에 확보하는 것이 중요했습니다. 또한, Scene Builder를 통한 FXML 설계와 컨트롤러 간의 데이터 바인딩을 정확히 구현하는 데 많은 시간을 할애했습니다.',
    outcome: 'ABC ShoppingMall 프로젝트를 통해 JavaFX 기반의 데스크톱 애플리케이션 개발 경험을 쌓았습니다. 특히, Oracle Database 연동을 통한 데이터 관리와 사용자 친화적인 GUI 설계 능력을 향상시켰습니다. 팀원들과의 협업을 통해 프로젝트 관리 능력과 의사소통 스킬도 크게 발전시킬 수 있었습니다. 이 프로젝트는 실무에서 요구되는 데스크톱 애플리케이션 개발 역량을 기르는 데 중요한 경험이 되었습니다.',
  };

  const [selectedImage, setSelectedImage] = useState(null);
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

        {/* 프로젝트 헤더 */}
        <header className="project-header">
          <img className="mainimage" src={project.mainimage} alt={project.title} />
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

            {/* 프로젝트 배경 */}
        <section className="project-background">
          <h2>프로젝트 배경</h2>
          <ul>
            {project.background.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>


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
        
        {/* 데이터베이스 설계 */}
        {project.databaseDesign && (
          <section className="database-design">
            <h2>데이터베이스 설계</h2>
            <img class="detailImage" src="/image/projectImage/abcShopping/3-2.jpg" alt="프로젝트 이미지"></img>
            <p>{project.databaseDesign.description}</p>
            <ul>
              {project.databaseDesign.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>
        )}

        {/* 프로젝트 구조 */}
        {project.projectStructure && (
          <section className="project-structure">
            <h2>{project.projectStructure.title}</h2>
            <img class="detailImage" src="/image/projectImage/abcShopping/3-5.png" alt="프로젝트 이미지"></img>
            <p>{project.projectStructure.description}</p>
            <ul>
              {project.projectStructure.structure.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* 스토리보드 */}
        {project.storyboard && (
          <section className="project-storyboard">
            <h2>{project.storyboard.title}</h2>
            <img class="detailImage" src="/image/projectImage/abcShopping/3-1.jpg" alt="프로젝트 이미지"></img>
            <p>{project.storyboard.description}</p>
            <p><strong>흐름:</strong> {project.storyboard.flow}</p>
          </section>
        )}

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

        {/* 기술 사용처 */}
        {project.technologyUsage && (
          <section className="technology-usage">
            <h2>기술 사용처</h2>
            {Object.entries(project.technologyUsage).map(([key, usage]) => (
              <div key={key} className="usage-category">
                <h3>
                  {key === 'backend' ? '백엔드 (Backend)' :
                    key === 'database' ? '데이터베이스 (Database)' :
                    key === 'frontend' ? '프론트엔드 (Frontend)' : key}
                </h3>
                <p><strong>역할:</strong> {usage.role}</p>
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
                    <h5>주요 발생 사례</h5>
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
                    포트폴리오 (Git)
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
              <span className="close-button" onClick={closeImageModal}>×</span>
              <img className="modal-image" src={selectedImage} alt="확대 이미지" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ABCMallProjectPage;