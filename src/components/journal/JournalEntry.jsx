import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notesActions';

export const JournalEntry = ({ id, date, title, body, url }) => {
  const parsedDate = moment(date);
  const dispatch = useDispatch();
  const handleEntryClick = () => {
    dispatch(activeNote(id, { date, title, body, url }));
  };

  return (
    <div className="journal__entry" onClick={handleEntryClick}>
      {url && (
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${url})`,
          }}
        ></div>
      )}
      <div className="journal__entry-body">
        <p className="journal__entry-title">{title}</p>
        <p className="journal__entry-content">{body}</p>
      </div>
      <div className="journal__entry-date-box ml-auto">
        <span>{parsedDate.format('dddd')}</span>
        <h4>{parsedDate.format('Do')}</h4>
      </div>
    </div>
  );
};
