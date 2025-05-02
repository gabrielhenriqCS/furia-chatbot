import React from 'react';

function GameStatus() {
  return (
    <div>
      <h2 className="text-2xl text-center font-semibold">Status do Jogo</h2>
      <div className=" rounded-md p-5 flex flex-col items-center justify-center h-full text-lg">
        <p className="font-bold">Próximo Jogo:</p>
        <p>FURIA vs. PLAYfor2</p>
        <p>Data: 27 de Abril de 2025</p>
        <p>Horário: 16:00 BRT</p>
        <p className="mt-2 font-bold">Ao Vivo:</p>
        <p>FURIA <span className="font-bold text-green-500">1</span> - <span className="font-bold text-red-500">0</span> BAYMASTERS</p>
        <p className="text-sm dark:text-amber-50 text-gray-600">Mapa: Inferno</p>
        <p className="text-sm dark:text-amber-50 text-gray-600">Rodadas: 12 - 8</p>
      </div>
    </div>
  );
}

export default GameStatus;