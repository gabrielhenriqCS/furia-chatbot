import React from "react";

export default function MessageItem({ message }) {
    const isUserMessage = message.sender === "user";
    return (
        <div className={`max-w-md mx-auto my-2 p-2 rounded-lg ${isUserMessage ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}>
            <p className="text-sm">{message.text}</p>
        </div>
    )
}