import { useState } from "react";
import MessageList from "./MessageList";
import InputArea from "./InputArea";

function ChatContainer() {
  const [messages, setMessages] = useState([
    { text: "Olá, como posso ajudar?", sender: "chatbot" },
  ]);

  const handleSendMessage = (newMessage) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: newMessage, sender: "user" },
      { text: "Estou aqui para ajudar!", sender: "chatbot" },
    ]);
  };

  return (
    <div className="w-3xl text-md h-12/11 rounded-md flex flex-col p-4 object-contain">
      <MessageList messages={messages} />
      <InputArea onSend={handleSendMessage} />
    </div>
  );
}

export default ChatContainer;
