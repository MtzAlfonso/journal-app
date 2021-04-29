import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          name=""
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
        />
        <textarea
          name=""
          placeholder="What happened today?"
          className="notes__textarea"
        ></textarea>
        <div className="notes__image">
          <img
            src="https://images.unsplash.com/photo-1596016691838-70260f1e21c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="Imagen de prueba"
          />
        </div>
      </div>
    </div>
  );
};
