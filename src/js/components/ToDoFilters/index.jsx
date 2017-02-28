import React, {PropTypes} from 'react';
import styled from 'styled-components';

const FilterList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  right: 0;
  left: 0;
`;

const FilterItem = styled.li`
  display: inline;
  margin: 3px;
  padding: 3px 7px;
  border: 1px solid transparent;
  border-radius: 3px;
  cursor: pointer;
  
  &:hover {
    border-color: rgba(175, 47, 47, 0.1);
  }
  
  &.selected {
    border-color: rgba(175, 47, 47, 0.2);
  }
`;

const ToDoFilters = (props) => (
  <FilterList>
    <FilterItem className={props.filter === null ? 'selected' : ''} onClick={() => { props.handleSetFilter(null); }}>All</FilterItem>
    <FilterItem className={props.filter === false ? 'selected' : ''} onClick={() => { props.handleSetFilter(false); }}>Active</FilterItem>
    <FilterItem className={props.filter === true ? 'selected' : ''} onClick={() => { props.handleSetFilter(true); }}>Completed</FilterItem>
  </FilterList>
);

ToDoFilters.propTypes = {
  filter: PropTypes.bool,
  handleSetFilter: PropTypes.func.isRequired
};

export default ToDoFilters;
