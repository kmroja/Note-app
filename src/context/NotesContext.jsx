import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

const NotesContext = createContext();
export const useNotes = () => useContext(NotesContext);

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState(() => {
    const localData = localStorage.getItem("notes");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (title, content, tags) => {
    const newNote = {
      id: uuid(),
      title,
      content,
      tags,
      pinned: false,
      archived: false,
      trashed: false,
      createdAt: new Date().toISOString(),
    };
    setNotes([newNote, ...notes]);
  };

  const updateNote = (id, updatedNote) => {
    setNotes(notes.map(note => (note.id === id ? { ...note, ...updatedNote } : note)));
  };

  const deleteNote = (id, permanent = false) => {
  if (permanent) {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  } else {
    setNotes(prevNotes =>
      prevNotes.map(note =>
        note.id === id ? { ...note, trashed: true } : note
      )
    );
  }
};


  const permanentlyDelete = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const restoreNote = (id) => {
    setNotes(notes.map(note => (note.id === id ? { ...note, trashed: false } : note)));
  };

  useEffect(() => {
    const now = Date.now();
    const filtered = notes.filter(note => !note.trashed || (now - note.trashedAt < 7 * 24 * 60 * 60 * 1000));
    if (filtered.length !== notes.length) {
      setNotes(filtered);
    }
  }, []);

  return (
    <NotesContext.Provider value={{ notes, addNote, updateNote, deleteNote, permanentlyDelete, restoreNote }}>
      {children}
    </NotesContext.Provider>
  );
};
