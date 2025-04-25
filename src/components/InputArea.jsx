import { useState } from "react";


export default function InputArea({ onSend }) {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSend = () => {
        if (inputValue.trim() !== "") {
            onSend(inputValue);
            setInputValue("");
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter" && inputValue.trim() !== "") {
            onSend(inputValue);
            setInputValue("");
        }
    };

    return (
        <div className="flex items-center p-4 border-t border-gray-300">
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Digite sua mensagem..."
                className="flex-grow p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={handleSend}>
                Enviar
            </button>
        </div>
    );
}