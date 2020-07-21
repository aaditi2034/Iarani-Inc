import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './addNote.scss';
import Button from '../../components/Button';
import staticString from '../../libs/constant';
import TextArea from '../../components/TextArea';
import TextField from '../../components/TextField';
import SubHeader from '../../components/SubHeader';
import checkFormValidation from '../../libs/validations';
import DateTimePicker from '../../components/CalendarTime';
import { addNoteAction, editNoteAction, deleteNoteAction } from '../../redux/actions/note';

const AddNote = (props) => {
  const [noteData, setNoteData] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [formErr, setFormErr] = useState({});
  useEffect(() => {
    if (props.isEditable) {
      setIsEdit(true);
      const record = { ...props.selectedRecord };
      record.date = new Date(props.selectedRecord.date);
      setNoteData(record);
    }
  }, []);
  const handleChange = (name, value) => {
    console.log(name, value);
    const data = { ...noteData };
    switch (name) {
      case 'date':
        data[`${name}`] = new Date(value);
        break;
      case 'note':
      case 'title':
        data[`${name}`] = value;
        break;
      default:
        break;
    }
    console.log(data);
    setNoteData(data);
  };
  const handleDiscard = () => {
    setNoteData({});
    if (isEdit) {
      props.setEditable();
    }
    setFormErr({});
    document.querySelector('#note').value = '';
    document.querySelector('#title').value = '';
  }
  const handleSubmit = () => {
    const record = { ...noteData };
    const formErrors = checkFormValidation(record);
    if (Object.keys(formErrors).length > 0) {
      setFormErr(formErrors);
    } else if (isEdit) {
      props.editNoteAction(record);
      handleDiscard();
    } else {
      record._id = Math.random() + 121;
      props.addNoteAction(record);
      handleDiscard();
    }
  };
  const deleteHandler = () => {
    props.deleteNoteAction(noteData._id);
    handleDiscard();
  };
  return (
    <div className={isEdit ? 'addNoteWrapper editWrapper' : 'addNoteWrapper'}>
      <SubHeader
        subHeaderText={isEdit ? staticString.editNote : staticString.addNote} />
      <div className='m-3'>
        <DateTimePicker
          name='date'
          label={staticString.date}
          showYearDropdown={true}
          showMonthDropdown={true}
          handleChange={handleChange}
          mainClass={'dateSelectionWraper'}
          selectedDateTime={noteData.date} />
        <TextField
          name='title'
          mainClass='titleWrap'
          maxLength={32}
          value={noteData.title}
          error={formErr.title}
          label={staticString.title}
          handleChange={handleChange} />
        <TextArea
          name='note'
          error={formErr.note}
          value={noteData.note}
          mainClass='textAreaNote'
          handleChange={handleChange}
          label={staticString.note} />
        <div className='actionWrapper d-flex'>
          <Button
            name='discard'
            mainClass='discardBtn'
            buttonname={staticString.discard}
            handleSubmitAction={handleDiscard} />
          <Button
            name='save'
            mainClass='submitBtn'
            buttonname={isEdit ? staticString.update : staticString.submit}
            handleSubmitAction={handleSubmit} />
        </div>
        {
          isEdit
          && <div className='deleteOptionEdit d-flex'>
            <div className='deleteText'>{staticString.deleteNoteText}</div>
            <div className='deleteBtnWrap'>
              <Button
                handleSubmitAction={deleteHandler}
                buttonname={staticString.deleteNote} />
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default connect(null, {
  addNoteAction,
  editNoteAction,
  deleteNoteAction,
})(AddNote);

AddNote.propTypes = {
  isEditable: PropTypes.bool,
  setEditable: PropTypes.func,
  addNoteAction: PropTypes.func,
  editNoteAction: PropTypes.func,
  selectedRecord: PropTypes.object,
  deleteNoteAction: PropTypes.func,
};

