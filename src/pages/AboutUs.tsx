import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AboutUs = ({ language }) => {
  const [expandedCard, setExpandedCard] = useState(null);

  const cards = [
    {
      id: 'author',
      title: language === 'en' ? 'About the Author' : 'Sobre o Autor',
      content: language === 'en'
        ? `My name is Fabricio. I have a degree in Computer Engineering and a strong passion for sustainability tech, especially in how we can use technology to improve life on Earth.

During my studies, I worked on various climate tech projects, such as thermal comfort in informal settlements and flood detection through satellite imagery.

I currently work on this project in my spare time and hope it can, in some way, help make the world a better place.`
        : `Meu nome é Fabricio, eu sou graduado em engenharia da computação e tenho uma forte paixão por sustentabilidade tech, especialmente em como podemos utilizar a tecnologia para melhorar a vida no mundo.

Durante a graduação pude trabalhar em diversos projetos de climate tech, como conforto térmico em favelas e também identificação de alagamentos através de imagens de satélite.

Hoje eu atuo nesse projeto nas minhas horas vagas e espero que de algum modo ele possa ajudar o mundo a ser um lugar melhor.`,
      image: 'src/imgs/author_photo.jpeg',
      linkedin: 'https://www.linkedin.com/in/fabricio-neri/'
    },
    {
      id: 'objectives',
      title: language === 'en' ? 'Project Objectives' : 'Objetivos do Projeto',
      content: language === 'en'
        ? `The goal of this project is to ensure data is truly public and accessible, enabling research and debate about the current challenges we face.`
        : `Através desse projeto, o objetivo é que dados sejam realmente públicos e seu acesso democratizado, tornando possível o desenvolvimento de pesquisas e debates sobre a atual situação que lidamos.`
    },
    {
      id: 'methodology',
      title: language === 'en' ? 'Methodology' : 'Metodologia',
      content: language === 'en'
        ? `To collect data, a robot was developed that accesses the site and saves it daily in a database, enabling the dashboard to update for users every day.`
        : `Para obtenção dos dados, foi desenvolvido um robô que acessa o site e salva diariamente em uma base de dados, tornando possível a atualização diária do dashboard para usuários.`
    },
    {
      id: 'data_sources',
      title: language === 'en' ? 'Data Sources' : 'Fontes de Dados',
      content: language === 'en'
        ? `Currently, all data is obtained from the CGE website (add link). They are responsible for acquiring data and reporting where floods are occurring in real-time. There is a challenge in obtaining historical data from the site, which is why this project was created.`
        : `Atualmente, todos os dados são retirados do site do CGE (adicionar link). Ele é responsável por todo o processo de obter os dados e informar onde estão ocorrendo os alagamentos em tempo real. Existe um desafio em obter a fonte histórica dos dados através do site, por isso que esse projeto foi criado.`
    }
  ];

  const collaborators = [
    {
      name: 'Jean Silas',
      image: 'src/imgs/jean_silas.jpeg'
    },
    {
      name: 'Guilherme Fontana ',
      image: 'src/imgs/guilherme_fontana.jpeg'
    },
    {
      name: 'Igor Montagner',
      image: 'src/imgs/igor_montagner.jpeg'
    }
  ];

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        {language === 'en' ? 'About Us' : 'Sobre Nós'}
      </h1>
      <AnimatePresence mode="wait">
        {expandedCard ? (
          <motion.div
            key={expandedCard}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="bg-white shadow-lg rounded-lg p-6"
          >
            {cards
              .filter((card) => card.id === expandedCard)
              .map((card) => (
                <div key={card.id}>
                  <h2 className="text-2xl font-semibold mb-4">{card.title}</h2>
                  {card.image && (
                    <div className="flex flex-col items-center mb-4">
                      <img
                        src={card.image}
                        alt={language === 'en' ? 'Author Photo' : 'Foto do Autor'}
                        className="w-32 h-32 rounded-full mb-2"
                      />
                      <a
                        href={card.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-500 hover:text-blue-700 font-semibold"
                      >
                        <img
                          src="src/imgs/linkedin_icon.png"
                          alt="LinkedIn"
                          className="w-6 h-6 mr-2"
                        />
                        {language === 'en' ? 'LinkedIn' : 'LinkedIn'}
                      </a>
                    </div>
                  )}

                  <p className="text-gray-700 whitespace-pre-wrap mb-6">{card.content}</p>

                  {card.id === 'author' && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-4 text-center">
                        {language === 'en' ? 'Past Collaborators' : 'Colaboradores Anteriores'}
                      </h3>
                      <div className="flex gap-4 flex-wrap justify-center">
                        {collaborators.map((collab, index) => (
                          <div key={index} className="text-center">
                            <img
                              src={collab.image}
                              alt={collab.name}
                              className="w-20 h-20 rounded-full mx-auto mb-1"
                            />
                            <p className="text-sm text-gray-600">{collab.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex justify-end mt-6">
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                      onClick={() => toggleCard(null)}
                    >
                      {language === 'en' ? 'Close' : 'Fechar'}
                    </button>
                  </div>
                </div>
              ))}
          </motion.div>
        ) : (
          <motion.div
            key="cards"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {cards.map((card) => (
              <div key={card.id} className="bg-white shadow-md rounded-lg p-4">
                <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
                <p className="text-gray-700 mb-4">{card.content.substring(0, 100)}...</p>
                <button
                  className="text-green-500 hover:underline font-semibold"
                  onClick={() => toggleCard(card.id)}
                >
                  {language === 'en' ? 'Read More' : 'Ler Mais'}
                </button>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AboutUs;