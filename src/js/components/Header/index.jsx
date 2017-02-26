import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  text-align: center;
  font-size: 2rem;
  text-transform: uppercase;
  color: rgba(175, 47, 47, 0.15);
`;

export default () => (
  <Header>
    <h1>ToDo-List</h1>
  </Header>
);
