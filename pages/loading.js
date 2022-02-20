import img from "../public/loading.gif";
import Image from "next/image";
import styled from "styled-components";
function Loading() {
  return (
    <Wrapper>
      <Image src={img} alt="loading" width={300} />
      <p>결과를 분석중입니다...</p>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default Loading;
