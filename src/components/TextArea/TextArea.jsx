import React from 'react';
import PropTypes from 'prop-types';

const TextArea = (props) => (
  <div className={props.mainClass}>
    <div className={props.name}>{props.label}</div>
    <textarea
      id={props.name}
      name={props.name}
      value={props.value}
      onChange={(e) => props.handleChange(props.name, e.target.value)} />
    <div className='error'>{props.error}</div>
  </div>
);

export default TextArea;

TextArea.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  handleChange: PropTypes.func,
};
