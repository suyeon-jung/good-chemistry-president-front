import styled from "styled-components";

const Content = ({ children }) => {
  return (
    <Wrapper>
      <div>이미지 자리</div>
      <Text>{children}</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 3% 0;
  height: 350px;
  border: 1px solid red;
`;

const Text = styled.div`
  font-size: 18px;
`;
export default Content;
