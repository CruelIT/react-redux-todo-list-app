import React, {PropTypes} from 'react';
import styled from 'styled-components';

const Li = styled.li`
  border-bottom: 1px solid #ededed;
  font-size: 1.5rem;
  position: relative;
  
  &:hover button {
    display: block;
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const CheckboxInput = styled.input`
  text-align: center;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  border: none;
  appearance: none;
  outline: none;
  cursor: pointer;
  
  &::after {
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>');
  }
  
  &:checked::after {
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>');
  }
`;

const Label = styled.label`
  white-space: pre-line;
  word-break: break-all;
  padding: 15px 60px 15px 15px;
  margin-left: 45px;
  display: block;
  line-height: 1.2;
  transition: color 0.4s;
  
  &.completed {
    color: #d9d9d9;
    text-decoration: line-through;
  }
`;

const Button = styled.button`
  padding: 0;
  border: 0;
  background: none;
  vertical-align: baseline;
  appearance: none;
  outline: none;
  display: none;
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  width: 40px;
  height: 40px;
  margin: auto 0;
  font-size: 30px;
  color: #cc9a9a;
  margin-bottom: 11px;
  transition: color 0.2s ease-out;
  
  &::after {
    content: "×";
  }
  
  &:hover {
    color: #af5b5e;
  }
`;

const ToDoItem = (props) => {
  return (
    <Li>
      <CheckboxInput type="checkbox" checked={props.completed} onChange={props.handleToggleComplete} />
      <Label className={props.completed ? 'completed' : ''}>{props.value}</Label>
      <Button onClick={props.handleDelete} />
    </Li>
  );
};

ToDoItem.propTypes = {
  value: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  handleToggleComplete: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default ToDoItem;
