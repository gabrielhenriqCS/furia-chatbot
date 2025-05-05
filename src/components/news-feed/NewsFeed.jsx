import React from 'react';

function NewsFeed() {
  const news = [
    { id: 1, title: 'FURIA anuncia novo patrocinador!', content: 'A FURIA Esports anunciou uma nova parceria com a empresa automobilística TecMotors.' },
    { id: 2, title: 'Próximo confronto da FURIA no campeonato GAME2025', content: 'Confira a data e o horário do próximo jogo da FURIA contra o time SCROWtengers.' },
    { id: 3, title: 'S1mple elogia performance de KSCERATO', content: 'Em entrevista, o jogador S1mple comentou sobre a grande atuação de KSCERATO no último jogo.' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">Últimas Notícias</h2>
      <ul>
        {news.map(item => (
          <li key={item.id} className="mb-3 border-b border-gray-200 pb-2">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm">{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsFeed;