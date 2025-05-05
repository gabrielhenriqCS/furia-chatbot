import React from "react";

function MessageItem({ message, theme }) {
    const isUserMessage = message.sender === "user";
    const isDarkTheme = theme === "dark";
    return (
        <div className={`flex w-full my-2 ${isUserMessage ? "justify-end" : "justify-start"}`}>
            <div className={`rounded-lg p-2 max-w-xs ${isUserMessage ? "bg-blue-500 text-white" : "bg-gray-200 text-black"} ${isDarkTheme ? "bg-gray-600 text-white" : "bg-gray-200 text-black"}`}>
                <p>{message.text}</p>
            </div>
        </div>
    )
}

export default MessageItem;