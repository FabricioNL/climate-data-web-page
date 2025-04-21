
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import DataInsights from './pages/DataInsights';
import AboutUs from './pages/AboutUs';
import ReleaseNotes from './pages/ReleaseNotes';
import Home from './pages/Home';

function App() {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'pt' : 'en'));
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-7xl mx-auto">
          <Navbar currentLanguage={language} onLanguageChange={handleLanguageChange} />
          <Routes>
            <Route path="/" element={<Home language={language} />} />
            <Route path="/about" element={<AboutUs language={language} />} />
            <Route path="/releases" element={<ReleaseNotes language={language} />} />
            <Route path="/datainsights" element={<DataInsights/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
