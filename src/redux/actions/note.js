import ActionTypes from '../constants/ActionConstants';

export const addNoteAction = (data) => ({
  type: ActionTypes.ADD_NOTE_SUCCESS,
  payload: data,
});

export const editNoteAction = (data) => ({
  type: ActionTypes.EDIT_NOTE_SUCCESS,
  payload: data,
});

export const deleteNoteAction = (id) => ({
  type: ActionTypes.DELETE_NOTE_SUCCESS,
  payload: { id },
});
