import React, {PropTypes} from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  border: 0;
  outline: none;
  padding: 16px;
  box-sizing: border-box;
  font-size: 1.5rem;
`;

const ToDoInput = (props) => (
  <StyledInput
    placeholder="Please type"
    value={props.value}
    autoFocus
    onChange={props.handleChange}
    onKeyDown={props.handleKeyDown}
  />
);

ToDoInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired
};

export default ToDoInput;
