/**
 * 공통 레이아웃
 */

import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <Container>
      <Header>대통령 후보 테스트 </Header>
      <Main>{children}</Main>
      <Footer>Footer</Footer>
    </Container>
  );
};

const Container = styled.div`
  background-color: azure;
  max-width: 550px;
  min-width: 550px;
  margin: auto;
  position: fixed;
  right: 0px;
  left: 0px;
  top: 0px;
  bottom: 0px;
  padding: 2% 5%;
  height: 100%;
`;

const Header = styled.header`
  text-align: center;
  height: 5%;
  margin-top: 0;
  margin-bottom: 0;
`;

const Main = styled.main`
  flex: 1;
`;

const Footer = styled.footer`
  height: 10%;
`;
export default Layout;
