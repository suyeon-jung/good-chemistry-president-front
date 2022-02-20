import Icon from '../components/Icon';
import useShare from '../hooks/useShare';
import { SHARE_TYPE } from '../utils/constants';

export default function Home() {
  const { onClick } = useShare({ type: SHARE_TYPE.KAKAO });
  return (
    <div>
      <h1>프로젝트제목</h1>
      <h2>프로젝트제목</h2>
      <h3>프로젝트제목</h3>
      <h4>프로젝트제목</h4>
      <Icon onClick={onClick} />
    </div>
  );
}
