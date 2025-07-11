// src/pages/MogatshooProjectPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProjectDetail.css'; // 공통 스타일 시트 사용

function MogatshooProjectPage() {
  // 모갓슈 프로젝트 데이터를 이 컴포넌트 안에 직접 작성
  const project = {
    id: 'mogatshoo',
    title: '모갓슈? - 탈모인을 위한 웹 개발 Project',
    description: '탈모인을 위한 익명 기반 공감 커뮤니티',
    period: '2025.05.12 - 2025.06.20',
    mainimage: '/image/mogatshoo.png',
    videoUrl: 'https://www.youtube.com/embed/JcuWNKhWlmo',
    gitRepository: 'https://github.com/mogatshoo/Mogatshoo-Project',
    projectOverview: {
      projectName: '모갓슈? - 탈모인 익명 공감 커뮤니티',
      developmentPeriod: '2025.05.12 - 2025.06.20',
      developmentTeam: 3,
      projectType: '웹+앱 통합 커뮤니티 서비스 (익명 기반 탈모 진단 및 공감 플랫폼)',
      nameOrigin: '털(털모) + 갔슈? (가다의 전라도 사투리)',
      gitRepository: 'https://github.com/mogatshoo/Mogatshoo-Project',
    },
    background: [
      '모갓슈(털털모 + 갔슈?_전라도 사투리)는 탈모인들을 위한 익명 기반 공감 커뮤니티 앱으로, AI 기반 이미지 분석을 통해 탈모 상태를 진단하고 맞춤형 정보를 제공하며, 유쾌한 위로와 소통이 가능한 웹+앱 통합 서비스입니다.',
    ],
    projectGoals: [
      '익명 기반 공감 커뮤니티 구축: 탈모에 대한 민감한 고민을 익명으로 질문하고 투표할 수 있는 안전한 공간 제공',
      '탈모 단계별 맞춤 정보 제공: 사용자 분석을 통해 탈모 단계, 지역, 성별에 맞는 질문·투표·추천 콘텐츠 제공',
      '유쾌한 위로와 소통: 탈모라는 무거운 주제를 유머와 공감으로 풀어가는 커뮤니티 지향',
      '지역 기반 병원 정보와 후기 공유: 공공데이터 + 사용자 후기를 통한 병원 정보 제공으로 실제적인 도움 연결',
    ],
    features: [
      '회원가입 / 로그인: 자체 회원가입, 다중 SNS 로그인, 실시간 유효성 검사, 이메일 인증 시스템',
      '투표 기능: 랜덤 질문 제공, 4지선다 이미지 투표, 중복 투표 방지, 실시간 AJAX 처리',
      '탈모 테스트 기능: Teachable Machine 활용, 5단계 탈모 진단, 실시간 이미지 분석',
      '탈모 병원 찾기: 현재 위치 기반 검색, 카카오 지도 연동, 길찾기 연동',
      '포인트 시스템 & 오늘의 운세: 포인트 적립/사용, 랜덤 운세 제공',
      '포인트샵 시스템: 상품 구매, 재고 관리, 관리자 기능',
    ],
    projectStructure: {
      title: '사용자 플로우',
      description: '회원가입부터 탈모 진단, 커뮤니티 참여까지의 전체적인 사용자 경험 흐름',
    },
    databaseDesign: {
      description: '모갓슈 서비스 운영을 위한 데이터베이스 구조 설계',
      features: [
        '회원 관리 테이블: 자체 회원, SNS 연동 회원 정보 통합 관리',
        '커뮤니티 테이블: 익명 질문, 투표 데이터, 탈모 테스트 사진 관리',
        '포인트 시스템: 포인트 적립/사용 내역, 출석체크 기록 관리',
        'AI 분석 결과: 탈모 진단 결과 및 확률 데이터 저장',
        '지역 정보: 병원 위치, 사용자 지역 기반 맞춤 서비스',
      ],
    },
    aiModelStructure: {
      title: 'AI 모델 구조',
      description: 'Teachable Machine 기반 탈모 진단 모델의 학습 및 배포 구조',
      features: [
        '데이터 수집: Google Dataset, 한국인 탈모 갤러리, Version 증강 이미지',
        '모델 학습: 5단계 탈모 분류 + 예외 처리 (손, 얼굴, 문서, 기타)',
        '데이터 증강: Albumentations를 통한 7배 데이터 확장',
        '모델 배포: JavaScript 모델로 변환하여 클라이언트 실시간 처리',
        '정확도 향상: OpenCV 전처리 + 다양한 각도/조명 조건 학습',
      ],
    },
    mainFeatures: {
      membershipLogin: {
        title: '회원가입 / 로그인',
        description: '탈모라는 민감한 주제의 특성상 사용자 신뢰도 확보를 위해 철저한 보안과 편의성을 동시에 제공',
        features: [
          '자체 회원가입: 강력한 비밀번호 정책과 이메일 인증으로 보안성 강화',
          '다중 SNS 로그인: 카카오, 네이버, 구글 OAuth2 연동으로 접근성 향상',
          '실시간 유효성 검사: Ajax 기반 중복체크로 즉각적인 피드백 제공',
          '이메일 인증 시스템: 3분 타이머와 함께 randomUUID 6자리 인증번호 발송',
          '계정 복구: 이메일을 통한 ID/PW 찾기로 사용자 편의성 증대',
        ],
        technicalDetails: [
          '비밀번호 보안: 8자리 이상, 영문+숫자+대문자+특수문자+연속숫자 금지',
          'Spring Security + OAuth2: 통합 인증 시스템',
          'BCrypt 암호화: 비밀번호 해시 처리',
          '포인트 인센티브: 회원가입 300p, 출석체크 10p 지급으로 참여 유도',
          '@Async 비동기 처리: 이메일 전송 시 사용자 대기시간 최소화',
        ],
      },
      votingSystem: {
        title: '투표 기능',
        description: '익명 기반 탈모 관련 투표 시스템',
        votingModule: {
          title: '투표 시스템 (Voting Module)',
          features: [
            '랜덤 질문 제공: 사용자가 아직 투표하지 않은 공개 질문 중 무작위 선택',
            '4지선다 이미지 투표: Firebase Storage URL 기반 탈모 진단 사진 4개 중 선택',
            '중복 투표 방지: DB 제약조건으로 동일 질문에 대한 중복 투표 차단',
            '실시간 AJAX 처리: 페이지 새로고침 없는 부드러운 투표 경험',
            '권한 기반 접근제어: USER 권한만 투표 가능, ADMIN은 투표 제한',
          ],
          technicalDetails: [
            '투표 상태 동적 계산: 현재 시간 기준으로 "보류/진행중/종료" 실시간 판단',
            '이미지 경로 검증: Firebase Storage URL과 상대경로 자동 변환',
            '트랜잭션 보장: @Transactional로 투표 데이터 일관성 확보',
          ],
        },
        questionManagement: {
          title: '질문 관리 시스템 (Question Management)',
          features: [
            '질문 라이프사이클 관리: 생성 → 공개/비공개 → 투표기간 설정 → 자동 아카이빙',
            '투표 기간 자동화: 스케줄러 기반 상태 변경 (보류 → 진행중 → 종료)',
            '아카이빙 시스템: 종료된 질문을 completed_question 테이블로 자동 이동',
            '통합 검색: 키워드, 공개상태, 생성일, 투표일 기반 다중 조건 검색',
          ],
        },
        votingStatistics: {
          title: '투표 통계 및 분석 (Voting Statistics)',
          features: [
            '다중 테이블 통합: active + completed 질문 테이블 UNION 조회',
          ],
          calculations: [
            '투표율: 총 투표수 / 전체 회원수 × 100',
            '참여율: 고유 투표자 수 / 전체 회원수 × 100',
            '최다득표율: 최다득표수 / 총 투표수 × 100',
            '참여자기준 투표율: 총 투표수 / 고유 투표자 수 × 100',
          ],
        },
        databaseDesign: {
          title: '데이터베이스 설계',
          questionTable: [
            'serial_number (PK): Q0001 형식 자동 증가',
            'voting_start_date/voting_end_date: 투표 기간 관리',
            'is_public: 공개/비공개 상태 제어',
          ],
          votingTable: [
            'serial_number: 질문 참조',
            'voter_id: 투표자 (USER 권한만)',
            'voted_id: 선택된 옵션/회원 ID',
            'selected_option: 선택한 옵션 (option1~4)',
          ],
        },
        securityAndOptimization: {
          title: '보안 및 검증 시스템',
          security: [
            'Spring Security 통합: Authentication 기반 사용자 식별',
            '권한별 접근제어: USER만 투표, ADMIN만 질문 관리',
            '세션 기반 중복 방지: 동일 세션 내 중복 투표 차단',
            '입력값 검증: 모든 파라미터 null/empty 체크',
          ],
          optimization: [
            '페이징 처리: 대용량 데이터 효율적 조회',
            '인덱스 활용: serial_number, voter_id 기반 빠른 검색',
            '스케줄러 최적화: 실행 주기별 작업 분산 (10분/1시간/일일)',
            '캐시 활용: 전체 회원 수 등 자주 조회되는 데이터 최적화',
          ],
          extensibility: [
            '모듈화 설계: Service Layer 분리로 기능별 독립성 확보',
            'Repository Pattern: 데이터 접근 로직 추상화',
            'DTO/Entity 분리: 계층 간 데이터 전송 최적화',
            '로깅 시스템: SLF4J 기반 상세 로그 추적',
          ],
        },
      },
      hairLossTest: {
        title: '탈모 테스트 기능',
        description: '전문적인 탈모 진단의 접근성을 높이기 위해 AI 기반 자가진단 서비스 제공',
        features: [
          'Teachable Machine 활용: Google AI 플랫폼으로 학습된 탈모 분류 모델 적용',
          '5단계 탈모 진단: 정상(0단계)부터 심각(4단계)까지 세분화된 진단',
          '실시간 이미지 분석: 업로드 즉시 JavaScript에서 모델 실행으로 빠른 결과 제공',
          '예외 이미지 필터링: 손, 얼굴, 문서 등을 별도 학습하여 오진단 방지',
          '확률 기반 결과: 각 단계별 확률을 시각적으로 표시하여 신뢰도 제공',
        ],
        technicalDetails: [
          '이미지 데이터 증강: Albumentations로 한 장당 7장 생성하여 모델 정확도 향상',
          '다양한 데이터셋: Google Dataset, Version, 한국인 탈모 갤러리 등 종합 수집',
          'OpenCV 전처리: 이미지 품질 향상 및 특징 추출',
          '브라우저 모델 실행: .js 형태로 변환하여 서버 부하 없는 클라이언트 처리',
          'FileReader API: 이미지 미리보기와 동시에 분석 준비',
        ],
      },
      hospitalFinder: {
        title: '탈모 병원 찾기',
        description: '탈모 진단 후 실제 치료로 연결하기 위해 지역 기반 병원 정보찾기 서비스 통합 제공',
        features: [
          '현재 위치 기반 검색: Geolocation API로 사용자 주변 탈모 전문병원 표시',
          '카카오 지도 연동: 정확한 위치 정보와 실시간 지도 데이터 활용',
          '차별화된 마커 표시: 내 위치(깃발)와 병원(파란 핀)으로 직관적 구분',
          '병원 상세 정보: 마커 클릭 시 인포윈도우로 병원명, 주소, 연락처 제공',
          '길찾기 연동: 현재 위치에서 선택 병원까지 경로 안내',
        ],
        technicalDetails: [
          '주소-좌표 변환: geocoder.addressSearch로 병원 주소를 지도 좌표로 변환',
          '위치 권한 처리: 위치 정보 제공 거부 시 대체 UI 및 안내 메시지',
          '마커 클러스터링: 동일 지역 다수 병원 시 그룹화로 지도 가독성 향상',
          '반응형 지도: 모바일과 데스크톱 환경에 최적화된 지도 크기 조절',
          '커스텀 오버레이: HTML 기반 말풍선으로 풍부한 병원 정보 표현',
        ],
      },
      pointSystem: {
        title: '포인트 시스템 & 오늘의 운세',
        description: '지속적인 서비스 참여를 유도하고 무거운 주제에 재미 요소를 더하기 위한 게이미피케이션',
        features: [
          '오늘의 운세: 10포인트로 랜덤 운세와 추천 아이템 확인하여 일상의 즐거움 제공',
          '다양한 포인트 적립: 회원가입(300p), 출석체크(10p), 투표 참여로 활동 장려',
          '포인트 내역 관리: 적립/사용 내역을 날짜별로 페이징 조회',
          '부족 시 안내: 포인트 부족 시 획득 방법 안내로 자연스러운 참여 유도',
          '탈모 진단 연계: 운세 확인 후 탈모 진단 페이지로 자연스러운 플로우 연결',
        ],
        technicalDetails: [
          'JPA 페이징: 포인트 내역을 페이지당 10개씩 효율적 조회',
          '포인트 트랜잭션: 적립/차감 시 이력 테이블 자동 기록',
          '세션 기반 중복 방지: 당일 출석체크 중복 실행 방지',
          'randomUUID 운세: 매번 다른 운세 결과로 재방문 동기 부여',
          '포인트 잔액 실시간 표시: 사용자 현재 보유 포인트 항상 확인 가능',
        ],
      },
      pointShop: {
        title: '포인트샵 시스템',
        description: '사용자가 보유한 포인트로 상품을 구매하고, 포인트와 상품 정보를 효율적으로 관리하는 시스템',
        userFeatures: [
          '상품 구매: 보유한 포인트로 상품을 구매',
          '상품 상세보기: 상품 이미지, 가격, 설명 확인 후 구매 결정',
          '상품구매내역 조회: 이전에 구매한 상품 정보 확인',
          '결제 완료 페이지: 구매 완료 후 결제 내역 확인',
          '재고 소진(품절): 재고가 소진된 상품은 구매 불가, 품절 상태 표시',
        ],
        adminFeatures: [
          '상품관리: 상품 등록, 수정, 삭제(이미지, 가격, 설명, 카테고리 관리)',
          '재고 관리: 상품 재고 실시간 관리',
          '통계 및 분석: 상품 판매 현황 및 사용자 활동 데이터 분석',
          '상품 카테고리 관리: 상품을 다양한 카테고리로 분류 및 관리',
          '포인트 차감 관리: 사용자의 포인트 차감 관리',
        ],
        technicalDetails: [
          'JPA 페이징: 포인트 상품 및 구매내역을 페이지당 10개씩 효율적으로 조회',
          '포인트 트랜잭션 관리: 포인트 차감 트랜잭션을 안전하게 처리하고, 낙관적 락(@Version) 사용',
          '재고 동시성 제어: 비관적 락을 활용해 상품의 재고를 동시성 문제 없이 관리',
          'Firebase 이미지 관리: 상품 이미지는 Firebase Storage에 저장 및 관리',
          '카테고리별 상품 조회: 사용자가 원하는 카테고리에서 상품을 필터링하여 쉽게 조회 가능',
        ],
      },
    },
    skills: ['Spring Boot', 'Java', 'JPA', 'Spring Security', 'MySQL', 'JavaMailSender', 'HTML/CSS/JavaScript', 'Thymeleaf', 'Ajax', 'Python', 'Teachable Machine', 'OpenCV', 'Albumentations', 'AWS EC2', 'GitHub Actions', 'Git', 'Gradle'],
    techStack: {
      Backend: ['Spring Boot', 'Java', 'JPA', 'Spring Security', 'MySQL', 'JavaMailSender'],
      Frontend: ['HTML/CSS/JavaScript', 'Thymeleaf', 'Ajax', 'Windows 95 스타일 UI'],
      AI_Analysis: ['Python', 'Teachable Machine', 'OpenCV', 'Albumentations'],
      Deployment: ['AWS EC2', 'GitHub Actions', 'Git', 'Gradle'],
      Development_Tools: ['STS4 (Spring Tool Suite 4)', 'DBeaver', 'Excel'],
    },
    keyTechnicalFeatures: [
      {
        title: 'Teachable Machine을 활용한 AI 탈모 진단',
        description: 'Google Teachable Machine으로 학습된 모델을 JavaScript에서 로드하여 실시간 탈모 이미지 분석을 수행합니다. 5단계 탈모 분류와 예외 이미지(손, 얼굴, 문서) 필터링 기능을 제공하며, 업로드 즉시 분석 결과를 확률과 함께 시각적으로 표시합니다.',
      },
      {
        title: 'OAuth2 기반 다중 SNS 로그인',
        description: 'Spring Security OAuth2를 활용하여 카카오, 네이버, 구글 로그인을 통합 지원합니다. 각 제공자별 동의항목을 처리하고, 기존 회원 여부에 따라 로그인/회원가입 페이지로 분기 처리하며, provider와 providerId를 통한 계정 연동을 구현했습니다.',
      },
      {
        title: '익명 기반 투표 시스템',
        description: '사용자가 투표하지 않은 공개 질문 중 랜덤으로 선택하여 제공하고, 4개의 탈모 사진 중 선택하여 투표할 수 있는 시스템입니다. 중복 투표 방지, Windows 95 스타일 UI, 키보드 단축키 지원 등 사용자 친화적인 기능을 포함합니다.',
      },
      {
        title: '실시간 이메일 인증 시스템',
        description: 'JavaMailSender와 @Async를 활용하여 회원가입, ID/PW 찾기 시 실시간 이메일 인증을 처리합니다. randomUUID로 6자리 인증번호를 생성하고, 3분 타이머와 함께 인증 UI를 동적으로 생성하여 사용자 경험을 최적화했습니다.',
      },
    ],
    apis: [
      '카카오 지도 API - 탈모 병원 위치 검색 및 길찾기',
      'OAuth2 API - 카카오, 네이버, 구글 소셜 로그인',
      'JavaMail API - 회원가입 및 비밀번호 찾기 이메일 인증',
      'Teachable Machine API - AI 기반 탈모 이미지 분석',
      'Geolocation API - 사용자 현재 위치 확인',
    ],
    teamMembers: [
      { name: '서하나', role: '팀원', portfolio: 'https://github.com/HanaSeoo' },
      { name: '최승필', role: '팀원', portfolio: 'https://notion-portfolio-link.com' },
      { name: '유태종', role: '팀원', portfolio: 'https://github.com/yutaejong' },
    ],
    challenges: 'AI 딥러닝을 활용하게 되었는데 AI 모델에 학습을 시킬 때 탈모 사진이 아닌 것에 대한 예외처리를 하는 것이 너무 힘들었습니다. 아무리 예외처리를 학습을 시켜도 먼치킨 도넛, 강아지 정수리, 햄스터 정수리 등을 완벽하게 예외처리를 할 수 없다는 것을 알게 되었습니다. 따라서 딥러닝에 대해 공부를 하던 중 혼동행렬이란걸 알게 되었고 체계적으로 혼동행렬을 작성해 가며 AI 진단 결과의 정확도를 정해놓고 그에 맞게 negative, positive로 나누어 진단 정확도가 70%이상이 나오도록 구성하였습니다. 이러한 과정을 통해서 파이선을 활용한 이미지 증강법 딥러닝의 기초 등을 학습할 수 있었습니다.',
    outcome: 'Spring Boot와 AI 모델을 결합한 혁신적인 서비스 개발 경험을 통해 풀스택 개발 역량을 크게 향상시켰습니다. Teachable Machine과 OpenCV를 활용한 실시간 이미지 분석 시스템 구축으로 AI 기술 융합 능력을 기를 수 있었고, OAuth2 기반 다중 SNS 로그인과 이메일 인증 시스템 구현으로 현대적인 웹 서비스 보안 기술을 습득했습니다. 또한 사회적 가치를 담은 서비스 기획부터 AI 모델 학습, 배포까지의 전 과정을 경험하며 문제 해결 능력과 사용자 중심 사고를 기를 수 있었습니다.',
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
                  상세보기 (GitHub)
                </a>
              )}
              {project.gitRepository && (
                <a href={project.gitRepository} target="_blank" rel="noopener noreferrer" className="notion-link-btn">
                  GitHub Repository
                </a>
              )}
            </div>
              )}
            <div className="project-actions">
              <a href="https://mogatshoo.onrender.com/" className="notion-link-btn">
                웹사이트페이지</a>
            </div>
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
              {project.projectOverview.nameOrigin && (
                <div className="overview-item">
                  <strong>명칭 유래:</strong> {project.projectOverview.nameOrigin}
                </div>
              )}
              {project.projectOverview.gitRepository && (
                <div className="overview-item">
                  <strong>GitHub:</strong>
                  <a href={project.projectOverview.gitRepository} target="_blank" rel="noopener noreferrer">
                    {project.projectOverview.gitRepository}
                  </a>
                </div>
              )}
            </div>
          </section>
        )}

        {/* 프로젝트 소개 */}
        <section className="project-background">
          <h2>프로젝트 소개</h2>
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


        {/* 시스템 아키텍처 */}
        <section className="system-architecture">
          <h2>시스템 아키텍처</h2>
          <img class="detailImage" src="/image/projectImage/mogatshoo/1-5.png" alt="프로젝트 이미지"></img>
          <p>프론트엔드, 백엔드, AI 모델, 외부 API 간의 통합 구조</p>
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

        {/* 데이터베이스 설계 */}
        {project.databaseDesign && (
          <section className="database-design">
            <h2>Database ERD</h2>
            <img class="detailImage" src="/image/projectImage/mogatshoo/1-1.png" alt="프로젝트 이미지"></img>
            <p>{project.databaseDesign.description}</p>
            <ul>
              {project.databaseDesign.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>
        )}

        {/* AI 모델 구조 */}
        {project.aiModelStructure && (
          <section className="ai-model-structure">
            <h2>{project.aiModelStructure.title}</h2>
            <img class="detailImage" src="/image/projectImage/mogatshoo/1-2.jpg" alt="프로젝트 이미지"></img>
            <p>{project.aiModelStructure.description}</p>
            <ul>
              {project.aiModelStructure.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
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
                {feature.userFeatures && (<div className="sub-feature"><h4>주요 기능 (유저 기능)</h4><ul>{feature.userFeatures.map((item, index) => (<li key={index}>{item}</li>))}</ul></div>)}
                {feature.adminFeatures && (<div className="sub-feature"><h4>주요 기능 (관리자 기능)</h4><ul>{feature.adminFeatures.map((item, index) => (<li key={index}>{item}</li>))}</ul></div>)}
                {feature.technicalDetails && (<div className="feature-details"><h4>기술적 특징</h4><ul>{feature.technicalDetails.map((detail, index) => (<li key={index}>{detail}</li>))}</ul></div>)}
                {feature.votingModule && (<div className="sub-feature"><h4>{feature.votingModule.title}</h4><ul>{feature.votingModule.features.map((item, index) => (<li key={index}>{item}</li>))}</ul>{feature.votingModule.technicalDetails && (<div className="feature-details"><h5>기술적 특징</h5><ul>{feature.votingModule.technicalDetails.map((detail, index) => (<li key={index}>{detail}</li>))}</ul></div>)}</div>)}
                {feature.questionManagement && (<div className="sub-feature"><h4>{feature.questionManagement.title}</h4><ul>{feature.questionManagement.features.map((item, index) => (<li key={index}>{item}</li>))}</ul></div>)}
                {feature.votingStatistics && (<div className="sub-feature"><h4>{feature.votingStatistics.title}</h4><ul>{feature.votingStatistics.features.map((item, index) => (<li key={index}>{item}</li>))}</ul>{feature.votingStatistics.calculations && (<div className="calculations"><h5>세분화된 지표 계산</h5><ul>{feature.votingStatistics.calculations.map((calc, index) => (<li key={index}>{calc}</li>))}</ul></div>)}</div>)}
                {feature.databaseDesign && (<div className="sub-feature"><h4>{feature.databaseDesign.title}</h4>{feature.databaseDesign.questionTable && (<><h5>핵심 테이블 구조 - 질문 테이블</h5><img class="detailImage" src="/image/projectImage/mogatshoo/1-3.jpg" alt="프로젝트 이미지"></img><ul>{feature.databaseDesign.questionTable.map((item, index) => (<li key={index}>{item}</li>))}</ul></>)}{feature.databaseDesign.votingTable && (<><h5>투표 테이블</h5><ul>{feature.databaseDesign.votingTable.map((item, index) => (<li key={index}>{item}</li>))}</ul></>)}</div>)}
                {feature.securityAndOptimization && (<div className="sub-feature"><h4>{feature.securityAndOptimization.title}</h4><h5>다층 보안 구조</h5><ul>{feature.securityAndOptimization.security.map((item, index) => (<li key={index}>{item}</li>))}</ul><h5>성능 최적화</h5><ul>{feature.securityAndOptimization.optimization.map((item, index) => (<li key={index}>{item}</li>))}</ul><h5>확장성 고려사항</h5><ul>{feature.securityAndOptimization.extensibility.map((item, index) => (<li key={index}>{item}</li>))}</ul></div>)}
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
        {/* 도전과제와 성과 */}
        <section className="challenges-outcome">
          <div className="challenges">
            <h2>troubleshooting</h2>
            <img class="detailImage" src="/image/projectImage/mogatshoo/1-4.jpg" alt="프로젝트 이미지"></img>
            <p>{project.challenges}</p>
          </div>
          <div className="outcome">
            <h2>성과 및 배운점</h2>
            <p>{project.outcome}</p>
          </div>
        </section>

        {/* 팀 멤버 */}
        <section className="team-members">
          <h2>팀 멤버</h2>
          <p><strong>종로 itkgbank 핀테크 풀스택 수강자</strong></p>
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

export default MogatshooProjectPage;