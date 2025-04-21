
import React from 'react';

const Home = ({ language }) => {
  return (
    <div className="bg-gradient-to-br from-green-300 via-blue-200 to-blue-500 min-h-screen flex flex-col items-center text-white">
      {/* Hero Section */}
      <div className="text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {language === 'en' ? 'Welcome to São Paulo Climate Insights' : 'Bem-vindo ao Insights Climáticos de São Paulo'}
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          {language === 'en'
            ? 'Discover data-driven insights about São Paulo’s climate. Explore trends, patterns, and solutions for a sustainable future.'
            : 'Descubra insights baseados em dados sobre o clima de São Paulo. Explore tendências, padrões e soluções para um futuro sustentável.'}
        </p>
        <a
          href="/"
          className="px-6 py-3 bg-white text-green-600 font-semibold rounded-full shadow-lg hover:bg-green-100 transition"
        >
          {language === 'en' ? 'Get Started' : 'Começar'}
        </a>
      </div>
      
      {/* Highlights Section */}
      <div className="bg-white text-gray-800 w-full py-16 px-8 md:px-16 rounded-t-3xl shadow-xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-4">
              {language === 'en' ? 'Why Climate Insights?' : 'Por que Insights Climáticos?'}
            </h2>
            <p>
              {language === 'en'
                ? 'Understand how climate impacts urban life and development.'
                : 'Entenda como o clima impacta a vida urbana e o desenvolvimento.'}
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-4">
              {language === 'en' ? 'Our Data Sources' : 'Nossas Fontes de Dados'}
            </h2>
            <p>
              {language === 'en'
                ? 'Leveraging reliable data from trusted organizations.'
                : 'Aproveitando dados confiáveis de organizações renomadas.'}
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-4">
              {language === 'en' ? 'Take Action' : 'Tome Ação'}
            </h2>
            <p>
              {language === 'en'
                ? 'Learn how to contribute to São Paulo’s sustainable future.'
                : 'Saiba como contribuir para um futuro sustentável em São Paulo.'}
            </p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="mt-auto py-6 text-center text-sm bg-gray-900 text-gray-300 w-full">
        {language === 'en'
          ? 'Built with care for a better understanding of São Paulo’s climate.'
          : 'Feito com carinho para uma melhor compreensão do clima de São Paulo.'}
      </footer>
    </div>
  );
};

export default Home;
