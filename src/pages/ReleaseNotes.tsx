
import React from 'react';

const ReleaseNotes = ({ language }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold">
        {language === 'en' ? 'Release Notes' : 'Notas de Lançamento'}
      </h1>
      <p>
        {language === 'en'
          ? 'Here are the latest updates and improvements.'
          : 'Aqui estão as últimas atualizações e melhorias.'}
      </p>
    </div>
  );
};

export default ReleaseNotes;
