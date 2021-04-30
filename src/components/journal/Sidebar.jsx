import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/authActions';
import { startNewNote } from '../../actions/notesActions';
import { JournalEntries } from './JournalEntries';

export const Sidebar = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(startLogout());
  };

  const handleAddEntry = () => {
    dispatch(startNewNote());
  }

  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <h3 className="">
          <i className="fas fa-moon"></i>
          <span>{name}</span>
        </h3>
        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="journal__new-entry" onClick={handleAddEntry}>
        <i className="far fa-calendar-plus fa-4x"></i>
        <p className="mt-3">New Entry</p>
      </div>
      <JournalEntries />
    </aside>
  );
};
