/**
 * 최초 실행 포인트
 * Application의 공통 레이아웃 역할
 * Component - 요청한 페이지
 * pageProps - getInitialProps를 통해 내려받은 props
 */
import Router from "next/router";
import NProgress from "nprogress";
import moment from "moment";

import Layout from "../components/Layout";
import "../styles/reset.css";

moment.locale("ko");

Router.events.on("routeChangeStart", (url) => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
