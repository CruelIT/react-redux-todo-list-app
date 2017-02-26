import React, { PropType } from 'react';

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
  value: PropType.string.isRequired,
  handleChange: PropType.func.isRequired,
  handleKeyDown: PropType.func.isRequired,
};

export default Input;
