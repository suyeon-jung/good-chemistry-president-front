import { SHARE_TYPE } from '../utils/constants';

const useShare = ({ type, title, content }) => {
  const onClick = () => {
    if (!Object.values(SHARE_TYPE).includes(type))
      throw new Error(
        `[SHARE_TYPE_ERROR] 해당 타입의 공유 기능이 없습니다. type: ${type}`
      );
    if (type === SHARE_TYPE.KAKAO) {
      const { Kakao, location } = window;
      Kakao.Link.sendScrap({
        requestUrl: location.href,
      });
    }
  };

  return { onClick };
};

export default useShare;
