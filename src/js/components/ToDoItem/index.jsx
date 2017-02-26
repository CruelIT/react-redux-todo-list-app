import React, {PropTypes} from 'react';
import styled from 'styled-components';

const Li = styled.li``;

const ToDoItem = (props) => (
  <Li>{props.value}</Li>
);

ToDoItem.propTypes = {
  value: PropTypes.string.isRequired
};

export default ToDoItem;
