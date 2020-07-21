import actionConstants from '../constants/ActionConstants';
import moment from 'moment';

const list = JSON.parse(localStorage.getItem('notesList'));
const initialState = {
  notesRecord: list || [],
};
export default function notes(state = initialState, action) {
  switch (action.type) {
    case actionConstants.ADD_NOTE_SUCCESS: {
      const record = [...state.notesRecord];
      const lsitRecord = action.payload;
      lsitRecord.date = moment(action.payload.date).format('MMM DD, YYYY');
      record.unshift(lsitRecord);
      localStorage.setItem('notesList', JSON.stringify(record));
      return {
        ...state,
        notesRecord: record,
      };
    };
    case actionConstants.EDIT_NOTE_SUCCESS: {
      let record = [...state.notesRecord];
      for (var i in record) {
        if (record[i]._id === action.payload._id) {
          record[i] = action.payload;
          record[i].date = moment(action.payload.date).format('MMM DD, YYYY');
          break;
        }
      }
      localStorage.setItem('notesList', JSON.stringify(record));
      return {
        ...state,
        notesRecord: record
      };
    }
    case actionConstants.DELETE_NOTE_SUCCESS: {
      let record = [...state.notesRecord];
      record = record.filter((item) => item._id !== action.payload.id);
      localStorage.setItem('notesList', JSON.stringify(record));
      return {
        ...state,
        notesRecord: record
      };
    }
    default:
      return state;
  }
}
