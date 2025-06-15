import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import AllNotes from "./pages/AllNotes";
import PinnedNotes from "./pages/PinnedNotes";
import Archive from "./pages/Archive";
import Trash from "./pages/Trash";


export default function App() {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-yellow-50 to-pink-100">
      <nav className="flex justify-center gap-10 bg-white/90 p-4 shadow-xl rounded-xl mb-6 backdrop-blur-md">
        <NavLink to="/" className={({ isActive }) => isActive ? "font-bold text-pink-600 underline" : "text-gray-600 hover:text-pink-500"}>All Notes</NavLink>
        <NavLink to="/pinned" className={({ isActive }) => isActive ? "font-bold text-pink-600 underline" : "text-gray-600 hover:text-pink-500"}>Pinned</NavLink>
        <NavLink to="/archive" className={({ isActive }) => isActive ? "font-bold text-pink-600 underline" : "text-gray-600 hover:text-pink-500"}>Archive</NavLink>
        <NavLink to="/trash" className={({ isActive }) => isActive ? "font-bold text-pink-600 underline" : "text-gray-600 hover:text-pink-500"}>Trash</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<AllNotes />} />
        <Route path="/pinned" element={<PinnedNotes />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/trash" element={<Trash />} />
        
      </Routes>
    </div>
  );
}
