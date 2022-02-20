import { CgChevronLeftO, CgChevronRightO } from "react-icons/cg";
import styled from "styled-components";
const Header = () => {
  return (
    <Wrapper>
      <CgChevronLeftO size={"30"} />
      <h1>진행중(진행률 표시)</h1>
      <CgChevronRightO size={"30"} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
`;
export default Header;
