import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';

const ViewFullNote = ({ selectedRecord, handleSubmitAction }) => (
  <div className='viewFullNote'>
    <div className='noteListRowWrapper' key={selectedRecord._id}>
      <div className='noteWrap' onClick={() => { }}>
        <div className='noteTitle'>
          {selectedRecord.title}
        </div>
        <div className='noteDesc'>{selectedRecord.note}</div>
      </div>
    </div>
    <div className='actionWraperView'>
      <Button
        buttonname='Close'
        handleSubmitAction={() => handleSubmitAction()} />
    </div>
  </div>
);

export default ViewFullNote;

ViewFullNote.propTypes = {
  selectedRecord: PropTypes.object,
};