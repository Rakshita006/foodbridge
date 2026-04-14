import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ userName }) => {
  return (
    <nav className="bg-gray-900 border border-gray-700 rounded-xl px-6 py-3 flex justify-between items-center mb-6 mx-4 mt-4">
      <Link to="/" className="text-lg font-medium text-emerald-500">
        🌾 FoodBridge
      </Link>

      <div className="flex gap-2">
        <Link
          to="/"
          className="px-4 py-1.5 text-sm border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-800 transition"
        >
          Browse Food
        </Link>
        <Link
          to="/post"
          className="px-4 py-1.5 text-sm rounded-lg text-white bg-emerald-600 hover:bg-emerald-500 transition"
        >
          + Post Food
        </Link>
        <Link
          to="/claimed"
          className="px-4 py-1.5 text-sm border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-800 transition"
        >
          Claimed
        </Link>

        <Link
          to="/myposts"
          className="px-4 py-1.5 text-sm border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-800 transition"
        >
          My Posts
        </Link>

        <Link
          to="/about"
          className="px-4 py-1.5 text-sm border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-800 transition"
        >
          About
        </Link>
      </div>

      <span className="text-sm text-gray-400">
        Hi, {userName || "Guest"} 👋
      </span>
    </nav>
  );
};

export default Navbar;
