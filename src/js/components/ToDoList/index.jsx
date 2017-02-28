import React, {PropTypes} from 'react';
import styled from 'styled-components';
import ToDoItem from '../ToDoItem';

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ToDoList = (props) => (
  <Ul>
    {props.todos.map((todo) => (
      <ToDoItem {...todo} handleToggleComplete={() => { props.handleToggleComplete(todo.key); }} handleDelete={() => { props.handleDelete(todo.key); }} key={todo.key} />
    ))}
  </Ul>
);

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleToggleComplete: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default ToDoList;
