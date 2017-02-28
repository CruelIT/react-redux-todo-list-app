import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';
import ToDoContainer from '../../containers/ToDoContainer';

const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  
  @media (min-width: 768px) {
      width: 550px;
  }
  
  &:before, &after {
      display: table;
      content: " ";
  }
`;

export default () => (
  <Container>
    <Header />
    <ToDoContainer />
    <Footer />
  </Container>
);
