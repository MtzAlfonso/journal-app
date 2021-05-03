import moment from 'moment';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUpload } from '../../actions/notesActions';

export const NotesAppBar = () => {
  const { active: note } = useSelector((state) => state.notes);
  const parsedDate = moment(note.date);

  const dispatch = useDispatch();

  const handleSaveNote = () => {
    dispatch(startSaveNote(note));
  };

  const handleUploadPicture = () => {
    document.getElementById('fileSelector').click();
  };

  const handleFileChange = (e) => {
    const [file] = e.target.files;
    file && dispatch(startUpload(file));
  };

  return (
    <div className="notes__appbar">
      <span>{parsedDate.format('lll')}</span>
      <input
        id="fileSelector"
        type="file"
        name="file"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <div>
        <button className="btn" onClick={handleUploadPicture}>
          <i className="fas fa-image"></i> Picture
        </button>
        <button className="btn" onClick={handleSaveNote}>
          <i className="fas fa-save"></i> Save
        </button>
      </div>
    </div>
  );
};
