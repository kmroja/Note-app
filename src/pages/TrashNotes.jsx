import React from "react";
import { useNotes } from "../context/NotesContext";
import NoteCard from "../components/NoteCard";

const TrashNotes = () => {
  const { notes } = useNotes();
  const trashed = notes.filter(n => n.trashedAt);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {trashed.map(note => <NoteCard key={note.id} note={note} />)}
    </div>
  );
};

export default TrashNotes;
