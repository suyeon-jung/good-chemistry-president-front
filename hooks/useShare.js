import { SHARE_TYPE } from '../utils/constants';
import objectToGetParams from '../utils/objectToGetParams';

const config = {
  height: 400,
  width: 550,
  location: 'no',
  toolbar: 'no',
  status: 'no',
  directories: 'no',
  menubar: 'no',
  scrollbars: 'yes',
  resizable: 'no',
  centerscreen: 'yes',
  chrome: 'yes',
};

const hashtags = ['대선', '투표', '테스트'];

const useShare = () => {
  const onClick = (type) => {
    if (!Object.values(SHARE_TYPE).includes(type))
      throw new Error(
        `[SHARE_TYPE_ERROR] 해당 타입의 공유 기능이 없습니다. type: ${type}`
      );
    const {
      Kakao,
      location: { href: url },
    } = window;
    if (type === SHARE_TYPE.KAKAO) {
      Kakao.Link.sendScrap({
        requestUrl: url,
      });
    }
    if (type === SHARE_TYPE.FACEBOOK) {
      window.open(
        'https://www.facebook.com/sharer/sharer.php' +
          objectToGetParams({
            u: url,
            quote: '공유하기',
            hashtag: hashtags,
          }),
        '',
        Object.keys(config)
          .map((key) => `${key}=${config[key]}`)
          .join(', ')
      );
    }
    if (type === SHARE_TYPE.TWITTER) {
      window.open(
        'https://twitter.com/share' +
          objectToGetParams({
            url,
            text: '공유하기',
            hashtags,
          }),
        '',
        Object.keys(config)
          .map((key) => `${key}=${config[key]}`)
          .join(', ')
      );
    }
  };

  return { onClick };
};

export default useShare;
