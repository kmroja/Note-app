import React from "react";
import { useNotes } from "../context/NotesContext";
import NotesList from "../components/NotesList";
import NoteForm from "../components/NoteForm";

export default function AllNotes() {
  const { notes } = useNotes();

 
  const activeNotes = notes.filter(
    (note) => !note.archived && !note.trashed
  );

  
  const sortedNotes = [...activeNotes].sort((a, b) => {
    return b.pinned - a.pinned;
  });

  return (
    <div className="p-6 space-y-6">
    
      <NoteForm />

      
      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-4">All Notes</h2>
        <NotesList notes={sortedNotes} />
      </div>
    </div>
  );
}
