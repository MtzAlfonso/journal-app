import React from 'react';
import { JournalEntries } from './JournalEntries';

export const Sidebar = () => {
  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <h3 className="">
          <i className="fas fa-moon"></i>
          <span>Alfonso</span>
        </h3>
        <button className="btn">Logout</button>
      </div>
      <div className="journal__new-entry">
        <i className="far fa-calendar-plus fa-4x"></i>
        <p className="mt-3">New Entry</p>
      </div>
      <JournalEntries />
    </aside>
  );
};