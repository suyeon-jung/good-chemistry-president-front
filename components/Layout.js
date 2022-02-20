/**
 * 공통 레이아웃
 */

import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <>
      <Header>Header</Header>
      <Main>{children}</Main>
      <Footer>Footer</Footer>
    </>
  );
};

const Header = styled.header`
  height: 10%;
`;

const Main = styled.main`
  flex: 1;
`;

const Footer = styled.footer`
  height: 10%;
`;
export default Layout;
