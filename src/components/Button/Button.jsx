import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => (
  <div className={props.mainClass}>
    <button
      name={props.name}
      value={props.value}
      className={props.name}
      onClick={(e) => props.handleSubmitAction(props.name, e.target.value)}>
      {props.buttonname}
    </button>
  </div>
);

export default Button;

Button.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  buttonname: PropTypes.string,
  handleSubmitAction: PropTypes.func,
};
