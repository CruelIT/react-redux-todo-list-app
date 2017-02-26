import React, {PropTypes} from 'react';
import styled from 'styled-components';

const Li = styled.li`
  border-bottom: 1px solid #ededed;
  font-size: 1.5rem;
`;

const ToDoItem = (props) => (
  <Li>{props.value}</Li>
);

ToDoItem.propTypes = {
  value: PropTypes.string.isRequired
};

export default ToDoItem;
