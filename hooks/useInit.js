import { useEffect } from 'react';

const useInit = () => {
  useEffect(() => {
    console.log(
      'process.env.NEXT_PUBLIC_KAKAO_API_KEY',
      process.env.NEXT_PUBLIC_KAKAO_API_KEY
    );
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
  }, []);
};

export default useInit;
