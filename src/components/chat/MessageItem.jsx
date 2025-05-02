import React from "react";

function MessageItem({ message }) {
    const isUserMessage = message.sender === "user";
    return (
        <div className={`flex w-full my-2 ${isUserMessage ? "justify-end" : "justify-start"}`}>
            <div className={`rounded-lg p-2 max-w-xs ${isUserMessage ? "bg-blue-500 dark:bg-blue-700 text-white" : "bg-gray-200 dark:bg-gray-700 dark:text-white text-black"}`}>
                <p>{message.text}</p>
            </div>
        </div>
    )
}

export default MessageItem;