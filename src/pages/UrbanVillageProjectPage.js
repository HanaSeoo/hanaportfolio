// src/pages/UrbanVillageProjectPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProjectDetail.css'; // 공통 스타일 시트 사용

function UrbanVillageProjectPage() {
  // Urban Village 프로젝트 데이터를 이 컴포넌트 안에 직접 작성
  const project = {
    id: 'urbanvillage',
    title: '정부 숙박 플랫폼 Urban_Village',
    description: '숙박 플랫폼 (고객, 사업자/숙소, 관리자 파트 기능 분리)',
    period: '2025.03.31 - 2022.05.25',
    mainimage: '/image/Urban&VillageLogo.png',
    videoUrl: 'https://www.youtube.com/embed/JMxSRmcZiU8?si=m63JhG7mEJt36m0v',
    gitRepository: 'https://github.com/urban-village/Urban-Village',
    projectOverview: {
      projectName: 'Urban Village 숙박 플랫폼',
      developmentPeriod: '2025.03.31 - 2022.05.25',
      developmentTeam: 4,
      projectType: '숙박 플랫폼 (고객, 사업자/숙소, 관리자 파트 기능 분리)',
      gitRepository: 'https://github.com/urban-village/Urban-Village',
    },
    background: [
      'Urban Village 서비스 운영을 위한 데이터베이스의 구조를 만드는 역할입니다.',
    ],
    siteMap: {
      title: 'Site Map',
      customerFlow: '고객 데이터 입출력 순서',
      adminFlow: 'Main & 관리자 입출력 순서',
      description: '회원가입부터 숙소 검색, 예약, 관리자 기능까지의 전체적인 서비스 흐름',
    },
    databaseDesign: {
      detailImage3: '/image/projectImage/urban/2-3.png',
      description: 'Urban Village 서비스 운영을 위한 데이터베이스의 구조를 만드는 역할입니다.',
      features: [
        '핵심 정보 저장 테이블: 사용자 관련(회원, 관리자, 청소 담당자 정보를 분리해서 관리), 숙소 관련(숙소 자체 정보와 각 숙소의 객실 정보를 저장하며, 관리자/청소 담당자와 연결, 사진 경로는 숙소/리뷰 테이블에 직접 저장하는 방식), 예약 및 거래 관련(예약 및 결제 정보, 회원들의 찜 목록을 관리), 기타(리뷰, 쿠폰 정보 등을 저장하는 테이블도 포함)',
        '자동 번호 생성 (시퀀스): 숙소, 찜 목록, 리뷰 등에 새로운 데이터가 추가될 때마다 자동으로 고유한 번호를 매겨주는 기능을 설정',
        '자동 실행 기능 (트리거): 데이터가 입력되거나 수정될 때 특정 작업(예: ID 자동 부여, 수정 날짜 갱신)이 자동으로 실행되도록 설정',
        '데이터 조회 편의 기능 (뷰): 결제 데이터를 기반으로 일별, 월별, 연도별 매출 정보를 쉽게 조회할 수 있도록 미리 정의된 조회 방식을 제공',
      ],
    },
    skills: [
      'Java 11', 'Spring MVC', 'Spring AOP', 'MyBatis', 'Spring Security', 'CGLIB',
      'JSR 330', 'Logging', 'JavaMail', 'Thumbnailator', 'Apache Commons FileUpload',
      'Commons IO', 'Lombok', 'Jackson', 'Google API Client', 'JUnit', 'Apache Tiles',
      'Oracle', 'Oracle SQL', 'Oracle Cloud', 'Tomcat 9', 'HTML/CSS', 'JavaScript',
      'Bootstrap 5', 'JQuery', 'Eclipse', 'VSCode', 'GitHub', 'SQL Developer',
      'ERD cloud', 'Maven'
    ],
    techStack: {
      백엔드: [
        'Java 11',
        'Spring MVC',
        'Spring AOP', 
        'MyBatis',
        'Spring Security',
        'CGLIB',
        'JSR 330',
        'Logging',
        'JavaMail',
        'Thumbnailator',
        'Apache Commons FileUpload, Commons IO',
        'Lombok',
        'Jackson (JSON 처리)',
        'Google API Client (Google 로그인/서비스 연동)',
        'JUnit (테스트)',
        'Apache Tiles (서버 사이드 템플릿/레이아웃)',
      ],
      DB_WAS: [
        'Oracle (데이터베이스 시스템)',
        'Oracle SQL (데이터베이스 질의 언어)',
        'Oracle Cloud (클라우드 환경)',
        'Tomcat 9 (웹 애플리케이션 서버 - WAS)',
      ],
      프론트엔드: [
        'HTML/CSS (웹 페이지 구조 및 스타일)',
        'JavaScript (클라이언트 측 동적 기능)',
        'Bootstrap 5 (프론트엔드 UI 프레임워크)',
        'JQuery (JavaScript 라이브러리)',
      ],
      환경_도구: [
        'Mac, Windows 10 (운영 체제)',
        'Eclipse (통합 개발 환경 - IDE)',
        'VSCode (코드 에디터/IDE)',
        'GitHub (소스 코드 버전 관리 및 협업 플랫폼)',
        'SQL Developer (Oracle DB 관리 도구)',
        'ERD cloud (ERD 설계 도구)',
        'Maven (프로젝트 빌드 및 의존성 관리 도구)',
      ],
    },
    technologyUsage: {
      backend: {
        role: '사용자에게는 보이지 않는 서버 쪽에서 작동하는 핵심 로직 부분입니다. 프론트엔드로부터 전달받은 요청을 처리하고, 데이터베이스와 연동하여 데이터를 관리하며, 비즈니스 규칙에 따라 필요한 연산이나 작업을 수행합니다. 사용자 인증, 권한 관리, 트랜잭션 처리 등 중요한 기능들이 여기서 구현됩니다.',
        urbanVillageRole: '회원 가입 및 로그인/로그아웃 처리, 숙소 정보의 등록/수정/삭제 및 복잡한 검색 로직 수행, 예약 요청 확인 및 처리, 결제 시스템 연동 및 결제 정보 저장, 쿠폰 발급 및 적용 로직, 리뷰 저장 및 평점 계산, 관리자를 위한 데이터 집계 및 관리 기능 수행 등 프로그램의 핵심 비즈니스 로직 구현에 사용됩니다. (예: Spring Framework와 Spring Boot로 애플리케이션의 전체 구조 및 핵심 로직 구현, MyBatis로 DB 연동, Spring Security로 보안 처리, JUnit으로 기능 테스트)',
      },
      database: {
        role: '프로그램 운영에 필요한 모든 데이터를 영구적으로 저장하고 관리하는 시스템입니다. 사용자의 정보, 서비스 운영에 필요한 콘텐츠(숙소, 쿠폰 등), 사용자의 활동 기록(예약, 찜, 리뷰 등) 등이 안전하게 보관되며, 백엔드 애플리케이션은 DB에 접근하여 데이터를 읽거나 씁니다.',
        urbanVillageRole: '사용자의 계정 정보 및 회원 유형 관리, 등록된 모든 숙소의 상세 정보 및 객실 정보 저장, 과거 및 현재의 모든 예약 기록 및 결제 정보 저장, 작성된 리뷰 내용 및 평점 관리, 발급된 쿠폰 정보 및 사용 이력 관리 등 Urban Village 서비스 운영에 필요한 모든 데이터가 이곳에 저장됩니다. (예: Oracle DB 시스템에 데이터 저장, Oracle SQL 언어를 사용하여 데이터 조회/수정/삭제)',
      },
      frontend: {
        role: '사용자가 웹 브라우저나 모바일 앱 화면을 통해 직접 보고 상호작용하는 부분입니다. 사용자 인터페이스(UI)를 구축하고 사용자 경험(UX)을 디자인하며, 사용자의 입력이나 동작을 감지하여 백엔드에 요청을 보내는 역할을 합니다.',
        urbanVillageRole: '숙소 검색 및 목록 보기, 숙소 상세 정보 확인 화면 표시, 예약/결제 정보 입력 폼, 마이페이지 조회, 관리자 페이지의 UI 구성 등 사용자가 눈으로 보고 조작하는 모든 화면과 클라이언트 측에서 발생하는 동적인 기능 구현에 사용됩니다. (예: HTML/CSS로 화면 구조와 디자인, JavaScript/JQuery로 동적 기능 및 이벤트 처리, Bootstrap으로 반응형 레이아웃 및 UI 컴포넌트 활용)',
      },
    },
    keyTechnicalFeatures: [
      {
        title: 'Intercepter를 사용한 로그인과 viewName관리',
        description: '로그인 확인이 필요한 메소드에서 세션을 if문으로 반복하여 확인하는 중복 코드를 제거했습니다. 관리자가 접근할 수 있는페이지와 고객이 접근할 수 있는 페이지를 확실하게 분리 했습니다. 주요 기능에 접근할때 로그인이 안되어 있다면 로그인 창으로 갈 수 있도록 유도 했습니다.',
      },
      {
        title: '비지니스 로직의 분리',
        description: '비즈니스 로직을 Controller, Service, DAO 계층으로 명확히 분리하여 개발하였습니다. (계층별 책임을 분리해 유지보수성과 확장성을 높였습니다.)',
      },
      {
        title: 'Transaction의 사용',
        description: '결제를 할 때 @Transactional을 사용하여 결제 로직을 좀 더 견고히함. 데이터 일관성 보장: 결제 등록이 실패하면 DB에 어떤 데이터도 저장되지 않습니다. 성공한 경우에만 결제 정보가 안전하게 저장됩니다. 오류 발생 시 자동 롤백: 예외가 발생하면 트랜잭션이 자동으로 롤백되어 DB 상태를 이전 상태로 복구합니다. 별도로 복구 코드를 작성할 필요가 없습니다.',
      },
    ],
    mainFeatures: {
      loginSignup: {
        title: '로그인 및 회원가입',
        description: '고객과 관리자 로그인, 회원가입 분리된 시스템',
        features: [
          '고객과 관리자 로그인, 회원가입 분리',
          '구글 API를 이용한 소셜 로그인',
          '스프링 이메일을 통한 가입, 암호찾기 시 이메일 인증',
          '비동기적으로 중복체크',
        ],
      },
      accommodationSearch: {
        title: '숙소 검색',
        description: '메인 화면에서 검색창, 숙소 지역에 따른 카테고리, 호스트 추천으로 원하는 숙소를 탐색할 수 있습니다.',
        features: [
          '메인 화면에서 검색창, 숙소 지역에 따른 카테고리, 호스트 추천으로 원하는 숙소를 탐색할 수 있습니다',
          '숙소페이지에는 카카오 API 지도가 있어 정확한 위치 정보를 전달 받을 수 있습니다',
          '메인페이지에 별점과 예약수 조회수가 떠 있어 사용자가 좀 더 편리하게 숙소의 정보를 파악 할 수있습니다',
        ],
      },
      wishlist: {
        title: '숙소 찜하기',
        description: '원하는 숙소를 찜하거나 취소할 수 있고, 찜한 목록은 헤더 햄버거 버튼 위시리스트 탭에서 확인 가능합니다.',
        features: [
          '원하는 숙소를 찜하거나 취소할 수 있고, 찜한 목록은 헤더 햄버거 버튼 위시리스트 탭에서 확인 가능합니다',
          '또한 메인페이지에서 숙소에 하트 버튼을 누르면 위시리스트에 담거나 취소 할 수 있습니다',
        ],
      },
      paymentReservation: {
        title: '결제 및 예약',
        description: '아임포트 API를 이용해 결제 서비스를 구현했으며 예약된 날짜는 중복처리되어 예약이 불가능하게 됩니다.',
        features: [
          '아임포트 API를 이용해 결제 서비스를 구현했으며 예약된 날짜는 중복처리되어 예약이 불가능하게 됩니다',
          '관리자는 어떤 고객이 어떤 숙소를 예약 했는지 파악 할 수 있습니다',
          '만약 체크아웃 날짜보다 일찍 퇴실 처리할 경우 예약 중복 처리된 방은 다시 예약할 수 있도록 처리됩니다',
        ],
      },
      review: {
        title: '리뷰',
        description: '퇴실 완료처리된 예약에 한해 고객은 별점 평가와 리뷰 작성이 가능합니다.',
        customerFeatures: [
          '퇴실 완료처리된 예약에 한해 고객은 별점 평가과 리뷰 작성이 가능합니다',
          '작성된 평가와 리뷰는 숙소 상세페이지 및 메인페이지 숙소 리스트에서 확인이 가능합니다',
          '작성된 리뷰를 관리자가 삭제할 수 있습니다',
        ],
      },
      adminMode: {
        title: '관리자 모드',
        description: '관리자는 전반적인 일별, 월별, 연도별 매출을 그래프로 확인할 수 있습니다.',
        adminFeatures: [
          '관리자는 전반적인 일별, 월별, 연도별 매출을 그래프로 확인할 수 있습니다',
          '관리자는 모든 숙소의 등록. 삭제, 호스트 추천숙소 등록이 가능하도록 하였습니다',
          '숙소는 경상북도라는 일정 지역의 주소지만 등록이 가능하게 구성하였습니다',
          '청소부를 선별하는 서류를 첨부받고 관리할 수 있으며 청소부 배정을 관리자가 실행 할 수 있습니다',
        ],
      },
    },
    architecture: {
      Frontend: 'JSP (동적 페이지 렌더링, 사용자 상호작용)',
      Backend: 'Spring Boot (비즈니스 로직, 데이터 처리, API 제공)',
      Database: 'Oracle Database (데이터 저장 및 관리)',
      WAS: 'Tomcat 9 (웹 애플리케이션 서버)',
      Cloud: 'Oracle Cloud (클라우드 환경)',
    },
    teamMembers: [
      { name: '김대중', role: 'Backend Developer'},
      { name: '김찬영', role: 'Developer'},
      { name: '서하나', role: 'Backend, Frontend Developer', portfolio: 'https://github.com/HanaSeoo' },
      { name: '최승필', role: 'Frontend Developer'},
    ],
    troubleshooting: {
      title: '예약 날짜 저장 / 동일 기간 예약 중복 처리',
      problem: '초반기에 예약테이블의 체크인 - 체크아웃 날짜로만 예약 관련 서비스 로직을 처리했습니다. 이는 동일한 기간에 예약된 객실을 중복체크할 때 문제가 되었습니다.',
      casesDescription: [
        '(예약할 체크인) [예약된 체크인] (예약할 체크아웃) [예약된 체크아웃]',
        '(예약할 체크인) [예약된 체크인] [예약된 체크아웃] (예약할 체크아웃)',
        '[예약된 체크인] (예약할 체크인) [예약된 체크아웃] (예약할 체크아웃)',
        '[예약된 체크인] (예약할 체크인) (예약할 체크아웃) [예약된 체크아웃]',
      ],
      solution: '이에 객실 번호 - 예약 날짜를 저장하는 RESERVED 테이블을 만들었고 객실을 예약할 때는 예약 된 날짜 하루하루를 저장할 수 있도록 하여 간단하게 BETWEEN을 이용해 중복 여부를 확인할 수 있도록 했습니다.',
      result: '1월 1일 ~ 1월 3일 예약할 시 테이블에 check in, check out날짜를 집어 넣으면 스크립트에서 1~3일 까지의 날짜를 flatpickr 달력에 선택 불가 날짜로 표시했다. 이 4가지 경우의 수를 모두 체크할 수 있어야 완벽하게 중복 여부를 확인할 수 있는데 예약 내역의 체크인-체크아웃 날짜로만 확인하기에는 무리가 있었습니다.',
    },
    challenges: 'Oracle Database와 Spring Framework 연동 과정에서 트랜잭션 처리와 예약 중복 검증 로직 구현이 가장 큰 도전 과제였습니다. 특히, 날짜별 예약 상태를 정확히 관리하고 중복 예약을 방지하는 것이 어려웠습니다.',
    outcome: 'Urban Village 프로젝트를 통해 Spring Boot와 Oracle Database를 활용한 대규모 웹 서비스 개발 경험을 쌓았습니다. 특히, 복잡한 예약 시스템과 결제 연동, 관리자 페이지 구현을 통해 실무 수준의 백엔드 개발 능력을 향상시켰습니다. 팀원들과의 협업을 통해 프로젝트 관리 능력과 의사소통 스킬도 크게 발전시킬 수 있었습니다.',
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

        {/* 프로젝트 헤더 */}
        <header className="project-header">
          <img className="mainimage" src={project.mainimage || project.thumbnail} alt={project.title} />
          <h1>{project.title}</h1>
          <p className="project-period">{project.period}</p>
          <p className="project-description">{project.description}</p>

          {/* 시연 영상 */}
          {project.videoUrl && (
            <div className="project-video">
              <h3>프로젝트 구동</h3>
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

          {/* GitHub 링크 버튼 */}
          {project.gitRepository && (
            <div className="project-actions">
              <a href={project.gitRepository} target="_blank" rel="noopener noreferrer" className="notion-link-btn">
                GitHub - Urban&Village
              </a>
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
                  <strong>우리의 코드:</strong>
                  <a href={project.projectOverview.gitRepository} target="_blank" rel="noopener noreferrer">
                    Git허브 - Urban&Village(링크)
                  </a>
                </div>
              )}
            </div>
          </section>
        )}

        {/* 프로젝트 구성 및 설계 */}
        {project.siteMap && (
          <section className="project-structure">
            <h2>프로젝트 구성 및 설계</h2>
            <h3>{project.siteMap.title}</h3>
            <p><strong>{project.siteMap.customerFlow}</strong></p>
            <img class ="detailImage" src="/image/projectImage/urban/2-1.jpg"></img>
            <br></br>
            <br></br>
            <p><strong>{project.siteMap.adminFlow}</strong></p>
            <img class ="detailImage" src="/image/projectImage/urban/2-2.jpg"></img>
          </section>
        )}

        {/* 데이터베이스 설계 */}
        {project.databaseDesign && (
          <section className="database-design">
            <h2>Database ERD</h2>
            <img class ="detailImage" src="/image/projectImage/urban/2-3.jpg"></img>
            <div className="database-features">
              <h3>1. 핵심 정보 저장 테이블</h3>
              <ul>
                <li>사용자 관련: 회원, 관리자, 청소 담당자 정보를 분리해서 관리합니다.</li>
                <li>숙소 관련: 숙소 자체 정보와 각 숙소의 객실 정보(이전 설명 기반)를 저장하며, 관리자/청소 담당자와 연결됩니다. (단, 사진 경로는 숙소/리뷰 테이블에 직접 저장하는 방식입니다).</li>
                <li>예약 및 거래 관련: 예약 및 결제 정보, 회원들의 찜 목록을 관리합니다.</li>
                <li>기타: 리뷰, 쿠폰 정보 등을 저장하는 테이블도 포함합니다.</li>
              </ul>
              
              <h3>2. 자동 번호 생성 (시퀀스)</h3>
              <p>숙소, 찜 목록, 리뷰 등에 새로운 데이터가 추가될 때마다 자동으로 고유한 번호를 매겨주는 기능을 설정합니다.</p>
              
              <h3>3. 자동 실행 기능 (트리거)</h3>
              <p>데이터가 입력되거나 수정될 때 특정 작업(예: ID 자동 부여, 수정 날짜 갱신)이 자동으로 실행되도록 설정합니다.</p>
              
              <h3>4. 데이터 조회 편의 기능 (뷰)</h3>
              <p>결제 데이터를 기반으로 일별, 월별, 연도별 매출 정보를 쉽게 조회할 수 있도록 미리 정의된 조회 방식을 제공합니다.</p>
            </div>
          </section>
        )}

        {/* 기술 스택 상세 */}
        {project.techStack && (
          <section className="tech-stack-detail">
            <h2>기술 스택 상세</h2>
            <img class ="detailImage" src="/image/projectImage/urban/2-5.jpg"></img>
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

        {/* 기술 사용처 */}
        {project.technologyUsage && (
          <section className="technology-usage">
            <h2>사용 기술의 사용처</h2>
            {Object.entries(project.technologyUsage).map(([key, usage]) => (
              <div key={key} className="usage-category">
                <h3>
                  {key === 'backend' ? '백엔드 (Backend)' :
                    key === 'database' ? '데이터베이스 (DB)' :
                    key === 'frontend' ? '프론트엔드 (Frontend)' : key}
                </h3>
                <p><strong>역할:</strong> {usage.role}</p>
                {usage.urbanVillageRole && <p><strong>Urban Village에서의 역할:</strong> {usage.urbanVillageRole}</p>}
              </div>
            ))}
          </section>
        )}

        {/* 프로젝트 키워드 */}
        {project.keyTechnicalFeatures && (
          <section className="key-technical-features">
            <h2>프로젝트 키워드</h2>
            {project.keyTechnicalFeatures.map((feature, index) => (
              <div key={index} className="technical-feature">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </section>
        )}

        {/* 주요 기능 상세 */}
        {project.mainFeatures && (
          <section className="main-features">
            <h2>프로젝트 주요 기능</h2>
            {Object.entries(project.mainFeatures).map(([key, feature]) => (
              <div key={key} className="feature-section">
                <h3>{feature.title}</h3>
                {feature.description && (<div className="feature-description">{feature.description}</div>)}
                {feature.features && (<ul>{feature.features.map((item, index) => (<li key={index}>{item}</li>))}</ul>)}
                {feature.customerFeatures && (<div className="sub-feature"><h4>고객</h4><ul>{feature.customerFeatures.map((item, index) => (<li key={index}>{item}</li>))}</ul></div>)}
                {feature.adminFeatures && (<div className="sub-feature"><h4>통계</h4><ul>{feature.adminFeatures.map((item, index) => (<li key={index}>{item}</li>))}</ul></div>)}
              </div>
            ))}
          </section>
        )}

        {/* 트러블슈팅 */}
        {project.troubleshooting && (
          <section className="troubleshooting-section">
            <h2>Troubleshooting</h2>
            <img class ="detailImage" src="/image/projectImage/urban/2-15.jpg"></img>
            <div className="troubleshooting-content">
              <h3>{project.troubleshooting.title}</h3>
              <div className="troubleshooting-problem">
                <h4>문제점</h4>
                <p>{project.troubleshooting.problem}</p>
                <p>객실이 예약 기간에 대해 중복될 경우의 수는 다음과 같습니다.</p>
                {project.troubleshooting.casesDescription && (
                  <div className="cases-description">
                    <ol>
                      {project.troubleshooting.casesDescription.map((case_desc, index) => (
                        <li key={index}>{case_desc}</li>
                      ))}
                    </ol>
                  </div>
                )}
                <p>이 4가지 경우의 수를 모두 체크할 수 있어야 완벽하게 중복 여부를 확인할 수 있는데 예약 내역의 체크인-체크아웃 날짜로만 확인하기에는 무리가 있었습니다.</p>
              </div>
              <div className="troubleshooting-solution">
                <h4>해결방안</h4>
                <p>{project.troubleshooting.solution}</p>
                <p><strong>mapper.xml</strong></p>
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
                <span className="member-role"> : {member.role}</span>
                {member.portfolio && (
                  <a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                    노션 포트폴리오(링크)
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

export default UrbanVillageProjectPage;