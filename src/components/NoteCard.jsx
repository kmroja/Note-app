import React from "react";
import {
  TrashIcon,
  ArchiveBoxArrowDownIcon,
  BookmarkIcon,
} from "@heroicons/react/24/solid";
import { useNotes } from "../context/NotesContext";

const NoteCard = ({ note }) => {
  const { updateNote, deleteNote } = useNotes();

  return (
    <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition">
      <h2 className="text-lg font-bold mb-2">{note.title}</h2>
      <p className="mb-2">{note.content}</p>

      <div className="flex flex-wrap gap-1 mb-3">
        {note.tags?.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center">
       
        <button
          onClick={() => updateNote(note.id, { pinned: !note.pinned })}
          className="text-pink-600 hover:text-pink-800"
          title={note.pinned ? "Unpin Note" : "Pin Note"}
        >
          <BookmarkIcon className="w-5 h-5" />
        </button>

        {/* ARCHIVE/UNARCHIVE */}
        <button
          onClick={() => updateNote(note.id, { archived: !note.archived })}
          className="text-gray-600 hover:text-gray-800"
          title={note.archived ? "Unarchive Note" : "Archive Note"}
        >
          <ArchiveBoxArrowDownIcon className="w-5 h-5" />
        </button>

        {/* DELETE */}
        <button
          onClick={() => deleteNote(note.id)}
          className="text-red-600 hover:text-red-800"
          title="Move to Trash"
        >
          <TrashIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
