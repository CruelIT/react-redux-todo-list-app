import React, {PropTypes} from 'react';

const Input = props =>
  <input
    placeholder="Please type"
    value={props.value}
    autoFocus
    onChange={props.handleChange}
    onKeyDown={props.handleKeyDown}
  />
;

Input.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired
};

export default Input;
