import React, {PropTypes} from 'react';
import styled from 'styled-components';
import ToDoItem from '../ToDoItem';

const Ul = styled.ul``;

const List = (props) => (
  <Ul>
    {props.todos.map((todo, i) => (
      <ToDoItem {...todo} key={i} />
    ))}
  </Ul>
);

List.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default List;
