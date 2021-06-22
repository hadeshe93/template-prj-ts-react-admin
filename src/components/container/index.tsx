import React from 'react';
import { ConfigProvider } from 'antd';

export default function Container(props) {
  return <ConfigProvider>{props.children}</ConfigProvider>;
}
