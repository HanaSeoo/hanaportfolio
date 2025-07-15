import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import MySkills from './pages/MySkills';
import ScrollToTop from './components/ScrollToTop';
import MogatshooProjectPage from './pages/MogatshooProjectPage';
import UrbanVillageProjectPage from './pages/UrbanVillageProjectPage';
import PortfolioProjectPage from './pages/PortfolioProjectPage';
import ABCMallProjectPage from './pages/ABCMallProjectPage';


function App() {
   const [showScrollTop, setShowScrollTop] = useState(false);

  // 전역 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setShowScrollTop(scrollTop > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 맨 위로 스크롤 함수
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <Router>
      <ScrollToTop />
      <div className="portfolio">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/mogatshoo" element={<MogatshooProjectPage />} />
          <Route path="/project/urbanVillage" element={<UrbanVillageProjectPage />} />
          <Route path="/project/portfolio" element={<PortfolioProjectPage />} />
          <Route path="/project/abcShopping" element={<ABCMallProjectPage />} />
          <Route path="/skills" element={<MySkills />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;