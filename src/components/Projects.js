import React from 'react';
import { Link } from 'react-router-dom';


function Projects() {
  return (
    <section className="featured-projects" id="projects">
      <div className="container">
        <h2>주요 프로젝트</h2>
        <div className="projects-grid">
          {/* 1 번째 프로젝트 */}
          <Link to="/project/mogatshoo" className="project-card">
            <div className="project-image">
              <img src="/image/mogatshoo.png" alt="프로젝트" />
            </div>
            <div className="project-info">
              <h3>탈모인들을 위한한 웹 프로젝트</h3>
              <p>딥러닝과 풀스택 개발을 경험한 최종 프로젝트</p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">Spring Boot</span>
                <span className="tag">Deep Learning</span>
              </div>
            </div>
          </Link>
          
          {/* 2 번째 프로젝트 */}
          <Link to="/project/urbanVillage" className="project-card">
            <div className="project-image">
              <img src="/image/Urban&VillageLogo.png" alt="프로젝트" />
            </div>
            <div className="project-info">
              <h3>숙소 예약 시스템</h3>
              <p>API 연동과 예약 시스템 중복 방지 로직 구현</p>
              <div className="project-tags">
                <span className="tag">Spring</span>
                <span className="tag">API</span>
              </div>
            </div>
          </Link>
          

          {/* 3 번째 프로젝트 */}
          <Link to="/project/portfolio" className="project-card">
            <div className="project-image">
              <img src="/image/profile.png" alt="프로젝트" />
            </div>
            <div className="project-info">
              <h3>개인 포트폴리오 웹사이트</h3>
                <p>React를 활용한 모던하고 반응형인 개인 포트폴리오</p>
                  <div className="project-tags">
                    <span className="tag">React</span>
                    <span className="tag">JavaScript</span>
                    <span className="tag">CSS3</span>
                    <span className="tag">Netlify</span>
                  </div>
            </div>
          </Link>
          {/* 4 번째 프로젝트 */}
          <Link to="/project/abcShopping" className="project-card">
            <div className="project-image">
              <img src="/image/projectImage/abcShopping/3-3.jpg" alt="프로젝트" />
            </div>
            <div className="project-info">
              <h3>쇼핑몰 웹 프로젝트</h3>
              <p>Java, Eclipse, Oracle, SceneBuilder를 활용한 첫 번째 프로젝트</p>
              <div className="project-tags">
                <span className="tag">Java</span>
                <span className="tag">Eclipse</span>
                <span className="tag">Oracle</span>
                <span className="tag">SceneBuilder</span>
              </div>
            </div>
          </Link>
          
        </div>
      </div>
    </section>
  );
}

export default Projects;