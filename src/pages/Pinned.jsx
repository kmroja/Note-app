import React from "react";
import { useNotes } from "../context/NotesContext";
import NotesList from "../components/NotesList";
import { BookmarkIcon } from "@heroicons/react/24/outline";

export default function Pinned() {
  const { notes } = useNotes();
  const pinnedNotes = notes.filter(
    (note) => note.pinned && !note.archived && !note.trashed
  );

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold text-pink-700 flex items-center gap-2">
        <BookmarkIcon className="w-6 h-6 text-pink-600" /> Pinned Notes
      </h2>
      <NotesList notes={pinnedNotes} />
    </div>
  );
}
