
import React from "react";
import { Link } from "react-router-dom";
import { LightBulbIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-yellow-50 to-pink-100 shadow-md py-4 px-6 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <LightBulbIcon className="w-7 h-7 text-pink-600" />
        <h1 className="text-2xl font-bold text-pink-700 font-serif">Smart Notes</h1>
      </div>
      <div className="flex gap-8">
        <Link to="/" className="text-pink-800 hover:underline font-medium">All Notes</Link>
        <Link to="/pinned" className="text-pink-800 hover:underline font-medium">Pinned</Link>
        <Link to="/archived" className="text-pink-800 hover:underline font-medium">Archive</Link>
        <Link to="/trash" className="text-pink-800 hover:underline font-medium">Trash</Link>
      </div>
    </nav>
  );
}
