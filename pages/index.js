import Button from "../components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>프로젝트제목</h1>
      <h2>프로젝트제목</h2>
      <h3>프로젝트제목</h3>
      <h4>프로젝트제목</h4>
      <Button>
        <Link href="/test">
          <a>시작하기</a>
        </Link>
      </Button>
    </div>
  );
}
