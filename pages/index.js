import Button from '../components/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Button>
        <Link href='/test'>
          <a>시작하기</a>
        </Link>
      </Button>
    </div>
  );
}
