import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Mazlum Binici</h1>
      <p className="text-xl mb-6 text-center max-w-2xl">
        I'm a frontend developer crafting seamless digital experiences using React, Node.js, HTML, CSS and Tailwind.
      </p>
      <div className="flex gap-4">
        <Link
          to="/about"
          className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-indigo-100 transition"
        >
          About Me
        </Link>
        <Link
          to="/portfolio"
          className="bg-transparent border border-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition"
        >
          My Projects
        </Link>
      </div>
    </div>
  );
};

export default Home;
