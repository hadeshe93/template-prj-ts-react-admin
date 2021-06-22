import React from 'react';
import ReactDOM from 'react-dom';
// import Hello from './components/demo/Hello';
import Container from './components/container/index';
import RouterComp from './router/index';

import './styles/index.less';

import 'antd/dist/antd.less';

// 主渲染函数
const render = (Component) => {
  ReactDOM.render(
    <React.StrictMode>
      <Container>
        <Component />
      </Container>
    </React.StrictMode>,
    document.querySelector('#app'),
  );
};

// 渲染挂载
render(RouterComp);
