import Button from '../components/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Button>
        <Link href='/test'>
          <a>μμνκΈ°</a>
        </Link>
      </Button>
    </div>
  );
}
