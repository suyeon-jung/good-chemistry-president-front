import useInit from '../hooks/useInit';
import '../styles/reset.css';

function MyApp({ Component, pageProps }) {
  useInit();
  return <Component {...pageProps} />;
}

export default MyApp;
