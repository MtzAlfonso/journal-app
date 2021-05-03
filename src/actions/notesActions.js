import Swal from 'sweetalert2';
import { db } from '../firebase/firebase-config';
import { fileUpload } from '../helpers/fileUpload';
import { loadNotes } from '../helpers/loadNotes';
import { types } from '../types/types';

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    };

    const docRef = await db.collection(`${uid}/journal/notes`).add(newNote);
    dispatch(activeNote(docRef.id, newNote));
    dispatch(startLoadingNotes(uid));
  };
};

export const activeNote = (id, note) => ({
  type: types.noteActive,
  payload: { id, ...note },
});

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const setNotes = (notes) => ({
  type: types.notesLoad,
  payload: notes,
});

export const startSaveNote = (note) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const noteToFirestore = { ...note };
    delete noteToFirestore.id;
    !note.url && delete noteToFirestore.url;

    await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);
    dispatch(refreshNote(note.id, note));
    Swal.fire('Save', 'Note saved successfully', 'success');
  };
};

export const refreshNote = (id, note) => ({
  type: types.notesUpdate,
  payload: { id, note },
});

export const startUpload = (file) => {
  return async (dispatch, getState) => {
    const { active: note } = getState().notes;
    Swal.fire({
      title: 'Uploading...',
      text: 'Please wait',
      didOpen: () => {
        Swal.showLoading();
      },
      allowOutsideClick: false,
      allowEscapeKey: false,
    });
    const fileUrl = await fileUpload(file);
    note.url = fileUrl;
    dispatch(startSaveNote(note));
    Swal.close();
  };
};