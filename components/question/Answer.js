import styled from "styled-components";
import Image from "next/image";
import stamp from "../../public/stamp.png";
const Answer = ({ children }) => {
  return (
    <Wrapper>
      <Image src={stamp} alt="stamp" width={20} height={20} />
      <Text>{children}</Text>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  display: flex;
  width: 80%;
  margin: 3% auto;
  padding: 0 3%;
  min-height: 54px;
  border-radius: 12px;
  background: rgb(128, 168, 0);
  box-shadow: rgb(128, 168, 0 / 34%) 0px 5px 20px;
  justify-content: start;
  align-items: center;
`;

const Text = styled.h1`
  margin-left: 5px;
`;
export default Answer;
