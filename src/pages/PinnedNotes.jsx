import React from "react";
import { useNotes } from "../context/NotesContext";
import NoteCard from "../components/NoteCard";

const PinnedNotes = () => {
  const { notes } = useNotes();
  const pinned = notes.filter(n => n.pinned && !n.trashedAt && !n.archived);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {pinned.map(note => <NoteCard key={note.id} note={note} />)}
    </div>
  );
};

export default PinnedNotes;
