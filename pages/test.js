import Header from "../components/question/Header";
import Content from "../components/question/Content";
import Answer from "../components/question/Answer";
import Button from "../components/Button";
import Link from "next/link";

function Test() {
  return (
    <div>
      <Header>진행률</Header>
      <Content>
        현재 사회 전분야에서 여성/ 남성이 받는 차별이 있다고 생각하시나요?
      </Content>
      <Answer>예</Answer>
      <Answer>아니오</Answer>
      <Button>
        <Link href="/loading">
          <a>결과 보기</a>
        </Link>
      </Button>
    </div>
  );
}

export default Test;
