import React from 'react';
import PropTypes from 'prop-types';

const TextField = (props) => (
  <div className={props.mainClass}>
    <div>{props.label}</div>
    <input
      id={props.name}
      name={props.name}
      value={props.value}
      maxLength={props.maxLength}
      onChange={(e) => props.handleChange(props.name, e.target.value)} />
    <div className='error'>{props.error}</div>
  </div>
);

export default TextField;

TextField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  maxLength: PropTypes.number,
  mainClass: PropTypes.string,
  handleChange: PropTypes.func,
};