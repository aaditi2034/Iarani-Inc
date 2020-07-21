import React from 'react';
import AddNote from '../AddNote';
import ViewNotes from '../ViewNotes';

const Notes = () => (
  <div className='d-sm-flex container'>
    <div className='addNoteSection container'>
      <AddNote />
    </div>
    <div className='notesListSection container'>
      <ViewNotes />
    </div>
  </div>
);

export default Notes;
