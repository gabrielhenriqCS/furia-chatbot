import { useState } from "react";

function InputArea({ onSend }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSend = () => {
    if (inputValue.trim() !== "") {
      onSend(inputValue);
      setInputValue("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      onSend(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="flex items-center p-5 mt-18 border-gray-300">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Digite sua mensagem..."
        className="flex-grow p-3 border rounded-md focus:outline-none focus:ring-2"
      />
      <button
        className='ml-2 p-3 w-25 h-12 rounded-md transition duration-100 cursor-pointer bg-blue-500 hover:bg-blue-400 text-white'
        
        onClick={handleSend}
      >
        Enviar
      </button>
    </div>
  );
}

export default InputArea;
