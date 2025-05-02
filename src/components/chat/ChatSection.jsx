import React from 'react';
import ChatContainer from './ChatContainer';

function ChatSection() {
  return (
    <div className="p-4 flex flex-col items-center justify-center h-full bg-white dark:bg-gray-800 rounded-md shadow-lg">
      <h2 className="text-2xl font-semibold mb-2">Chat ao Vivo</h2>
      <ChatContainer />
    </div>
  );
}

export default ChatSection;