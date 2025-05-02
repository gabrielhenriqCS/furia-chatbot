import React, { useEffect, useState } from "react";
import LogoFuria from "/logo.png";
import DarkThemeIcon from "../../assets/dark-mode.svg";
import LightThemeIcon from "../../assets/light-mode.svg";
import ChatSection from "../chat/ChatSection";
import GameStatus from "../gamestatus/GameStatus";
import NewsFeed from "../news-feed/NewsFeed";
import PollsArea from "../polls-area/PollsArea";

function FanApp() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div
      className={`min-h-screen py-6 ${
        theme === "dark"
          ? "bg-gray-900 text-gray-200"
          : "bg-gray-100 text-gray-800"
      }`}
    >
      <header
        className={`flex justify-center py-4 ${
          theme === "dark"
            ? "bg-gray-800 text-white"
            : "bg-furia-primary text-white"
        }`}
      >
        <div className="flex flex-row items-center">
          <h1
            className={`text-3xl font-bold ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            Comunidade FURIA CS
          </h1>
          <img src={LogoFuria} alt="logo do site" className="w-10 ml-3" />
        </div>
        <img
          src={theme === "dark" ? LightThemeIcon : DarkThemeIcon} // Alterne os ícones
          alt="theme icon"
          className="w-10 ml-3 cursor-pointer"
          onClick={toggleTheme}
        />
      </header>
      <div className="container mx-auto mt-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <div
          className={`md:col-span-2 lg:col-span-3 rounded-md shadow-md overflow-hidden h-full ${
            theme === "dark" ? "bg-gray-800 text-white" : "bg-white"
          }`}
        >
          <ChatSection />
        </div>
        <div
          className={`rounded-md shadow-md p-4 ${
            theme === "dark" ? "bg-gray-700 text-white" : "bg-blue-100"
          }`}
        >
          <GameStatus />
        </div>
        <div
          className={`rounded-md shadow-md p-4 ${
            theme === "dark" ? "bg-gray-800 text-white" : "bg-white"
          }`}
        >
          <NewsFeed />
        </div>
        <div
          className={`rounded-md shadow-md p-4 ${
            theme === "dark" ? "bg-gray-700 text-white" : "bg-blue-100"
          }`}
        >
          <PollsArea />
        </div>
      </div>
      <footer
        className={`py-2 text-center mt-4 ${
          theme === "dark"
            ? "bg-gray-800 text-white"
            : "bg-gray-200 text-gray-600"
        }`}
      >
        <p
          className={`text-sm font-bold ${
            theme === "dark" ? "text-blue-400" : "text-blue-900"
          }`}
        >
          #GOFURIA
        </p>
      </footer>
    </div>
  );
}

export default FanApp;
