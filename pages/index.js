import Icon from '../components/Icon';
import useShare from '../hooks/useShare';
import { SHARE_TYPE } from '../utils/constants';

export default function Home() {
  const { onClick } = useShare();
  return (
    <div>
      <h1>프로젝트제목</h1>
      <h2>프로젝트제목</h2>
      <h3>프로젝트제목</h3>
      <h4>프로젝트제목</h4>
      <div>
        <Icon onClick={() => onClick(SHARE_TYPE.KAKAO)}>카카오톡</Icon>
      </div>
      <div>
        <Icon onClick={() => onClick(SHARE_TYPE.FACEBOOK)}>페이스북</Icon>
      </div>
      <div>
        <Icon onClick={() => onClick(SHARE_TYPE.TWITTER)}>트위터</Icon>
      </div>
    </div>
  );
}
