import { Html, Head, Main, NextScript } from 'next/document';

import React from 'react';

function Document() {
  return (
    <Html lang='ko'>
      <Head />
      <script
        defer
        src='https://developers.kakao.com/sdk/js/kakao.min.js'
      ></script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
