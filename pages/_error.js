/**
 * 에러 코드에 대한 error 페이지 제공
 */
import React, { Component } from "react";

import ErrorPage from "../components/ErrorPage";

export default class RootError extends Component {
  render() {
    const { statusCode } = this.props;
    return <ErrorPage statusCode={statusCode} />;
  }
}
