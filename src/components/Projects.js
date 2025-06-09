import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/ProjectData';

function Projects() {
  return (
    <section className="featured-projects" id="projects">
      <div className="container">
        <h2>주요 프로젝트</h2>
        <div className="projects-grid">
          {/* 1 번째 프로젝트 */}
          <Link to="/project/1" className="project-card">
            <div className="project-image">
              {projects[1]?.thumbnail ? (
                <img src={projects[1].thumbnail} alt="핀테크 프로젝트" />
              ) : (
                <div className="placeholder-project-image">이미지 준비중</div>
              )}
            </div>
            <div className="project-info">
              <h3>탈모진단 웹 프로젝트</h3>
              <p>딥러닝과 풀스택 개발을 경험한 최종 프로젝트</p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">Spring Boot</span>
                <span className="tag">Deep Learning</span>
              </div>
            </div>
          </Link>
          
          {/* 2 번째 프로젝트 */}
          <Link to="/project/2" className="project-card">
            <div className="project-image">
              {projects[2]?.thumbnail ? (
                <img src={projects[2].thumbnail} alt="숙소 예약 시스템" />
              ) : (
                <div className="placeholder-project-image">이미지 준비중</div>
              )}
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
<Link to="/project/3" className="project-card">
  <div className="project-image">
    {projects[3]?.thumbnail ? (
      <img src={projects[3].thumbnail} alt="개인 포트폴리오 웹사이트" />
    ) : (
      <div className="placeholder-project-image">이미지 준비중</div>
    )}
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
          <Link to="/project/4" className="project-card">
            <div className="project-image">
              {projects[4]?.thumbnail ? (
                <img src={projects[4].thumbnail} alt="쇼핑몰 웹 프로젝트" />
              ) : (
                <div className="placeholder-project-image">이미지 준비중</div>
              )}
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