import { useState } from "react";
import MessageList from "./MessageList";
import InputArea from "./InputArea";


export default function ChatContainer() {
    const [messages, setMessages] = useState([
        { text: 'Olá, como posso ajudar?', sender: 'chatbot' }
    ]);

    const handleSendMessage = (newMessage) => {
        setMessages((prevMessages) => [
            ...prevMessages,
            { text: newMessage, sender: 'user' },
            { text: 'Estou aqui para ajudar!', sender: 'chatbot' }
        ]);
    }

    return (
        <div className="w-96 h-96 border border-gray-300 rounded-md shadow-md flex flex-col p-4">
            <div className="p-4 font-semibold text-gray-700">ChatBot</div>
            <MessageList messages={messages} />
            <InputArea onSend={handleSendMessage} />
        </div>
    )
}