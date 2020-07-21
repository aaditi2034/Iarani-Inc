import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateTimePicker = (props) => (
  <div className={props.mainClass}>
    <div className={props.name}>
      {props.label}
    </div>
    <DatePicker
      showPopperArrow={false}
      disabled={props.isDisabled}
      timeIntervals={15}
      onKeyDown={'return false'}
      dateFormat={props.dateFormat}
      timeCaption={props.timeCaption}
      selected={props.selectedDateTime}
      onChange={(e) => {
        props.handleChange(props.name, e);
      }}
      id={props.dateTimePickerId}
      showTimeSelect={props.showTimeSelect}
      className={props.dateTimePickerClass}
      showYearDropdown={props.showYearDropdown}
      showMonthDropdown={props.showMonthDropdown}
      showTimeSelectOnly={props.showTimeSelectOnly}
    />
  </div>
);

export default DateTimePicker;

DateTimePicker.propTypes = {
  name: PropTypes.string,
  isDisabled: PropTypes.bool,
  mainClass: PropTypes.string,
  dateFormat: PropTypes.string,
  handleChange: PropTypes.func,
  timeCaption: PropTypes.string,
  showTimeSelect: PropTypes.bool,
  showYearDropdown: PropTypes.bool,
  showMonthDropdown: PropTypes.bool,
  selectedDateTime: PropTypes.object,
  dateTimePickerId: PropTypes.string,
  dateTimePickerClass: PropTypes.string,
};
