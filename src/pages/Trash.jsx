
import React from "react";
import { useNotes } from "../context/NotesContext";
import {
  TrashIcon,
  ArrowUturnLeftIcon,
} from "@heroicons/react/24/outline";

export default function Trash() {
  const { notes, deleteNote, restoreNote } = useNotes();
  const trashedNotes = notes.filter((note) => note.trashed);

  const handlePermanentDelete = (id) => {
    const confirmed = window.confirm(
      "🗑️ Are you sure you want to permanently delete this note? This action cannot be undone."
    );
    if (confirmed) {
      deleteNote(id, true); // pass 'true' for permanent deletion
    }
  };

  return (
    <div className="space-y-6">
      <p className="text-center text-red-600 italic">
        🕒 Notes in trash are auto-deleted after 7 days.
      </p>

      {trashedNotes.length === 0 ? (
        <p className="text-center text-gray-500">Trash is empty.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trashedNotes.map((note) => (
            <div
              key={note.id}
              className="bg-red-50 p-6 rounded-lg shadow-lg border-l-4 border-red-300 hover:scale-[1.01] transition"
            >
              <h2 className="text-lg font-semibold text-red-700 mb-2">{note.title}</h2>
              <p className="text-gray-800 mb-2">{note.content}</p>
              <div className="text-sm text-gray-500 italic mb-4">
                {note.tags.join(", ")}
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => restoreNote(note.id)}
                  className="text-green-600 hover:text-green-800"
                  title="Restore"
                >
                  <ArrowUturnLeftIcon className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handlePermanentDelete(note.id)}
                  className="text-red-600 hover:text-red-800"
                  title="Delete Permanently"
                >
                  <TrashIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
