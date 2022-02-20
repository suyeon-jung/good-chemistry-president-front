import { CgChevronLeftO, CgChevronRightO } from "react-icons/cg";
import styled from "styled-components";
const Header = ({ children }) => {
  return (
    <Wrapper>
      <Left>
        <CgChevronLeftO size={"30"} />
      </Left>
      <Center>
        <h1>{children}</h1>
      </Center>
      <Right>
        <CgChevronRightO size={"30"} />
      </Right>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  margin: 0 auto;
`;

const Left = styled.div`
  margin-left: 0;
`;
const Right = styled.div`
  margin-right: 0;
`;
const Center = styled.div`
  margin: 0 auto;
`;
export default Header;
