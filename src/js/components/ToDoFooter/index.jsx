import React, {PropTypes} from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  color: #777;
  padding: 10px 15px;
  text-align: center;
  border-top: 1px solid #e6e6e6;
  height: 20px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);
  }
`;

const Count = styled.span`
  float: left;
  text-align: left;
  position: relative;
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
  position: relative;
  
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
