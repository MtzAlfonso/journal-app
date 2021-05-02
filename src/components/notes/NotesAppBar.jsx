import moment from 'moment';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote } from '../../actions/notesActions';

export const NotesAppBar = () => {
  const { active: note } = useSelector((state) => state.notes);
  const parsedDate = moment(note.date);

  const dispatch = useDispatch();

  const handleSaveNote = () => {
    dispatch(startSaveNote(note));
  };

  const handleUploadPicture = () => {};

  return (
    <div className="notes__appbar">
      <span>{parsedDate.format('ll')}</span>
      <input type="file" name="" />
      <div>
        <button className="btn" onClick={handleUploadPicture}>
          Picture
        </button>
        <button className="btn" onClick={handleSaveNote}>
          Save
        </button>
      </div>
    </div>
  );
};
