import React, { useState } from "react";
import { useNotes } from "../context/NotesContext";

const NoteEditor = () => {
  const { createNote } = useNotes();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;
    createNote(title, content, tag);
    setTitle("");
    setContent("");
    setTag("");
  };

  return (
    <form className="bg-white p-4 rounded shadow-md mb-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />
      <textarea
        placeholder="Take a note..."
        value={content}
        onChange={e => setContent(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />
      <input
        type="text"
        placeholder="Tag (optional)"
        value={tag}
        onChange={e => setTag(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />
      <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">Add Note</button>
    </form>
  );
};

export default NoteEditor;
