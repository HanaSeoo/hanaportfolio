// src/data/projectData.js
export const projects = {
  1: {
    title: "모갔슈? - 탈모인 익명 공감 커뮤니티",
    period: "2025.05.12 ~ 06.20",
    notionLink: "https://www.notion.so/프로젝트1-링크-여기에-추가", // 노션 링크 추가
    description: "탈모인들을 위한 익명 기반 공감 커뮤니티 앱으로, AI 기반 이미지 분석을 통해 탈모 상태를 진단하고 맞춤형 정보를 제공하며, 유쾌한 위로와 소통이 가능한 웹+앱 통합 서비스입니다.",
    skills: ["Spring Boot", "Java", "JPA", "MySQL", "HTML", "CSS", "JavaScript", "Thymeleaf", "Ajax", "Python", "OpenCV", "AWS EC2", "GitHub Actions", "Git", "Gradle"],
    videoUrl: null,
    thumbnail: "/image/projectimage/mogetshooLogo.png",
    images: [
      "/image/projectimage/3_1.png",
      "/image/projectimage/3_2.png", 
      "/image/projectimage/3_3.png",
      "/image/projectimage/3_4.png",
      "/image/projectimage/3_5.png"
    ],
    background: [
      "사회적 문제 해결: 탈모라는 민감한 고민을 익명으로 공유하고 위로받을 수 있는 안전한 공간을 제공하고자 했습니다.",
      "AI 기술 활용: 이미지 딥러닝을 통한 탈모 자가진단 서비스로 실질적인 도움을 제공하고자 했습니다.",
    "사용자 맞춤 서비스: 탈모 단계, 지역, 성별에 따른 개인화된 콘텐츠와 정보를 제공하여 사용자 경험을 극대화하고자 했습니다.",
    "풀스택 개발 역량: 프론트엔드부터 백엔드, 딥러닝, 배포까지 전 과정을 경험하여 종합적인 개발 능력을 기르고자 했습니다."
  ],
  features: [
    "회원가입 및 로그인 시스템",
    "AI 기반 탈모 이미지 분석 및 진단",
    "익명 질문 작성 및 투표 시스템",
    "개인화된 추천 피드 기능",
    "탈모 자가진단 테스트",
    "지역별 병원 정보 및 후기 공유",
    "제품 정보 및 리뷰",
    "오늘의 운세 확인 (재미 요소)",
    "실시간 비동기 처리",
    "반응형 웹 디자인"
  ],
  architecture: {
    "백엔드": "Spring Boot + JPA를 통한 RESTful API 개발",
    "프론트엔드": "Thymeleaf + Ajax를 활용한 반응형 UI",
    "AI 분석": "Python 기반 이미지 딥러닝 모델",
    "데이터베이스": "MySQL을 통한 사용자 및 커뮤니티 데이터 관리",
    "배포": "AWS EC2 + GitHub Actions를 통한 CI/CD",
    "협업": "Git을 통한 버전 관리 및 팀 협업"
  },
  techStack: {
    "백엔드": [
      "Spring Boot - 메인 웹 프레임워크",
      "Java - 백엔드 개발 언어",
      "JPA - ORM 매핑을 통한 데이터베이스 연동",
      "MySQL - 관계형 데이터베이스",
      "비동기 처리 - 차례를 기다리지 않는 순서 처리"
    ],
    "프론트엔드": [
      "HTML/CSS/JavaScript - 반응형 사용자 인터페이스",
      "Thymeleaf - 서버사이드 템플릿 엔진",
      "Ajax - 자연스러운 화면 전환 및 데이터 전송"
    ],
    "AI 분석": [
      "Python - AI 모델 개발 언어",
      "이미지 딥러닝 - 탈모 사진 분석 모델",
      "OpenCV - 이미지 처리 및 특징 추출"
    ],
    "배포 및 운영": [
      "AWS EC2 - 클라우드 서버 인프라",
      "GitHub Actions - CI/CD 자동화 파이프라인",
      "Git - 소스코드 버전 관리",
      "Gradle - 프로젝트 빌드 및 의존성 관리"
    ],
    "개발도구": [
      "STS4 (Spring Tool Suite 4) - 백엔드 개발 IDE",
      "DBeaver - 데이터베이스 클라이언트 도구",
      "GitHub - 팀원간 코드 공유 및 버전 관리",
      "Excel - 업무 분담표 및 진행 관리"
    ]
  },
  projectGoals: [
    "익명 기반 공감 커뮤니티 구축 - 탈모에 대한 민감한 고민을 익명으로 질문하고 투표할 수 있는 안전한 공간 제공",
    "탈모 단계별 맞춤 정보 제공 - 사용자 분석을 통해 탈모 단계, 지역, 성별에 맞는 질문·투표·추천 콘텐츠 제공",
    "유쾌한 위로와 소통 - '탈모'라는 무거운 주제를 유머와 공감으로 풀어가는 커뮤니티 지향",
    "지역 기반 병원 정보와 후기 공유 - 공공데이터 + 사용자 후기를 통한 병원 정보 제공으로 실제적인 도움 연결"
  ],
  apis: [
    "공공데이터 API - 병원 정보 및 위치 데이터",
    "이미지 분석 API - AI 기반 탈모 진단",
    "지도 API - 병원 위치 정보 표시 (예정)",
    "소셜 로그인 API - 간편 회원가입 (예정)"
  ],
  externalLinks: {
    "기능명세서": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRVYOygTrTNBNytmTfv5SujokSA3QIlPyaG0SHuP1a-DXaPAcCxu42BoF4t2a5zR7w22IXzEbtwRz_U/pubhtml",
    "WBS": "https://docs.google.com/spreadsheets/d/e/2PACX-1vQzEtGmdmMyMBthOnJAbT_waEKrh7CrcYlkn0MWF-p-uj1c8A41-e3g4SbYvJcqbloM8_0v5Tlf8lna/pubhtml"
  },
  teamMembers: [
    { name: "서하나", role: "리더", portfolio: "https://www.notion.so/1b9db822a28e801eb04af2f96ab48d5a" },
    { name: "최승필", role: "팀원", portfolio: "https://www.notion.so/1e3c0872a5f880ac8e10e228219cd836?pvs=4" },
    { name: "유태종", role: "팀원", portfolio: "https://github.com/taejong12" }
  ],
  challenges: "탈모라는 민감한 주제를 다루면서도 유쾌하고 안전한 커뮤니티를 구축하는 것, AI 이미지 분석 모델의 정확도 향상, Spring Boot와 Python AI 모델 간의 효율적인 연동, AWS 환경에서의 안정적인 배포 및 운영, 실시간 비동기 처리를 통한 사용자 경험 최적화, 개인정보 보호와 익명성 보장을 위한 보안 시스템 구축 등 기술적, 사회적 측면의 복합적인 도전이 있었습니다.",
  outcome: "Spring Boot 기반 풀스택 개발 역량을 크게 향상시켰고, Python을 활용한 AI 모델 개발 및 연동 경험을 통해 융합 기술 활용 능력을 기를 수 있었습니다. AWS EC2와 GitHub Actions를 통한 실제 서비스 배포 경험으로 DevOps 역량을 습득했으며, 사회적 가치를 담은 서비스 기획부터 구현까지의 전 과정을 경험하며 문제 해결 능력과 사용자 중심 사고를 기를 수 있었습니다. 또한 팀 프로젝트를 통해 협업 능력과 프로젝트 관리 경험을 쌓을 수 있었습니다."
},
  // 추후 다른 프로젝트들을 여기에 추가
  2: {
    title: "Urban Village - 시골 마을 활성화 프로젝트",
    period: "2025.03.31 ~ 2022.05.25 ",
    notionLink: "https://www.notion.so/Urban_Village-1e3db822a28e81138313efd2bfa3d006", // 노션 링크 추가
    description: "인구감소에 따른 지역문제를 해결하고자 지역의 자원인 빈집을 활용하여 시골 지역을 되살리는 프로젝트입니다. 지역 숙소를 등록하고 예약을 관리하며, 숙소를 청소하는 청소관리자를 지역에 거주하는 일자리가 없는 노인분들로 선정하여 노인일자리 창출에 기여하며, 숙소를 운영하며 생기는 소득을 마을 자치금으로 운영할 수 있도록 하는 웹 사이트를 제작하였습니다.",
    skills: ["Java 11", "Spring MVC", "Spring AOP", "Spring Security", "MyBatis", "Oracle Database", "Oracle Cloud", "Apache Tomcat 9", "HTML/CSS", "JavaScript", "jQuery", "JSP", "JSTL", "Apache Tiles", "Maven"],
    videoUrl: "https://www.youtube.com/embed/JMxSRmcZiU8",
    thumbnail: "/image/projectimage/2_1.png",
    images: [
      "/image/projectimage/2_1.png",
      "/image/projectimage/2_2.png", 
      "/image/projectimage/2_3.png",
      "/image/projectimage/2_9.jpg",
      "/image/projectimage/2_4.png",
      "/image/projectimage/2_5.png",
      "/image/projectimage/2_6.png",
      "/image/projectimage/2_7.png",
      "/image/projectimage/2_8.png"
    ],
    background: [
      "지역 문제 해결 목적: 인구감소로 인한 시골 지역의 빈집 문제를 숙소로 활용하여 지역 활성화를 도모하고자 했습니다.",
      "사회적 가치 창출: 숙소 청소관리자로 지역 거주 노인분들을 선정하여 노인일자리 창출에 기여하고자 했습니다.",
      "지역 공동체 발전: 숙소 운영으로 발생하는 수익을 마을 자치금으로 활용하여 지역 공동체의 지속가능한 발전에 기여하고자 했습니다.",
      "실무 수준 개발 경험: Spring Framework 기반의 실제 서비스 수준의 웹 애플리케이션을 개발하여 실무 역량을 기르고자 했습니다."
    ],
    features: [
      "회원가입 및 로그인 기능 (일반 로그인 + 구글 API 연동)",
      "숙소 등록, 수정, 삭제 및 상세 조회 시스템",
      "숙소 예약 및 결제 시스템 (포트원 결제 API 연동)",
      "청소관리자 배정 및 관리 시스템",
      "숙소 리뷰 및 평점 시스템",
      "위시리스트 기능",
      "카카오 지도 API를 통한 숙소 위치 정보 제공",
      "도로명주소 API 연동을 통한 정확한 주소 입력",
      "이메일 알림 기능 (예약 확인, 취소 등)",
      "관리자 페이지 (숙소 승인, 회원 관리, 통계)",
      "반응형 웹 디자인",
      "파일 업로드 및 이미지 썸네일 처리"
    ],
    architecture: {
      "accommodation": "숙소 관련 기능 (등록, 조회, 수정, 삭제)",
      "admin": "관리자 기능 (승인, 회원관리, 통계)",
      "apiLogin": "API 로그인 (구글 OAuth 2.0)",
      "cleaner": "청소 관리자 기능 (배정, 관리)",
      "common": "공통 기능 (인터셉터, 유틸리티)",
      "email": "이메일 기능 (JavaMail)",
      "member": "회원 관리 (가입, 로그인, 정보수정)",
      "reservation": "예약 시스템 (예약, 결제, 취소)",
      "review": "리뷰 기능 (작성, 조회, 평점)",
      "wishList": "위시리스트 기능 (찜하기)"
    },
    techStack: {
      "백엔드": [
        "Java 11 - 메인 개발 언어",
        "Spring Framework 4.1.1 - 웹 애플리케이션 프레임워크",
        "Spring MVC - 웹 MVC 패턴 구현", 
        "Spring AOP - 관점 지향 프로그래밍",
        "Spring Security - 보안 프레임워크",
        "Spring JDBC - 데이터베이스 연동",
        "MyBatis 3.4.6 - SQL 매핑 프레임워크",
        "AspectJ 1.6.10 - AOP 구현"
      ],
      "데이터베이스": [
        "Oracle Database - 메인 데이터베이스",
        "Oracle Cloud - 클라우드 환경",
        "ojdbc8 19.3.0.0 - Oracle JDBC 드라이버"
      ],
      "웹서버": [
        "Apache Tomcat 9 - WAS (Web Application Server)",
        "Servlet 2.5 - 서블릿 지원"
      ],
      "프론트엔드": [
        "HTML/CSS - 마크업 및 스타일링",
        "JavaScript - 클라이언트 사이드 로직",
        "jQuery - JavaScript 라이브러리",
        "JSP 2.1 - 서버 사이드 템플릿",
        "JSTL 1.2 - JSP 표준 태그 라이브러리",
        "Apache Tiles 2.2.2 - 페이지 레이아웃 템플릿"
      ],
      "유틸리티": [
        "Lombok - 코드 간소화",
        "Jackson 2.5.4 - JSON 처리",
        "Commons FileUpload 1.2.1 - 파일 업로드",
        "Thumbnailator 0.4.8 - 이미지 썸네일 처리",
        "JavaMail 1.5.4 - 이메일 기능",
        "Google API Client 1.34.0 - 구글 로그인"
      ],
      "빌드도구": [
        "Maven - 프로젝트 빌드 및 의존성 관리"
      ]
    },
    apis: [
      "구글 로그인 API - OAuth 2.0을 통한 소셜 로그인",
      "카카오 지도 API - 숙소 위치 정보 및 지도 서비스", 
      "포트원 결제 API - 온라인 결제 시스템",
      "도로명주소 API - 정확한 주소 검색 및 입력"
    ],
    projectStructure: {
      "src/main/java/com.test.Urban_Village": {
        "accommodation": "숙소 관련 기능",
        "admin": "관리자 기능", 
        "apiLogin": "API 로그인(구글 등)",
        "cleaner": "청소 관리자 기능",
        "common": "일반적인 인터셉터 기능",
        "email": "이메일 기능",
        "member": "회원 관리",
        "reservation": "예약 시스템", 
        "review": "리뷰 기능",
        "wishList": "위시리스트 기능",
        "MainController.java": "메인 컨트롤러"
      },
      "src/main/resources": {
        "mybatis": "MyBatis 매핑 설정"
      },
      "webapp": {
        "resources": "정적 리소스 (CSS, 이미지)",
        "WEB-INF/spring": "Spring 설정 파일",
        "WEB-INF/tiles": "타일즈 레이아웃 설정",
        "WEB-INF/views": "JSP 뷰 파일들"
      }
    },
    teamMembers: [
      { name: "김대중", role: "팀원", portfolio: "https://www.notion.so/1e31366431dd802f8235cef0bca33a5d?pvs=12" },
      { name: "김찬영", role: "팀원" },
      { name: "서하나", role: "리더", portfolio: "https://www.notion.so/1b9db822a28e801eb04af2f96ab48d5a" },
      { name: "최승필", role: "팀원", portfolio: "https://www.notion.so/1e3c0872a5f880ac8e10e228219cd836?pvs=4" }
    ],
    challenges: "Spring Framework의 다양한 모듈(MVC, AOP, Security)을 실제 프로젝트에 통합 적용하는 것, Oracle Cloud 환경에서의 배포 및 운영, 다양한 외부 API(구글 로그인, 카카오 지도, 포트원 결제, 도로명주소) 연동 및 에러 처리, 복잡한 예약 시스템과 결제 로직 구현, MyBatis를 활용한 효율적인 데이터베이스 설계 및 쿼리 최적화 등 실무 수준의 풀스택 개발 경험을 쌓는 종합적인 도전이 있었습니다.",
    outcome: "Spring Framework의 핵심 개념인 MVC 패턴, AOP, DI/IoC를 실무에 적용하며 백엔드 개발 역량을 크게 향상시켰고, 다양한 외부 API 연동 경험을 통해 실제 서비스 개발 능력을 기를 수 있었습니다. 또한 팀 프로젝트를 통해 Git을 활용한 협업, 코드 리뷰, 역할 분담 등 실무 협업 능력을 습득했으며, 사회적 가치를 담은 서비스 기획부터 배포까지의 전 과정을 경험할 수 있었습니다."
  },
3: {
  title: "개인 포트폴리오 웹사이트",
  period: "2025.06.01 ~ 06.20",
  notionLink: "https://www.notion.so/프로젝트1-링크-여기에-추가", // 노션 링크 추가
  description: "React를 활용하여 개발한 개인 포트폴리오 웹사이트로, 모던한 UI/UX와 반응형 디자인을 통해 개발자로서의 역량과 프로젝트들을 효과적으로 소개하는 Single Page Application입니다.",
  skills: ["React", "JavaScript", "HTML", "CSS", "React Router", "Node.js", "Git", "GitHub", "Netlify", "Responsive Design"],
  videoUrl: null,
  thumbnail: "/image/projectimage/4_1.png",
  images: [
    "/image/projectimage/4_1.png",
    "/image/projectimage/4_2.png", 
    "/image/projectimage/4_3.png",
    "/image/projectimage/4_4.png",
    "/image/projectimage/4_5.png"
  ],
  background: [
    "개발자 브랜딩: 개발자로서의 정체성을 명확히 하고 전문성을 어필할 수 있는 온라인 포트폴리오의 필요성을 느꼈습니다.",
    "React 실무 역량 향상: 이론으로만 배웠던 React를 실제 프로젝트에 적용하여 컴포넌트 기반 개발 경험을 쌓고자 했습니다.",
    "모던 웹 개발 경험: 최신 웹 개발 트렌드를 반영한 SPA(Single Page Application) 개발 경험을 통해 실무 역량을 기르고자 했습니다.",
    "사용자 경험 최적화: 방문자가 정보를 쉽고 빠르게 찾을 수 있는 직관적인 UI/UX 설계에 집중하고자 했습니다."
  ],
  features: [
    "React 기반 Single Page Application",
    "반응형 웹 디자인 (모바일, 태블릿, 데스크톱 대응)",
    "모던하고 세련된 UI/UX 디자인",
    "부드러운 페이지 전환 및 스크롤 애니메이션",
    "프로젝트 상세 페이지 및 이미지 모달",
    "스킬셋 및 경력 시각화",
    "GitHub 연동 및 외부 링크 관리",
    "SEO 최적화 및 성능 최적화",
    "다크/라이트 모드 지원 (선택사항)",
    "실시간 배포 및 자동 업데이트"
  ],
  architecture: {
    "프론트엔드": "React 컴포넌트 기반 SPA 구조",
    "라우팅": "React Router를 통한 클라이언트 사이드 라우팅",
    "상태관리": "React Hooks (useState, useEffect)를 통한 상태 관리",
    "스타일링": "CSS3 + Flexbox/Grid를 활용한 반응형 디자인",
    "배포": "Netlify를 통한 정적 사이트 호스팅",
    "버전관리": "Git/GitHub를 통한 소스코드 관리"
  },
  techStack: {
    "프론트엔드": [
      "React 18 - 컴포넌트 기반 사용자 인터페이스 라이브러리",
      "JavaScript ES6+ - 모던 JavaScript 문법 활용",
      "HTML5 - 시맨틱 마크업 구조",
      "CSS3 - Flexbox, Grid, 애니메이션을 활용한 스타일링",
      "React Router - SPA 라우팅 관리"
    ],
    "개발도구": [
      "Node.js - 개발 환경 및 패키지 관리",
      "npm/yarn - 의존성 관리",
      "VS Code - 메인 개발 IDE",
      "Chrome DevTools - 디버깅 및 성능 최적화"
    ],
    "배포 및 운영": [
      "Git - 버전 관리 시스템",
      "GitHub - 원격 저장소 및 협업",
      "Netlify - 정적 사이트 호스팅 및 자동 배포",
      "Custom Domain - 개인 도메인 연결 (선택사항)"
    ],
    "디자인 도구": [
      "CSS Grid & Flexbox - 레이아웃 시스템",
      "CSS Animations - 부드러운 전환 효과",
      "Responsive Design - 다양한 디바이스 대응",
      "Modern UI Patterns - 최신 웹 디자인 트렌드 적용"
    ]
  },
  projectGoals: [
    "개인 브랜드 구축 - 개발자로서의 정체성과 전문성을 효과적으로 어필할 수 있는 온라인 포트폴리오 제작",
    "React 실무 역량 증명 - 컴포넌트 기반 개발, 상태 관리, 라우팅 등 React 핵심 개념의 실제 적용",
    "사용자 경험 최적화 - 직관적인 네비게이션, 빠른 로딩 속도, 반응형 디자인을 통한 최상의 사용자 경험 제공",
    "지속적인 업데이트 - 새로운 프로젝트와 기술 스택을 지속적으로 추가할 수 있는 확장 가능한 구조 설계"
  ],
  teamMembers: [
    { name: "서하나", role: "풀스택 개발자", portfolio: "https://www.notion.so/1b9db822a28e801eb04af2f96ab48d5a" }
  ],
  challenges: "React 초기 학습 곡선 극복, 컴포넌트 간 상태 관리 최적화, 반응형 디자인에서의 일관된 사용자 경험 구현, 이미지 최적화 및 성능 향상, SEO 최적화를 위한 메타데이터 관리, 다양한 브라우저 호환성 확보, 지속적인 콘텐츠 업데이트를 위한 확장 가능한 구조 설계 등 프론트엔드 개발의 전반적인 영역에서 실무 수준의 품질을 달성하는 도전이 있었습니다.",
  outcome: "React를 활용한 실제 프로젝트 개발 경험을 통해 컴포넌트 기반 개발 역량을 크게 향상시켰고, 모던 JavaScript와 ES6+ 문법에 대한 이해도를 높일 수 있었습니다. 반응형 웹 디자인과 사용자 경험 최적화에 대한 실무 감각을 기를 수 있었으며, Git을 활용한 버전 관리와 Netlify를 통한 배포 경험으로 개발 전 과정에 대한 이해도를 높였습니다. 무엇보다 개발자로서의 온라인 포트폴리오를 완성함으로써 개인 브랜딩과 커리어 발전의 기반을 마련할 수 있었습니다."
},
4: {
  title: "ABC ShoppingMall 프로젝트",
  period: "2025.02.03 ~ 13",
  notionLink: "https://www.notion.so/프로젝트1-링크-여기에-추가", // 노션 링크 추가
  description: "Java와 SceneBuilder를 활용하여 사용자가 상품을 장바구니에 담고 쿠폰을 사용하여 결제하고 배송을 조회하는 쇼핑몰 시스템을 구현했습니다.",
  skills: ["Java", "JavaFX Scene Builder", "Oracle", "Eclipse", "JDK 17"],
  videoUrl:  "https://www.youtube.com/embed/AosiUaQ-lYo", // 영상이 있다면 추가
  thumbnail: "/image/projectimage/1_1.png",
  images: [
    "https://github.com/user-attachments/assets/4ece5030-7e11-4a7b-914e-fb61e7c9f6b1",
    "https://github.com/user-attachments/assets/db937b89-0cb0-49b5-8f19-b74ecf4f70e2"
  ],
  background: [
    "배운것의 활용 목적: 로그인, 장바구니, 정보의 저장과 업데이트 등에 관한 것을 자바언어와 SQL로 코드로 짜는것을 확실히 이해하고 활용하고자 했습니다.",
    "자주 이용하는 사이트에 대한 궁금증: 평소 자주 접속하는 사이트가 어떻게 구성되는지 어떤 방식으로 작동 되는지가 궁금해져 쇼핑몰을 만들기로 했습니다.",
    "오라클과의 연동 고려: 쇼핑몰이 재고, 회원 정보, 쿠폰 입력 등 다양한 내용을 SQL과 연동해보며 실력을 키울 수 있을 것이라 생각 했습니다."
  ],
  features: [
    "상품 카테고리별 분류 및 조회 시스템",
    "회원가입 및 로그인 기능",
    "장바구니 담기 및 수량 조절",
    "쿠폰 적용 및 결제 시스템",
    "배송번호를 통한 배송 조회",
    "Q&A 고객지원 기능",
    "Oracle 데이터베이스 연동"
  ],
  architecture: {
    "category": "상품 카테고리 관련",
    "member": "회원관리 기능", 
    "login": "API 로그인(구글 등)",
    "pay": "결제 관리자 기능",
    "delivery": "배송번호로 배송 조회",
    "question": "Q & A 기능",
    "common": "공통 기능",
    "resource": "리소스 관리",
    "fxml": "Scene Builder UI"
  },
  teamMembers: [
    { name: "김범룡", role: "팀원" },
    { name: "서하나", role: "리더", portfolio: "https://www.notion.so/1b9db822a28e801eb04af2f96ab48d5a" },
    { name: "정성효", role: "팀원" }
  ],
  challenges: "처음으로 팀 프로젝트를 진행하면서 Java와 Oracle 데이터베이스 연동, JavaFX Scene Builder를 활용한 UI 구성 등 다양한 기술을 통합해야 하는 도전이 있었습니다.",
  outcome: "팀 협업의 중요성을 깨닫고, 기본적인 자바 유틸 활용 능력을 기르며, 실제 쇼핑몰과 같은 완성도 있는 프로젝트를 구현할 수 있었습니다."
}
};