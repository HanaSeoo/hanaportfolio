// src/data/ProjectData.js - PDF 내용 완전 반영 (모든 섹션 포함)
export const projects = {
  1: {
    title: "모갔슈 - 탈모인 익명 공감 커뮤니티",
    period: "2025.05.12 ~ 06.20",
    notionLink: "https://www.notion.so/Project-20ddb822a28e80ef92dfd65b470d78e9",
    description: "모갔슈(毛털모 + 갔슈?_전라도 사투리)는 탈모인들을 위한 익명 기반 공감 커뮤니티 앱으로, AI 기반 이미지 분석을 통해 탈모 상태를 진단하고 맞춤형 정보를 제공하며, 유쾌한 위로와 소통이 가능한 웹+앱 통합 서비스입니다.",
    skills: [
      "Spring Boot", "Java", "JPA", "MySQL", "Spring Security", "HTML", "CSS", 
      "JavaScript", "Thymeleaf", "Ajax", "Python", "OpenCV", "Teachable Machine",
      "AWS EC2", "GitHub Actions", "Git", "Gradle", "STS4", "DBeaver"
    ],
    videoUrl: "https://www.youtube.com/embed/JcuWNKhWlmo",
    thumbnail: "/image/1_1.png",
    images: [
      "/image/projectimage/1_1.png",
      "/image/projectimage/1_2.png", 
      "/image/projectimage/1_3.png",
      "/image/projectimage/1_4.png",
      "/image/projectimage/1_5.png"
    ],
    projectOverview: {
      projectName: "모갔슈 - 탈모인 익명 공감 커뮤니티",
      developmentPeriod: "2025.05.12 ~ 2025.06.20",
      developmentTeam: 3,
      projectType: "웹+앱 통합 커뮤니티 서비스 (익명 기반 탈모 진단 및 공감 플랫폼)",
      gitRepository: "https://github.com/taejong12/mogatshoo",
      nameOrigin: "모갔슈 = 毛(털모) + 갔슈?('가다'의 전라도 사투리)"
    },
    projectGoals: [
      "익명 기반 공감 커뮤니티 구축: 탈모에 대한 민감한 고민을 익명으로 질문하고 투표할 수 있는 안전한 공간 제공",
      "탈모 단계별 맞춤 정보 제공: 사용자 분석을 통해 탈모 단계, 지역, 성별에 맞는 질문·투표·추천 콘텐츠 제공",
      "유쾌한 위로와 소통: '탈모'라는 무거운 주제를 유머와 공감으로 풀어가는 커뮤니티 지향",
      "지역 기반 병원 정보와 후기 공유: 공공데이터 + 사용자 후기를 통한 병원 정보 제공으로 실제적인 도움 연결"
    ],
    background: [
      "사회적 문제 해결: 탈모라는 민감한 고민을 익명으로 공유하고 위로받을 수 있는 안전한 공간을 제공하고자 했습니다.",
      "AI 기술 활용: Teachable Machine과 OpenCV를 활용한 이미지 딥러닝을 통한 탈모 자가진단 서비스로 실질적인 도움을 제공하고자 했습니다.",
      "사용자 맞춤 서비스: 탈모 단계, 지역, 성별에 따른 개인화된 콘텐츠와 정보를 제공하여 사용자 경험을 극대화하고자 했습니다.",
      "풀스택 개발 역량: 프론트엔드부터 백엔드, 딥러닝, 배포까지 전 과정을 경험하여 종합적인 개발 능력을 기르고자 했습니다."
    ],
    mainFeatures: {
      authentication: {
        title: "회원가입 / 로그인",
        description: "탈모라는 민감한 주제의 특성상 사용자 신뢰도 확보를 위해 철저한 보안과 편의성을 동시에 제공",
        features: [
          "자체 회원가입: 강력한 비밀번호 정책과 이메일 인증으로 보안성 강화",
          "다중 SNS 로그인: 카카오, 네이버, 구글 OAuth2 연동으로 접근성 향상",
          "실시간 유효성 검사: Ajax 기반 중복체크로 즉각적인 피드백 제공",
          "이메일 인증 시스템: 3분 타이머와 함께 randomUUID 6자리 인증번호 발송",
          "계정 복구: 이메일을 통한 ID/PW 찾기로 사용자 편의성 증대"
        ],
        technicalDetails: [
          "비밀번호 보안: 8자리 이상, 영문+숫자+대문자+특수문자+연속숫자 금지",
          "Spring Security + OAuth2: 통합 인증 시스템",
          "BCrypt 암호화: 비밀번호 해시 처리",
          "포인트 인센티브: 회원가입 300p, 출석체크 10p 지급으로 참여 유도",
          "@Async 비동기 처리: 이메일 전송 시 사용자 대기시간 최소화"
        ]
      },
      community: {
        title: "투표 기능",
        description: "익명성을 보장하면서도 재미있게 참여할 수 있는 투표 시스템으로 탈모 고민 공유 활성화",
        votingSystem: {
          title: "투표 시스템 (Voting Module)",
          features: [
            "랜덤 질문 제공: 사용자가 아직 투표하지 않은 공개 질문 중 무작위 선택",
            "4지선다 이미지 투표: Firebase Storage URL 기반 탈모 진단 사진 4개 중 선택",
            "중복 투표 방지: DB 제약조건으로 동일 질문에 대한 중복 투표 차단",
            "실시간 AJAX 처리: 페이지 새로고침 없는 부드러운 투표 경험",
            "권한 기반 접근제어: USER 권한만 투표 가능, ADMIN은 투표 제한"
          ],
          technicalDetails: [
            "투표 상태 동적 계산: 현재 시간 기준으로 '보류/진행중/종료' 실시간 판단",
            "이미지 경로 검증: Firebase Storage URL과 상대경로 자동 변환",
            "트랜잭션 보장: @Transactional로 투표 데이터 일관성 확보"
          ]
        },
        questionManagement: {
          title: "질문 관리 시스템 (Question Management)",
          features: [
            "질문 라이프사이클 관리: 생성 → 공개/비공개 → 투표기간 설정 → 자동 아카이빙",
            "투표 기간 자동화: 스케줄러 기반 상태 변경 (보류 → 진행중 → 종료)",
            "아카이빙 시스템: 종료된 질문을 completed_question 테이블로 자동 이동",
            "통합 검색: 키워드, 공개상태, 생성일, 투표일 기반 다중 조건 검색"
          ]
        },
        votingStatistics: {
          title: "투표 통계 및 분석 (Voting Statistics)",
          features: [
            "다중 테이블 통합: active + completed 질문 테이블 UNION 조회",
            "세분화된 지표 계산: 투표율, 참여율, 최다득표율, 참여자기준 투표율"
          ],
          calculations: [
            "투표율: 총 투표수 / 전체 회원수 × 100",
            "참여율: 고유 투표자 수 / 전체 회원수 × 100",
            "최다득표율: 최다득표수 / 총 투표수 × 100",
            "참여자기준 투표율: 총 투표수 / 고유 투표자 수 × 100"
          ]
        },
        databaseDesign: {
          title: "데이터베이스 설계",
          questionTable: [
            "serial_number (PK): Q0001 형식 자동 증가",
            "voting_start_date/voting_end_date: 투표 기간 관리",
            "is_public: 공개/비공개 상태 제어"
          ],
          votingTable: [
            "serial_number: 질문 참조",
            "voter_id: 투표자 (USER 권한만)",
            "voted_id: 선택된 옵션/회원 ID",
            "selected_option: 선택한 옵션 (option1~4)"
          ]
        },
        securityAndOptimization: {
          title: "보안 및 최적화",
          security: [
            "Spring Security 통합: Authentication 기반 사용자 식별",
            "권한별 접근제어: USER만 투표, ADMIN만 질문 관리",
            "세션 기반 중복 방지: 동일 세션 내 중복 투표 차단",
            "입력값 검증: 모든 파라미터 null/empty 체크"
          ],
          optimization: [
            "페이징 처리: 대용량 데이터 효율적 조회",
            "인덱스 활용: serial_number, voter_id 기반 빠른 검색",
            "스케줄러 최적화: 실행 주기별 작업 분산 (10분/1시간/일일)",
            "캐시 활용: 전체 회원 수 등 자주 조회되는 데이터 최적화"
          ],
          extensibility: [
            "모듈화 설계: Service Layer 분리로 기능별 독립성 확보",
            "Repository Pattern: 데이터 접근 로직 추상화",
            "DTO/Entity 분리: 계층 간 데이터 전송 최적화",
            "로깅 시스템: SLF4J 기반 상세 로그 추적"
          ]
        }
      },
      aiDiagnosis: {
        title: "탈모 테스트 기능",
        description: "전문적인 탈모 진단의 접근성을 높이기 위해 AI 기반 자가진단 서비스 제공",
        features: [
          "Teachable Machine 활용: Google AI 플랫폼으로 학습된 탈모 분류 모델 적용",
          "5단계 탈모 진단: 정상(0단계)부터 심각(4단계)까지 세분화된 진단",
          "실시간 이미지 분석: 업로드 즉시 JavaScript에서 모델 실행으로 빠른 결과 제공",
          "예외 이미지 필터링: 손, 얼굴, 문서 등을 별도 학습하여 오진단 방지",
          "확률 기반 결과: 각 단계별 확률을 시각적으로 표시하여 신뢰도 제공"
        ],
        technicalDetails: [
          "이미지 데이터 증강: Albumentations로 한 장당 7장 생성하여 모델 정확도 향상",
          "다양한 데이터셋: Google Dataset, Version, 한국인 탈모 갤러리 등 종합 수집",
          "OpenCV 전처리: 이미지 품질 향상 및 특징 추출",
          "브라우저 모델 실행: .js 형태로 변환하여 서버 부하 없는 클라이언트 처리",
          "FileReader API: 이미지 미리보기와 동시에 분석 준비"
        ],
        aiModelStructure: {
          title: "AI 모델 구조",
          dataCollection: [
            "데이터 수집: Google Dataset, 한국인 탈모 갤러리, Version 증강 이미지",
            "모델 학습: 5단계 탈모 분류 + 예외 처리 (손, 얼굴, 문서, 기타)",
            "데이터 증강: Albumentations를 통한 7배 데이터 확장",
            "모델 배포: JavaScript 모델로 변환하여 클라이언트 실시간 처리",
            "정확도 향상: OpenCV 전처리 + 다양한 각도/조명 조건 학습"
          ]
        }
      },
      mapService: {
        title: "탈모 병원 찾기",
        description: "진단 후 실제 치료로 연결하기 위해 지역 기반 병원 정보와 길찾기 서비스 통합 제공",
        features: [
          "현재 위치 기반 검색: Geolocation API로 사용자 주변 탈모 전문병원 표시",
          "카카오 지도 연동: 정확한 위치 정보와 실시간 지도 데이터 활용",
          "차별화된 마커 표시: 내 위치(깃발)와 병원(파란 핀)으로 직관적 구분",
          "병원 상세 정보: 마커 클릭 시 인포윈도우로 병원명, 주소, 연락처 제공",
          "길찾기 연동: 현재 위치에서 선택 병원까지 경로 안내"
        ],
        technicalDetails: [
          "주소-좌표 변환: geocoder.addressSearch로 병원 주소를 지도 좌표로 변환",
          "위치 권한 처리: 위치 정보 제공 거부 시 대체 UI 및 안내 메시지",
          "마커 클러스터링: 동일 지역 다수 병원 시 그룹화로 지도 가독성 향상",
          "반응형 지도: 모바일과 데스크톱 환경에 최적화된 지도 크기 조절",
          "커스텀 오버레이: HTML 기반 말풍선으로 풍부한 병원 정보 표현"
        ]
      },
      pointSystem: {
        title: "포인트 시스템 & 오늘의 운세",
        description: "지속적인 서비스 참여를 유도하고 무거운 주제에 재미 요소를 더하기 위한 게이미피케이션",
        features: [
          "오늘의 운세: 10포인트로 랜덤 운세와 추천 아이템 확인하여 일상의 즐거움 제공",
          "다양한 포인트 적립: 회원가입(300p), 출석체크(10p), 투표 참여로 활동 장려",
          "포인트 내역 관리: 적립/사용 내역을 날짜별로 페이징 조회",
          "부족 시 안내: 포인트 부족 시 획득 방법 안내로 자연스러운 참여 유도",
          "탈모 진단 연계: 운세 확인 후 탈모 진단 페이지로 자연스러운 플로우 연결"
        ],
        technicalDetails: [
          "JPA 페이징: 포인트 내역을 페이지당 10개씩 효율적 조회",
          "포인트 트랜잭션: 적립/차감 시 이력 테이블 자동 기록",
          "세션 기반 중복 방지: 당일 출석체크 중복 실행 방지",
          "randomUUID 운세: 매번 다른 운세 결과로 재방문 동기 부여",
          "포인트 잔액 실시간 표시: 사용자 현재 보유 포인트 항상 확인 가능"
        ]
      },
      pointShop: {
        title: "포인트샵 시스템",
        description: "사용자가 보유한 포인트로 상품을 구매하고, 포인트와 상품 정보를 효율적으로 관리하는 시스템",
        userFeatures: [
          "상품 구매: 보유한 포인트로 상품을 구매",
          "상품 상세보기: 상품 이미지, 가격, 설명 확인 후 구매 결정",
          "상품구매내역 조회: 이전에 구매한 상품 정보 확인",
          "결제 완료 페이지: 구매 완료 후 결제 내역 확인",
          "재고 소진(품절): 재고가 소진된 상품은 구매 불가, 품절 상태 표시"
        ],
        adminFeatures: [
          "상품관리: 상품 등록, 수정, 삭제(이미지, 가격, 설명, 카테고리 관리)",
          "재고 관리: 상품 재고 실시간 관리",
          "통계 및 분석: 상품 판매 현황 및 사용자 활동 데이터 분석",
          "상품 카테고리 관리: 상품을 다양한 카테고리로 분류 및 관리",
          "포인트 차감 관리: 사용자의 포인트 차감 관리"
        ],
        technicalDetails: [
          "JPA 페이징: 포인트 상품 및 구매내역을 페이지당 10개씩 효율적으로 조회",
          "포인트 트랜잭션 관리: 포인트 차감 트랜잭션을 안전하게 처리하고, 낙관적 락(@Version) 사용",
          "재고 동시성 제어: 비관적 락을 활용해 상품의 재고를 동시성 문제 없이 관리",
          "Firebase 이미지 관리: 상품 이미지는 Firebase Storage에 저장 및 관리",
          "카테고리별 상품 조회: 사용자가 원하는 카테고리에서 상품을 필터링하여 쉽게 조회 가능"
        ]
      }
    },
    features: [
      "Spring Security 기반 회원가입 및 로그인 시스템",
      "OAuth2를 통한 SNS 로그인 (카카오, 네이버, 구글)",
      "Teachable Machine 기반 AI 탈모 이미지 분석 및 진단",
      "익명 질문 작성 및 투표 시스템",
      "Windows 95 스타일 레트로 UI/UX",
      "카카오 지도 API를 활용한 탈모 병원 찾기",
      "포인트 시스템 및 오늘의 운세",
      "포인트샵을 통한 상품 구매 시스템",
      "이메일 인증 및 비밀번호 찾기",
      "실시간 비동기 처리 (Ajax)",
      "반응형 웹 디자인",
      "페이징 처리된 포인트 내역 조회"
    ],
    architecture: {
      "백엔드": "Spring Boot + JPA를 통한 RESTful API 개발",
      "프론트엔드": "Thymeleaf + Ajax를 활용한 반응형 UI",
      "AI 분석": "Teachable Machine + OpenCV 기반 이미지 딥러닝 모델",
      "데이터베이스": "MySQL을 통한 사용자 및 커뮤니티 데이터 관리",
      "보안": "Spring Security + OAuth2를 통한 인증/인가",
      "배포": "AWS EC2 + GitHub Actions를 통한 CI/CD",
      "협업": "Git + GitHub를 통한 버전 관리 및 팀 협업"
    },
    techStack: {
      "백엔드": [
        "Spring Boot - 메인 웹 프레임워크",
        "Java - 백엔드 개발 언어",
        "JPA - ORM 매핑을 통한 데이터베이스 연동",
        "Spring Security - 보안 및 OAuth2 처리",
        "MySQL - 관계형 데이터베이스",
        "JavaMailSender - 이메일 인증 기능"
      ],
      "프론트엔드": [
        "HTML/CSS/JavaScript - 반응형 사용자 인터페이스",
        "Thymeleaf - 서버사이드 템플릿 엔진",
        "Ajax - 비동기 데이터 통신",
        "Windows 95 스타일 UI - 레트로 감성 디자인"
      ],
      "AI 분석": [
        "Python - AI 모델 개발 및 이미지 처리",
        "Teachable Machine - 탈모 이미지 분류 모델",
        "OpenCV - 이미지 전처리 및 특징 추출",
        "Albumentations - 데이터 증강"
      ],
      "배포 및 운영": [
        "AWS EC2 - 클라우드 서버 인프라",
        "GitHub Actions - CI/CD 자동화 파이프라인",
        "Git - 소스코드 버전 관리",
        "Gradle - 프로젝트 빌드 및 의존성 관리"
      ],
      "개발 도구": [
        "STS4 (Spring Tool Suite 4) - 백엔드 개발 IDE",
        "DBeaver - 데이터베이스 클라이언트 도구",
        "Excel - 업무 분담표 및 진행 관리"
      ]
    },
    keyTechnicalFeatures: [
      {
        title: "Teachable Machine을 활용한 AI 탈모 진단",
        description: "Google Teachable Machine으로 학습된 모델을 JavaScript에서 로드하여 실시간 탈모 이미지 분석을 수행합니다. 5단계 탈모 분류와 예외 이미지(손, 얼굴, 문서) 필터링 기능을 제공하며, 업로드 즉시 분석 결과를 확률과 함께 시각적으로 표시합니다."
      },
      {
        title: "OAuth2 기반 다중 SNS 로그인",
        description: "Spring Security OAuth2를 활용하여 카카오, 네이버, 구글 로그인을 통합 지원합니다. 각 제공자별 동의항목을 처리하고, 기존 회원 여부에 따라 로그인/회원가입 페이지로 분기 처리하며, provider와 providerId를 통한 계정 연동을 구현했습니다."
      },
      {
        title: "익명 기반 투표 시스템",
        description: "사용자가 투표하지 않은 공개 질문 중 랜덤으로 선택하여 제공하고, 4개의 탈모 사진 중 선택하여 투표할 수 있는 시스템입니다. 중복 투표 방지, Windows 95 스타일 UI, 키보드 단축키 지원 등 사용자 친화적인 기능을 포함합니다."
      },
      {
        title: "실시간 이메일 인증 시스템",
        description: "JavaMailSender와 @Async를 활용하여 회원가입, ID/PW 찾기 시 실시간 이메일 인증을 처리합니다. randomUUID로 6자리 인증번호를 생성하고, 3분 타이머와 함께 인증 UI를 동적으로 생성하여 사용자 경험을 최적화했습니다."
      }
    ],
    apis: [
      "카카오 지도 API - 탈모 병원 위치 검색 및 길찾기",
      "OAuth2 API - 카카오, 네이버, 구글 소셜 로그인",
      "JavaMail API - 회원가입 및 비밀번호 찾기 이메일 인증",
      "Teachable Machine API - AI 기반 탈모 이미지 분석",
      "Geolocation API - 사용자 현재 위치 확인"
    ],
    teamMembers: [
      { name: "서하나", role: "리더", portfolio: "https://www.notion.so/1b9db822a28e801eb04af2f96ab48d5a" },
      { name: "최승필", role: "팀원", portfolio: "https://www.notion.so/1e3c0872a5f880ac8e10e228219cd836?pvs=4" },
      { name: "유태종", role: "팀원", portfolio: "https://github.com/taejong12" }
    ],
    challenges: "탈모라는 민감한 주제를 다루면서도 유쾌하고 안전한 익명 커뮤니티를 구축하는 것, Teachable Machine 모델의 정확도 향상을 위한 대량 이미지 수집 및 증강, Spring Boot와 JavaScript AI 모델 간의 효율적인 연동, OAuth2를 통한 다중 SNS 로그인 통합 처리, Windows 95 스타일 레트로 UI 구현, AWS 환경에서의 안정적인 배포 및 운영, 실시간 비동기 처리를 통한 사용자 경험 최적화, 개인정보 보호와 익명성 보장을 위한 보안 시스템 구축 등 기술적, 사회적 측면의 복합적인 도전이 있었습니다.",
    outcome: "Spring Boot와 AI 모델을 결합한 혁신적인 서비스 개발 경험을 통해 풀스택 개발 역량을 크게 향상시켰습니다. Teachable Machine과 OpenCV를 활용한 실시간 이미지 분석 시스템 구축으로 AI 기술 융합 능력을 기를 수 있었고, OAuth2 기반 다중 SNS 로그인과 이메일 인증 시스템 구현으로 현대적인 웹 서비스 보안 기술을 습득했습니다. 또한 사회적 가치를 담은 서비스 기획부터 AI 모델 학습, 배포까지의 전 과정을 경험하며 문제 해결 능력과 사용자 중심 사고를 기를 수 있었습니다."
  },

  2: {
    title: "Urban Village 숙박 플랫폼",
    period: "2025.03.31 ~ 2025.05.25",
    notionLink: "https://github.com/HanaSeoo/urban-village.git",
    description: "인구감소에 따른 지역문제를 해결하고자 지역의 자원인 빈집을 활용하여 시골 지역을 되살리는 프로젝트입니다. 지역 숙소를 등록하고 예약을 관리하며, 숙소를 청소하는 청소관리자를 지역에 거주하는 일자리가 없는 노인분들로 선정하여 노인일자리 창출에 기여하며, 숙소를 운영하며 생기는 소득을 마을 자치금으로 운영할 수 있도록 하는 웹 사이트를 제작하였습니다.",
    skills: [
      "Java 11", "Spring MVC", "Spring AOP", "MyBatis", "Spring Security", 
      "CGLIB", "JSR 330", "Logging", "JavaMail", "Thumbnailator", 
      "Apache Commons FileUpload", "Commons IO", "Lombok", "Jackson", 
      "Google API Client", "JUnit", "Apache Tiles", "Oracle", "Oracle SQL", 
      "Oracle Cloud", "Tomcat 9", "HTML/CSS", "JavaScript", "Bootstrap 5", 
      "jQuery", "Maven", "Eclipse", "VSCode", "GitHub", "SQL Developer", "ERD cloud"
    ],
    videoUrl: "https://youtu.be/vfzpYiFC3Rw",
    thumbnail: "/image/2_1.png",
    images: [
      "/image/projectimage/2_1.png",
      "/image/projectimage/2_2.png", 
      "/image/projectimage/2_3.png",
      "/image/projectimage/2_4.png",
      "/image/projectimage/2_5.png",
      "/image/projectimage/2_6.png",
      "/image/projectimage/2_7.png",
      "/image/projectimage/2_8.png",
      "/image/projectimage/2_9.png"
    ],
    projectOverview: {
      projectName: "Urban Village 숙박 플랫폼",
      developmentPeriod: "2025.03.31 ~ 2025.05.25",
      developmentTeam: 4,
      projectType: "숙박 플랫폼 (고객, 사업자/숙소, 관리자 파트 기능 분리)",
      gitRepository: "https://github.com/HanaSeoo/urban-village.git"
    },
    projectStructureAndDesign: {
      siteMap: {
        customerFlow: {
          title: "고객 데이터 입출력 순서",
          description: "고객이 서비스를 이용하는 전체적인 흐름과 데이터 처리 과정",
          flow: [
            "회원가입 → 고객 로그인 → 숙소 검색 및 예약 → 위시리스트 → 청소관리자 지원"
          ]
        },
        adminFlow: {
          title: "Main & 관리자 입출력 순서", 
          description: "메인 페이지와 관리자가 시스템을 관리하는 흐름",
          flow: [
            "메인 화면 → 숙소 검색 결과 → 숙소 상세 → 숙소 리뷰 → 관리자 페이지 → 숙소 추천/삭제 → 매출 분석 → 호스트 추천 등록"
          ]
        }
      },
      databaseERD: {
        title: "Database ERD",
        description: "Urban Village 서비스 운영을 위한 데이터베이스의 구조를 만드는 역할입니다.",
        features: [
          "핵심 정보 저장 테이블: 사용자 관련(회원, 관리자, 청소 담당자), 숙소 관련(숙소 정보, 객실 정보), 예약 및 거래 관련(예약, 결제, 찜 목록), 기타(리뷰, 쿠폰)",
          "자동 번호 생성 (시퀀스): 숙소, 찜 목록, 리뷰 등에 새로운 데이터가 추가될 때마다 자동으로 고유한 번호를 매겨주는 기능",
          "자동 실행 기능 (트리거): 데이터가 입력되거나 수정될 때 특정 작업(ID 자동 부여, 수정 날짜 갱신)이 자동으로 실행",
          "데이터 조회 편의 기능 (뷰): 결제 데이터를 기반으로 일별, 월별, 연도별 매출 정보를 쉽게 조회할 수 있도록 미리 정의된 조회 방식 제공"
        ],
        coreStructure: [
          "사용자 관련: 회원, 관리자, 청소 담당자 정보를 분리해서 관리합니다",
          "숙소 관련: 숙소 자체 정보와 각 숙소의 객실 정보를 저장하며, 관리자/청소 담당자와 연결됩니다",
          "예약 및 거래 관련: 예약 및 결제 정보, 회원들의 찜 목록을 관리합니다",
          "기타: 리뷰, 쿠폰 정보 등을 저장하는 테이블도 포함합니다"
        ]
      }
    },
    background: [
      "지역 문제 해결 목적: 인구감소로 인한 시골 지역의 빈집 문제를 숙소로 활용하여 지역 활성화를 도모하고자 했습니다.",
      "사회적 가치 창출: 숙소 청소관리자로 지역 거주 노인분들을 선정하여 노인일자리 창출에 기여하고자 했습니다.",
      "지역 공동체 발전: 숙소 운영으로 발생하는 수익을 마을 자치금으로 활용하여 지역 공동체의 지속가능한 발전에 기여하고자 했습니다.",
      "실무 수준 개발 경험: Spring Framework 기반의 실제 서비스 수준의 웹 애플리케이션을 개발하여 실무 역량을 기르고자 했습니다."
    ],
    mainFeatures: {
      loginAndSignup: {
        title: "로그인 및 회원가입",
        features: [
          "고객과 관리자 로그인, 회원가입 분리",
          "구글 API를 이용한 소셜 로그인", 
          "스프링 이메일을 통한 가입, 암호찾기 시 이메일 인증",
          "비동기적으로 중복체크"
        ]
      },
      accommodationSearch: {
        title: "숙소 검색",
        features: [
          "메인 화면에서 검색창, 숙소 지역에 따른 카테고리, 호스트 추천으로 원하는 숙소를 탐색할 수 있습니다",
          "숙소페이지에는 카카오 API 지도가 있어 정확한 위치 정보를 전달 받을 수 있습니다",
          "메인페이지에 별점과 예약수 조회수가 떠 있어 사용자가 좀 더 편리하게 숙소의 정보를 파악 할 수있습니다"
        ]
      },
      wishlist: {
        title: "숙소 찜하기",
        features: [
          "원하는 숙소를 찜하거나 취소할 수 있고, 찜한 목록은 헤더 햄버거 버튼 위시리스트 탭에서 확인 가능합니다",
          "또한 메인페이지에서 숙소에 하트 버튼을 누르면 위시리스트에 담거나 취소 할 수 있습니다"
        ]
      },
      paymentAndReservation: {
        title: "결제 및 예약",
        features: [
          "아임포트 API를 이용해 결제 서비스를 구현했으며 예약된 날짜는 중복처리되어 예약이 불가능하게 됩니다",
          "관리자는 어떤 고객이 어떤 숙소를 예약 했는지 파악 할 수 있습니다",
          "만약 체크아웃 날짜보다 일찍 퇴실 처리할 경우 예약 중복 처리된 방은 다시 예약할 수 있도록 처리됩니다"
        ]
      },
      reviews: {
        title: "리뷰",
        customerFeatures: [
          "퇴실 완료처리된 예약에 한해 고객은 별점 평가과 리뷰 작성이 가능합니다",
          "작성된 평가와 리뷰는 숙소 상세페이지 및 메인페이지 숙소 리스트에서 확인이 가능합니다",
          "작성된 리뷰를 관리자가 삭제할 수 있습니다"
        ]
      },
      adminMode: {
        title: "관리자 모드",
        statistics: {
          features: [
            "관리자는 전반적인 일별, 월별, 연도별 매출을 그래프로 확인할 수 있습니다",
            "관리자는 모든 숙소의 등록. 삭제, 호스트 추천숙소 등록이 가능하도록 하였습니다",
            "숙소는 경상북도라는 일정 지역의 주소지만 등록이 가능하게 구성하였습니다",
            "청소부를 선별하는 서류를 첨부받고 관리할 수 있으며 청소부 배정을 관리자가 실행 할 수 있습니다"
          ]
        }
      }
    },
    features: [
      "고객과 관리자 로그인, 회원가입 분리",
      "구글 API를 이용한 소셜 로그인",
      "스프링 이메일을 통한 가입, 암호찾기 시 이메일 인증",
      "비동기적으로 중복체크",
      "메인 화면에서 검색창, 숙소 지역에 따른 카테고리, 호스트 추천으로 원하는 숙소 탐색",
      "숙소페이지에 카카오 API 지도로 정확한 위치 정보 제공",
      "메인페이지에 별점과 예약수 조회수 표시",
      "원하는 숙소를 찜하거나 취소 (위시리스트 기능)",
      "아임포트 API를 이용한 결제 서비스 구현",
      "예약된 날짜 중복처리로 예약 불가능 처리",
      "관리자의 고객 예약 현황 파악",
      "체크아웃 날짜보다 일찍 퇴실 처리 시 예약 재가능 처리",
      "퇴실 완료처리된 예약에 한해 별점 평가 및 리뷰 작성",
      "숙소 상세페이지 및 메인페이지에서 리뷰 확인",
      "관리자의 리뷰 삭제 권한",
      "일별, 월별, 연도별 매출 그래프 확인",
      "모든 숙소의 등록, 삭제, 호스트 추천숙소 등록",
      "경상북도 지역 주소지만 등록 가능",
      "청소부 선별 서류 첨부 및 관리",
      "청소부 배정 관리자 실행"
    ],
    architecture: {
      "백엔드": "Spring MVC 패턴 기반 3계층 아키텍처 구조",
      "프론트엔드": "HTML/CSS/JavaScript + Bootstrap을 활용한 반응형 웹",
      "데이터베이스": "Oracle Cloud 환경의 Oracle Database",
      "웹서버": "Apache Tomcat 9 WAS 환경",
      "보안": "Spring Security + Interceptor를 통한 인증/인가",
      "빌드도구": "Maven을 통한 프로젝트 관리"
    },
    techStack: {
      "백엔드": [
        "Java 11 - 메인 개발 언어",
        "Spring MVC - 웹 애플리케이션 프레임워크", 
        "Spring AOP - 관점 지향 프로그래밍",
        "MyBatis - SQL 매핑 프레임워크",
        "Spring Security - 보안 프레임워크",
        "CGLIB - 코드 생성 라이브러리",
        "JSR 330 - 의존성 주입 표준",
        "Logging - 로깅 시스템",
        "JavaMail - 이메일 발송 기능",
        "Thumbnailator - 이미지 썸네일 처리",
        "Apache Commons FileUpload, Commons IO - 파일 업로드 처리",
        "Lombok - 코드 간소화",
        "Jackson - JSON 처리",
        "Google API Client - Google 로그인/서비스 연동",
        "JUnit - 테스트 프레임워크",
        "Apache Tiles - 서버 사이드 템플릿/레이아웃"
      ],
      "데이터베이스 & WAS": [
        "Oracle - 데이터베이스 시스템",
        "Oracle SQL - 데이터베이스 질의 언어",
        "Oracle Cloud - 클라우드 환경",
        "Tomcat 9 - 웹 애플리케이션 서버"
      ],
      "프론트엔드": [
        "HTML/CSS - 웹 페이지 구조 및 스타일",
        "JavaScript - 클라이언트 측 동적 기능",
        "Bootstrap 5 - 프론트엔드 UI 프레임워크",
        "jQuery - JavaScript 라이브러리"
      ],
      "환경 & 도구": [
        "Mac, Windows 10 - 운영 체제",
        "Eclipse - 통합 개발 환경",
        "VSCode - 코드 에디터",
        "GitHub - 소스 코드 버전 관리 및 협업 플랫폼",
        "SQL Developer - Oracle DB 관리 도구",
        "ERD cloud - ERD 설계 도구",
        "Maven - 프로젝트 빌드 및 의존성 관리 도구"
      ]
    },
    technologyUsage: {
      backend: {
        role: "사용자에게는 보이지 않는 서버 쪽에서 작동하는 핵심 로직 부분입니다. 프론트엔드로부터 전달받은 요청을 처리하고, 데이터베이스와 연동하여 데이터를 관리하며, 비즈니스 규칙에 따라 필요한 연산이나 작업을 수행합니다.",
        urbanVillageRole: "회원 가입 및 로그인/로그아웃 처리, 숙소 정보의 등록/수정/삭제 및 복잡한 검색 로직 수행, 예약 요청 확인 및 처리, 결제 시스템 연동 및 결제 정보 저장, 쿠폰 발급 및 적용 로직, 리뷰 저장 및 평점 계산, 관리자를 위한 데이터 집계 및 관리 기능 수행 등 프로그램의 핵심 비즈니스 로직 구현"
      },
      database: {
        role: "프로그램 운영에 필요한 모든 데이터를 영구적으로 저장하고 관리하는 시스템입니다. 사용자의 정보, 서비스 운영에 필요한 콘텐츠(숙소, 쿠폰 등), 사용자의 활동 기록(예약, 찜, 리뷰 등) 등이 안전하게 보관됩니다.",
        urbanVillageRole: "사용자의 계정 정보 및 회원 유형 관리, 등록된 모든 숙소의 상세 정보 및 객실 정보 저장, 과거 및 현재의 모든 예약 기록 및 결제 정보 저장, 작성된 리뷰 내용 및 평점 관리, 발급된 쿠폰 정보 및 사용 이력 관리"
      },
      frontend: {
        role: "사용자가 웹 브라우저나 모바일 앱 화면을 통해 직접 보고 상호작용하는 부분입니다. 사용자 인터페이스(UI)를 구축하고 사용자 경험(UX)을 디자인하며, 사용자의 입력이나 동작을 감지하여 백엔드에 요청을 보내는 역할을 합니다.",
        urbanVillageRole: "숙소 검색 및 목록 보기, 숙소 상세 정보 확인 화면 표시, 예약/결제 정보 입력 폼, 마이페이지 조회, 관리자 페이지의 UI 구성 등 사용자가 눈으로 보고 조작하는 모든 화면과 클라이언트 측에서 발생하는 동적인 기능 구현"
      }
    },
    keyTechnicalFeatures: [
      {
        title: "Interceptor를 사용한 로그인과 viewName관리",
        description: "로그인 확인이 필요한 메소드에서 세션을 if문으로 반복하여 확인하는 중복 코드를 제거했습니다. 관리자가 접근할 수 있는 페이지와 고객이 접근할 수 있는 페이지를 확실하게 분리했습니다. 주요 기능에 접근할 때 로그인이 안되어 있다면 로그인 창으로 갈 수 있도록 유도했습니다."
      },
      {
        title: "비즈니스 로직의 분리",
        description: "비즈니스 로직을 Controller, Service, DAO 계층으로 명확히 분리하여 개발하였습니다. 계층별 책임을 분리해 유지보수성과 확장성을 높였습니다."
      },
      {
        title: "Transaction의 사용",
        description: "결제를 할 때 @Transactional을 사용하여 결제 로직을 좀 더 견고히 했습니다. 데이터 일관성을 보장하여 결제 등록이 실패하면 DB에 어떤 데이터도 저장되지 않고, 성공한 경우에만 결제 정보가 안전하게 저장됩니다. 오류 발생 시 자동 롤백으로 DB 상태를 이전 상태로 복구합니다."
      }
    ],
    troubleshooting: {
      title: "예약 날짜 저장 / 동일 기간 예약 중복 처리",
      problem: "초반기에 예약테이블의 체크인 - 체크아웃 날짜로만 예약 관련 서비스 로직을 처리했습니다. 이는 동일한 기간에 예약된 객실을 중복체크할 때 문제가 되었습니다. 객실이 예약 기간에 대해 중복될 경우의 수는 4가지가 있어서 모든 경우의 수를 체크하기 어려웠습니다.",
      casesDescription: [
        "(예약할 체크인) [예약된 체크인] (예약할 체크아웃) [예약된 체크아웃]",
        "(예약할 체크인) [예약된 체크인] [예약된 체크아웃] (예약할 체크아웃)",
        "[예약된 체크인] (예약할 체크인) [예약된 체크아웃] (예약할 체크아웃)",
        "[예약된 체크인] (예약할 체크인) (예약할 체크아웃) [예약된 체크아웃]"
      ],
      solution: "객실 번호 - 예약 날짜를 저장하는 RESERVED 테이블을 만들었고 객실을 예약할 때는 예약된 날짜 하루하루를 저장할 수 있도록 하여 간단하게 BETWEEN을 이용해 중복 여부를 확인할 수 있도록 했습니다.",
      result: "1월 1일 ~ 1월 3일 예약할 시 테이블에 check in, check out날짜를 집어 넣으면 스크립트에서 1~3일까지의 날짜를 flatpickr 달력에 선택 불가 날짜로 표시했습니다."
    },
    apis: [
      "구글 API - OAuth 2.0을 통한 소셜 로그인",
      "카카오 지도 API - 숙소 위치 정보 및 지도 서비스", 
      "아임포트 결제 API - 온라인 결제 시스템",
      "도로명주소 API - 정확한 주소 검색 및 입력",
      "JavaMail API - 예약 확인 및 알림 이메일 발송"
    ],
    teamMembers: [
      { name: "김대중", role: "팀원", portfolio: "https://www.notion.so/1e31366431dd802f8235cef0bca33a5d?pvs=21" },
      { name: "김찬영", role: "팀원" },
      { name: "서하나", role: "리더", portfolio: "https://www.notion.so/1b9db822a28e801eb04af2f96ab48d5a?pvs=21" },
      { name: "최승필", role: "팀원", portfolio: "https://www.notion.so/1e3c0872a5f880ac8e10e228219cd836?pvs=21" }
    ],
    challenges: "Spring Framework의 다양한 모듈(MVC, AOP, Security)을 실제 프로젝트에 통합 적용하는 것, Oracle Cloud 환경에서의 배포 및 운영, 다양한 외부 API 연동 및 에러 처리, 복잡한 예약 시스템에서 날짜 중복 처리 로직 구현, @Transactional을 활용한 결제 데이터 일관성 보장, Interceptor를 통한 효율적인 접근 제어 시스템 구축, MyBatis를 활용한 동적 쿼리 작성 및 성능 최적화 등 실무 수준의 풀스택 개발 경험을 쌓는 종합적인 도전이 있었습니다.",
    outcome: "Spring Framework 기반의 대규모 웹 애플리케이션 개발 경험을 통해 엔터프라이즈급 Java 개발 역량을 크게 향상시켰습니다. 특히 복잡한 예약 시스템에서 발생하는 날짜 중복 문제를 RESERVED 테이블 설계를 통해 해결하며 데이터베이스 설계 능력을 기를 수 있었고, 다양한 외부 API 연동 경험으로 실제 서비스 개발 능력을 향상시켰습니다. 또한 팀 리더로서 4명의 팀원과 협업하며 프로젝트 관리, 코드 리뷰, Git을 활용한 버전 관리 등 실무 협업 역량을 크게 발전시킬 수 있었습니다."
  },

  3: {
    title: "개인 포트폴리오 웹사이트",
    period: "2025.06.01 ~ 06.20",
    notionLink: "https://www.notion.so/프로젝트1-링크-여기에-추가",
    description: "React를 활용하여 개발한 개인 포트폴리오 웹사이트로, 모던한 UI/UX와 반응형 디자인을 통해 개발자로서의 역량과 프로젝트들을 효과적으로 소개하는 Single Page Application입니다.",
    skills: ["React", "JavaScript", "HTML", "CSS", "React Router", "Node.js", "Git", "GitHub", "Netlify", "Responsive Design"],
    videoUrl: null,
    thumbnail: "/image/projectimage/3_1.png",
    images: [
      "/image/projectimage/3_1.png",
      "/image/projectimage/3_2.png", 
      "/image/projectimage/3_3.png",
      "/image/projectimage/3_4.png",
      "/image/projectimage/3_5.png"
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
      "배포 및 운영": [
        "Git - 버전 관리 시스템",
        "GitHub - 원격 저장소 및 협업",
        "Netlify - 정적 사이트 호스팅 및 자동 배포"
      ]
    },
    teamMembers: [
      { name: "서하나", role: "풀스택 개발자", portfolio: "https://www.notion.so/1b9db822a28e801eb04af2f96ab48d5a" }
    ],
    challenges: "React 초기 학습 곡선 극복, 컴포넌트 간 상태 관리 최적화, 반응형 디자인에서의 일관된 사용자 경험 구현, 이미지 최적화 및 성능 향상, SEO 최적화를 위한 메타데이터 관리, 다양한 브라우저 호환성 확보, 지속적인 콘텐츠 업데이트를 위한 확장 가능한 구조 설계 등 프론트엔드 개발의 전반적인 영역에서 실무 수준의 품질을 달성하는 도전이 있었습니다.",
    outcome: "React를 활용한 실제 프로젝트 개발 경험을 통해 컴포넌트 기반 개발 역량을 크게 향상시켰고, 모던 JavaScript와 ES6+ 문법에 대한 이해도를 높일 수 있었습니다. 반응형 웹 디자인과 사용자 경험 최적화에 대한 실무 감각을 기를 수 있었으며, Git을 활용한 버전 관리와 Netlify를 통한 배포 경험으로 개발 전 과정에 대한 이해도를 높였습니다."
  },

  4: {
    title: "ABC ShoppingMall",
    period: "2025.02.03 ~ 13",
    notionLink: "https://github.com/ABC-ShoppingMall",
    description: "Java와 JavaFX SceneBuilder를 활용하여 개발한 데스크톱 쇼핑몰 애플리케이션으로, 사용자가 상품을 장바구니에 담고 쿠폰을 사용하여 결제하고 배송을 조회할 수 있는 완전한 쇼핑몰 시스템을 구현했습니다.",
    skills: ["Java", "JavaFX Scene Builder", "Oracle", "Eclipse", "JDK 17", "JDBC", "SQL"],
    videoUrl: "https://www.youtube.com/embed/AosiUaQ-lYo",
    thumbnail: "/image/4_1.png",
    images: [
      "/image/projectimage/4_1.png",
      "/image/projectimage/4_2.png", 
      "/image/projectimage/4_3.png",
      "/image/projectimage/4_4.png",
      "/image/projectimage/4_5.png",
      "/image/projectimage/4_6.png"
    ],
    projectOverview: {
      projectName: "ABC ShoppingMall",
      developmentPeriod: "2025.03.3 ~ 2025.03.13",
      developmentTeam: 3,
      projectType: "의류 및 악세사리 판매 쇼핑몰",
      gitRepository: "https://github.com/ABC-ShoppingMall"
    },
    projectStructure: {
      title: "프로젝트 주요 구조",
      description: "ABCShopping Mall 프로젝트는 다음과 같은 구조로 구성되어 있습니다.",
      structure: [
        "category - 상품 카테고리 관련",
        "member - 회원관리 기능", 
        "login - API 로그인(구글 등)",
        "pay - 결제 관리자 기능",
        "delivery - 배송번호로 배송 조회",
        "question - Q & A 기능",
        "common - 공통 기능",
        "resource - 리소스 관리",
        "fxml - Scene Builder UI"
      ]
    },
    storyboard: {
      title: "스토리보드",
      description: "ABC Shopping 스토리 보드",
      flow: "main → Main → abcShopping Mall → category → member → login → question → delivery → pay → Class → package → common → resource → fxml (모든 패키지가 참조하는 패키지)"
    },
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
    techStack: {
      "프로그래밍 언어": [
        "Java SE 17 - 메인 개발 언어",
        "SQL - 데이터베이스 쿼리 언어"
      ],
      "GUI 프레임워크": [
        "JavaFX - 데스크톱 애플리케이션 UI 프레임워크",
        "Scene Builder - JavaFX용 비주얼 레이아웃 툴",
        "FXML - 선언적 UI 마크업 언어"
      ],
      "데이터베이스": [
        "Oracle Database - 관계형 데이터베이스 시스템",
        "JDBC - Java 데이터베이스 연결 API"
      ],
      "개발 도구": [
        "Eclipse - 통합 개발 환경",
        "JDK 17 - Java 개발 키트"
      ]
    },
    technologyUsage: {
      backend: {
        role: "사용자에게는 보이지 않는 서버 쪽에서 작동하는 핵심 로직 부분입니다. 프론트엔드로부터 전달받은 요청을 처리하고, 데이터베이스와 연동하여 데이터를 관리하며, 비즈니스 규칙에 따라 필요한 연산이나 작업을 수행합니다.",
        abcShoppingRole: "회원 가입 및 로그인/로그아웃 처리 등과 같은 회원 관리와 물건을 등록하고 재고 관리 등과 같은 관리자 기능을 수행합니다."
      },
      database: {
        role: "프로그램 운영에 필요한 모든 데이터를 영구적으로 저장하고 관리하는 시스템입니다. 사용자의 정보, 서비스 운영에 필요한 콘텐츠(구매, 쿠폰 등), 사용자의 활동 기록(배송조회) 등이 안전하게 보관되며, 백엔드 애플리케이션은 DB에 접근하여 데이터를 읽거나 씁니다."
      },
      frontend: {
        role: "사용자가 웹 브라우저나 모바일 앱 화면을 통해 직접 보고 상호작용하는 부분입니다. 사용자 인터페이스(UI)를 구축하고 사용자 경험(UX)을 디자인하며, 사용자의 입력이나 동작을 감지하여 백엔드에 요청을 보내는 역할을 합니다.",
        abcShoppingRole: "Scene Builder를 이용하여 사용자가 직관적으로 쇼핑을 하고 구매를 할 수 있도록 흰색, 검정색을 사용하여 상품의 색상이 더욱 돋보일 수 있도록 하였고 구매 버튼, 회원탈퇴 등 사용자에게 강조하며 전달해야 할 정보에는 강한 색감을 사용하는 전략적 디자인을 구성했습니다."
      }
    },
    mainFeatures: {
      shopping: {
        title: "쇼핑기능",
        features: [
          "카테고리별 상품 분류 및 브라우징",
          "장바구니 추가/제거/수량 조절",
          "쿠폰 적용을 통한 할인 혜택",
          "결제 프로세스 완료까지 전체 쇼핑 플로우"
        ]
      },
      memberManagement: {
        title: "회원기능",
        features: [
          "회원가입 및 로그인 시스템",
          "회원정보 수정 및 관리",
          "주문 내역 조회",
          "개인정보 보안 처리"
        ]
      },
      orderAndDelivery: {
        title: "상품 구매 및 배송조회",
        features: [
          "주문 완료 후 주문번호 발급",
          "배송번호를 통한 실시간 배송 상태 확인",
          "주문 상세 정보 조회",
          "배송 완료 알림 시스템"
        ]
      }
    },
    keyTechnicalFeatures: [
      {
        title: "JavaFX Scene Builder를 활용한 UI 설계",
        description: "시각적 레이아웃 도구인 Scene Builder를 활용하여 직관적이고 사용자 친화적인 쇼핑몰 인터페이스를 설계했습니다. FXML을 통한 선언적 UI 구성으로 코드와 디자인을 분리하여 유지보수성을 높였습니다."
      },
      {
        title: "Oracle 데이터베이스 연동",
        description: "JDBC를 활용하여 Oracle 데이터베이스와의 안정적인 연결을 구현했습니다. 상품 정보, 회원 데이터, 주문 내역 등 복잡한 데이터 관계를 효율적으로 관리하고 조회할 수 있는 시스템을 구축했습니다."
      },
      {
        title: "쇼핑카트 및 결제 시스템",
        description: "사용자가 상품을 장바구니에 담고, 수량을 조절하며, 쿠폰을 적용하여 최종 결제까지 완료할 수 있는 전체적인 쇼핑 플로우를 구현했습니다. 실시간 가격 계산과 재고 관리 기능을 포함합니다."
      }
    ],
    databaseDesign: {
      description: "이 SQL 코드는 쇼핑몰 시스템이 원활하게 데이터를 저장하고 관리하며, 필요한 정보를 효율적으로 조회할 수 있도록 데이터베이스의 기본적인 설계와 자동화 기능을 정의한 것입니다.",
      features: [
        "고객 주문 및 상품 정보 체계적 관리",
        "회원 정보 및 인증 시스템",
        "재고 관리 및 상품 카테고리 분류",
        "결제 및 배송 추적 시스템",
        "쿠폰 및 할인 혜택 관리"
      ]
    },
    teamMembers: [
      { name: "김범룡", role: "팀원" },
      { name: "서하나", role: "리더", portfolio: "https://www.notion.so/1b9db822a28e801eb04af2f96ab48d5a" },
      { name: "정성효", role: "팀원" }
    ],
    challenges: "처음으로 진행하는 팀 프로젝트에서 Java 기초 문법부터 JavaFX GUI 프로그래밍, Oracle 데이터베이스 연동까지 다양한 기술을 동시에 학습하고 적용해야 하는 도전이 있었습니다. 특히 팀원 간의 코드 통합 과정에서 발생하는 충돌 해결, 데이터베이스 설계의 일관성 유지, JavaFX의 이벤트 처리 방식 학습, JDBC를 통한 안정적인 DB 연결 관리 등 다양한 기술적 허들을 극복해야 했습니다.",
    outcome: "팀 협업의 중요성을 깨닫고, 기본적인 자바 유틸 활용 능력을 기르며, 실제 쇼핑몰과 같은 완성도 있는 프로젝트를 구현할 수 있었습니다. Java 객체지향 프로그래밍의 기본 개념을 실제 프로젝트에 적용하면서 프로그래밍 기초 실력을 크게 향상시킬 수 있었고, JavaFX를 통한 데스크톱 애플리케이션 개발 경험으로 GUI 프로그래밍 능력을 기를 수 있었습니다."
  }
};