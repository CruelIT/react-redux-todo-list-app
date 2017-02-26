import React, {PropTypes} from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  border: 0;
  outline: none;
  padding: 16px;
  box-sizing: border-box;
`;

const Input = (props) => (
  <StyledInput
    placeholder="Please type"
    value={props.value}
    autoFocus
    onChange={props.handleChange}
    onKeyDown={props.handleKeyDown}
  />
);

Input.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired
};

export default Input;
