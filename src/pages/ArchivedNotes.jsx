import React from "react";
import { useNotes } from "../context/NotesContext";
import NoteCard from "../components/NoteCard";

const ArchivedNotes = () => {
  const { notes } = useNotes();
  const archived = notes.filter(n => n.archived && !n.trashedAt);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {archived.map(note => <NoteCard key={note.id} note={note} />)}
    </div>
  );
};

export default ArchivedNotes;
