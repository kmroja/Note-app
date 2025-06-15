
import React from "react";
import NotesList from "../components/NotesList";
import { useNotes } from "../context/NotesContext";

export default function Archive() {
  const { notes } = useNotes();
  const archivedNotes = notes.filter(note => note.archived && !note.trashed);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Archived Notes</h1>
      <NotesList notes={archivedNotes} />
    </div>
  );
}
