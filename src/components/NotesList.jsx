
import React from "react";
import { useNotes } from "../context/NotesContext";
import {
  TrashIcon,
  ArchiveBoxArrowDownIcon,
  BookmarkIcon,
  BookmarkSlashIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

export default function NotesList({ notes }) {
  const { deleteNote, updateNote } = useNotes();

  const handleTrash = (id) => {
    if (confirm("Are you sure you want to move this note to trash?")) {
      updateNote(id, { trashed: true });
    }
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {notes.map((note) => (
        <div
          key={note.id}
          className="bg-yellow-100 p-6 rounded-xl shadow-lg relative hover:scale-[1.02] transition border-l-4 border-pink-300"
        >
          <h2 className="font-bold text-xl mb-2 text-pink-700 font-serif flex items-center gap-2">
            <DocumentTextIcon className="w-5 h-5 text-pink-600" />
            {note.title}
          </h2>
          <p className="text-gray-800 mb-2 whitespace-pre-line">{note.content}</p>
          <div className="text-sm text-gray-500 italic mb-3">{note.tags.join(", ")}</div>
          <div className="flex justify-between items-center mt-2">
            <button
              onClick={() => updateNote(note.id, { pinned: !note.pinned })}
              className="text-pink-600 hover:text-pink-800"
              title={note.pinned ? "Unpin Note" : "Pin Note"}
            >
              {note.pinned ? (
  <BookmarkSlashIcon className="w-5 h-5" />
) : (
  <BookmarkIcon className="w-5 h-5" />
)}
            </button>

            <button
              onClick={() => updateNote(note.id, { archived: true })}
              className="text-yellow-600 hover:text-yellow-800"
              title="Archive Note"
            >
              <ArchiveBoxArrowDownIcon className="w-5 h-5" />
            </button>

            <button
              onClick={() => handleTrash(note.id)}
              className="text-red-600 hover:text-red-800"
              title="Move to Trash"
            >
              <TrashIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
