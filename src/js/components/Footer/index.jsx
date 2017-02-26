import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  text-align: center;
  font-size: 0.7rem;
  color: #bfbfbf;
`;

export default () => (
  <Footer>
    <p>Double-click to edit a todo</p>
    <p>Created by Danil Agafonov, 2017</p>
  </Footer>
);
