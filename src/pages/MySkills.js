import React from 'react';

function MySkills() {
 
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <h2 className="skills-main-title">교육세부내용</h2>
        <div className="skills-header">
          <div className="course-info">
            <h3>2024.12.16 ~ 2025.06.23</h3>
            <h4>핀테크 서비스를 위한 풀스택 개발자 양성 과정</h4>
            <p>KG아이티뱅크</p>
          </div>
        </div>
        
        <div className="skills-content">
          {/* 기초 개발 프로그래밍 */}
          <div className="skill-category">
            <h3 className="category-title">기초 개발 프로그래밍 지식</h3>
            <div className="skill-items">
              <div className="skill-item">
                <h4>리눅스</h4>
                <p>리눅스의 기초와 웹서버 구축을 수강함</p>
              </div>
              <div className="skill-item">
                <h4>자바 JAVA</h4>
                <p>자바의 기초와 각종 언어와 이클립스를 활용한 실습</p>
              </div>
              <div className="skill-item">
                <h4>Oracle</h4>
                <p>데이터베이스를 이클립스와 연결하여 정보를 저장하며 업데이트하는 것을 진행</p>
              </div>
            </div>
          </div>

          {/* Java 응용 */}
          <div className="skill-category">
            <h3 className="category-title">Java 응용</h3>
            <div className="skill-items">
              <div className="skill-item">
                <h4>자바 & SceneBuilder</h4>
                <p>자바를 이용하여 SceneBuilder로 페이지를 만들어보는 실습을 진행</p>
              </div>
              <div className="skill-item">
                <h4>자바를 이용한 프로젝트 1</h4>
                <p>이클립스와 SceneBuilder를 사용하여 쇼핑몰 웹을 구현하는 프로젝트를 진행</p>
              </div>
            </div>
          </div>

          {/* 웹 개발 */}
          <div className="skill-category">
            <h3 className="category-title">웹 개발</h3>
            <div className="skill-items">
              <div className="skill-item">
                <h4>HTML</h4>
                <p>HTML 기초 문법 학습 및 Bootstrap 활용 실습</p>
              </div>
              <div className="skill-item">
                <h4>자바 스크립트 & CSS</h4>
                <p>자바 스크립트의 기본과 CSS를 통한 여러 예제를 통한 실습을 진행</p>
              </div>
              <div className="skill-item">
                <h4>jQuery</h4>
                <p>jQuery는 JavaScript와 완벽히 해석하여 사용하기 때문에 JavaScript를 사용하고 효율적인 부분에서 jQuery로 대체하여 사용</p>
              </div>
              <div className="skill-item">
                <h4>Node.js</h4>
                <p>노드의 기초와 jQuery를 변형한 문제로 예제를 만들고 실습</p>
              </div>
            </div>
          </div>

          {/* 웹 프레임워크 */}
          <div className="skill-category">
            <h3 className="category-title">웹 프레임워크</h3>
            <div className="skill-items">
              <div className="skill-item">
                <h4>JSP</h4>
                <p>JSP의 기초와 서블릿을 활용한 웹페이지를 구축하고 여러 예제를 실습</p>
              </div>
              <div className="skill-item">
                <h4>SpringFramework</h4>
                <p>SpringFramework를 통해 여태 동안 배웠던 것을 기반으로 실제 웹페이지로 데이터를 주고받고 변환하는 툴을 익히며 실습</p>
              </div>
              <div className="skill-item">
                <h4>웹 프로젝트2</h4>
                <p>스프링프레임워크와 다양한 API를 활용한 프로젝트를 구상</p>
              </div>
            </div>
          </div>

          {/* Spring Boot와 MySQL */}
          <div className="skill-category">
            <h3 className="category-title">Spring Boot와 MySQL</h3>
            <div className="skill-items">
              <div className="skill-item">
                <h4>Spring Boot</h4>
                <p>STS4를 활용한 Spring Boot 프레임워크 학습 및 실습</p>
              </div>
              <div className="skill-item">
                <h4>Spring Security</h4>
                <p>웹 애플리케이션 보안 구현을 위한 Spring Security 프레임워크 학습</p>
              </div>
              <div className="skill-item">
                <h4>MySQL</h4>
                <p>관계형 데이터베이스 MySQL 서버 연결 및 기본 쿼리 문법 학습</p>
              </div>
              <div className="skill-item">
                <h4>JPA</h4>
                <p>객체 관계 매핑(ORM)을 위한 JPA(Java Persistence API) 활용 실습</p>
              </div>
              <div className="skill-item">
                <h4>스프링부트를 활용한 프로젝트 3</h4>
                <p>Spring Boot 기반의 웹 애플리케이션 개발 프로젝트 진행</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MySkills;