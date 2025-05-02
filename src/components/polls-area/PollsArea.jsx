import React from "react";

function PollsArea() {
  const polls = [
    {
      id: 1,
      question: "Quem será o MVP do próximo jogo da FURIA?",
      options: ["KCERATO", "yuurio", "arT", "drop", "chelo"],
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">Enquetes</h2>
      {polls.map((poll) => (
        <div key={poll.id} className="mb-4 p-3 rounded-md">
          <p className="font-semibold text-lg">{poll.question}</p>
          <ul className="mt-2">
            {poll.options.map((option) => (
              <li key={option} className="mb-1 text-md">
                <input type="radio" name={`poll-${poll.id}`} id={option} />
                <label htmlFor={option} className="ml-2">
                  {option}
                </label>
              </li>
            ))}
            <button className="mt-3 bg-blue-700 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600 transition duration-200">
              Votar
            </button>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default PollsArea;
