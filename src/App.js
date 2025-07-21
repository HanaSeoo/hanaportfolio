import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import MySkills from './pages/MySkills';
import ScrollToTop from './components/ScrollToTop';
import MogatshooProjectPage from './pages/MogatshooProjectPage';
import UrbanVillageProjectPage from './pages/UrbanVillageProjectPage';
import PortfolioProjectPage from './pages/PortfolioProjectPage';
import ABCMallProjectPage from './pages/ABCMallProjectPage';

function App() {
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