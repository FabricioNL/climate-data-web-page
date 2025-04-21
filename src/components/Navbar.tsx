//import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BarChart2, Users, FileText } from 'lucide-react';

const Navbar = ({ currentLanguage, onLanguageChange }) => {
  const location = useLocation();

  return (
    <nav className="border border-green-500 rounded-full px-4 py-2 bg-white/90 backdrop-blur-sm flex items-center justify-between mb-8">
      <div className="flex gap-6">
        <Link
          to="/"
          className={`flex items-center gap-2 transition-colors ${
            location.pathname === '/' ? 'text-green-600' : 'hover:text-green-600'
          }`}
        >
          <Home size={18} />
          <span>{currentLanguage === 'en' ? 'Home' : 'Início'}</span>
        </Link>
        <Link
          to="/datainsights"
          className={`flex items-center gap-2 transition-colors ${
            location.pathname === '/datainsights' ? 'text-green-600' : 'hover:text-green-600'
          }`}
        >
          <BarChart2 size={18} />
          <span>{currentLanguage === 'en' ? 'Data Insights' : 'Insights de Dados'}</span>
        </Link>
        <Link
          to="/about"
          className={`flex items-center gap-2 transition-colors ${
            location.pathname === '/about' ? 'text-green-600' : 'hover:text-green-600'
          }`}
        >
          <Users size={18} />
          <span>{currentLanguage === 'en' ? 'About Us' : 'Sobre Nós'}</span>
        </Link>
        <Link
          to="/releases"
          className={`flex items-center gap-2 transition-colors ${
            location.pathname === '/releases' ? 'text-green-600' : 'hover:text-green-600'
          }`}
        >
          <FileText size={18} />
          <span>{currentLanguage === 'en' ? 'Release Notes' : 'Notas de Lançamento'}</span>
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <span>{currentLanguage === 'en' ? 'English' : 'Português'}</span>
        <div
          className="w-12 h-6 bg-green-500 rounded-full flex items-center p-1 cursor-pointer"
          onClick={onLanguageChange}
        >
          <div
            className={`w-4 h-4 bg-white rounded-full transition-transform ${
              currentLanguage === 'en' ? 'translate-x-0' : 'translate-x-6'
            }`}
          ></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;