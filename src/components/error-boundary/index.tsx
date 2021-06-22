import React from 'react';

export default class ErrorBoundary extends React.Component {
  logger;

  state = {
    isErrOccurred: false,
    error: null,
    errorInfo: '',
  };

  constructor(props) {
    super(props);

    this.logger = props?.logger || console.log.bind(console);
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
    this.logger.error(error, errorInfo);
  }

  render() {
    const { isErrOccurred, error, errorInfo } = this.state;
    const { FallbackComp, children } = this.props as any;
    return isErrOccurred ? <FallbackComp error={error} errorInfo={errorInfo} /> : children;
  }

  static getDerivedStateFromError(error) {
    // 返回一个对象以更新 state 中对应的数据
    return {
      error,
      isErrOccurred: Boolean(error),
    };
  }
}
