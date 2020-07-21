import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './viewNote.scss';
import AdNote from '../AddNote';
import ViewFullNote from './ViewFullNote';
import staticString from '../../libs/constant';
import Modal from '../../components/Modal/Modal';
import SubHeader from '../../components/SubHeader';
import editIcon from '../../assets/img/editIcon.png';

const ViewNotes = (props) => {
  const [isViewDesc, setViewDesc] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const [isEditModalVisible, setEditable] = useState(false);
  const handleViewOfDesc = (data) => {
    setSelectedData(data);
    console.log(data);
    setViewDesc(!isViewDesc);
  };
  const handleEditNote = (data) => {
    setSelectedData(data);
    console.log(data);
    setEditable(!isEditModalVisible);
  };
  useEffect(() => {
    if (isViewDesc || isEditModalVisible) {
      document.querySelector('.modal').style.display = 'block';
    }
  }, [isViewDesc, isEditModalVisible])
  return (
    <div className='viewNoteWrapper'>
      {
        isViewDesc
        && <Modal
          id='modal'
          ModalBody={ViewFullNote}
          selectedRecord={selectedData}
          handleSubmitAction={handleViewOfDesc} />
      }
      {
        isEditModalVisible
        && <Modal
          id='modal'
          ModalBody={AdNote}
          modalBodyClass='editModal'
          setEditable={setEditable}
          selectedRecord={selectedData}
          heading={staticString.editNote}
          isEditable={isEditModalVisible} />
      }
      <SubHeader
        subHeaderText={staticString.viewNote} />
      <div className='wrapperOfList'>
        <div className='m-3'>
          {
            props.notesRecord && props.notesRecord.length > 0
              ? props.notesRecord.map((list) => (
                <div className='noteListRowWrapper' key={list._id}>
                  <div className='noteWrap' onClick={() => handleViewOfDesc(list)}>
                    <div className='notetext'>
                      {list.title}
                    </div>
                    <div className='dateTimeView'>
                      {list.date} {list.time}
                    </div>
                  </div>
                  <div>
                    <img src={editIcon} alt='imgnotfound' onClick={() => handleEditNote(list)} />
                  </div>
                </div>
              ))
              : <div>
                {staticString.noNotesText}
              </div>
          }
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  notesRecord: state.notes.notesRecord,
});

export default connect(mapStateToProps, null)(ViewNotes);

ViewNotes.propTypes = {
  notesRecord: PropTypes.array,
};
