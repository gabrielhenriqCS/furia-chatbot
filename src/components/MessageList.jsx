import React, { useRef, useEffect } from 'react';
import MessageItem from './MessageItem';

export default function MessageList({ messages }) {
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages])

    return (
        <div className="flex flex-col items-center overflow-y-auto h-full p-4">
            {messages.map((message, index) => (
                <MessageItem key={index} message={message} />
            ))}
            <div ref={messagesEndRef} /> 
        </div>
    );
}