import { useState } from "react";
import { useNotes } from "../context/NotesContext";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

export default function NoteForm() {
  const { addNote } = useNotes();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return alert("All fields required!");
    addNote(title, content, tags.split(",").map(tag => tag.trim()));
    setTitle("");
    setContent("");
    setTags("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white/90 p-6 rounded-2xl shadow-xl mb-6 border border-pink-200">
      <h2 className="text-xl font-bold text-pink-700 mb-4">Create a New Note</h2>
      <input
        type="text"
        placeholder="Note Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="block w-full mb-3 border-b-2 border-pink-300 p-2 text-lg bg-yellow-50 rounded shadow-inner focus:ring-2 focus:ring-pink-200"
      />
      <textarea
        placeholder="Write your note here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="block w-full mb-3 border border-gray-300 p-3 rounded-lg bg-white resize-none h-28 focus:ring-2 focus:ring-pink-200"
      />
      <input
        type="text"
        placeholder="Tags (comma separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        className="block w-full mb-4 border-b-2 border-pink-300 p-2 focus:ring-2 focus:ring-pink-200"
      />
      <button
        type="submit"
        className="flex items-center gap-2 bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition shadow-md"
      >
        <PlusCircleIcon className="w-5 h-5" />
        Add Note
      </button>
    </form>
  );
}