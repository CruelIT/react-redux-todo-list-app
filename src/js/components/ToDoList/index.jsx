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
    {props.todos.map((todo, i) => (
      <ToDoItem {...todo} handleToggleComplete={() => { props.handleToggleComplete(i); }} handleDelete={() => { props.handleDelete(i); }} key={i} />
    ))}
  </Ul>
);

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleToggleComplete: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default ToDoList;
