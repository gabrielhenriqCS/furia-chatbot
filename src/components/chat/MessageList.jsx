import React, { useRef, useEffect } from 'react';
import MessageItem from './MessageItem';

function MessageList({ messages }) {
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages])

    return (
        <div className="flex flex-col justify-start items-stretch overflow-y-auto p-3 h-full">
            {messages.map((message, index) => (
                <MessageItem key={index} message={message} />
            ))}
            <div ref={messagesEndRef} />
        </div>
    );
}

export default MessageList;