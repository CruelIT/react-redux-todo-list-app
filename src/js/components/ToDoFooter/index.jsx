import React, {PropTypes} from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  color: #777;
  padding: 10px 15px;
  text-align: center;
  border-top: 1px solid #e6e6e6;
  height: 20px;
`;

const Count = styled.span`
  float: left;
  text-align: left;
`;

const ClearButton = styled.button`
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  font-size: 100%;
  vertical-align: baseline;
  font-family: inherit;
  font-weight: inherit;
  color: inherit;
  outline: none;
  float: right;
  line-height: 20px;
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ToDoFooter = (props) => (
  <StyledFooter>
    <Count>{props.count} item left</Count>
    {(() => {
      if (props.showClearButton) {
        return <ClearButton onClick={props.handleClearCompleted}>Clear completed</ClearButton>;
      }
    })()}
  </StyledFooter>
);

ToDoFooter.propTypes = {
  count: PropTypes.number.isRequired,
  showClearButton: PropTypes.bool.isRequired,
  handleClearCompleted: PropTypes.func.isRequired
};

export default ToDoFooter;
