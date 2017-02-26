import React, {PropTypes} from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
`;

const Header = styled.header``;
const Main = styled.section``;

const AppLayout = (props) => (
  <Container>
    <Header>
      {props.input}
    </Header>
    <Main>
      {props.list}
    </Main>
  </Container>
);

AppLayout.propTypes = {
  input: PropTypes.element,
  list: PropTypes.element
};

export default AppLayout;
