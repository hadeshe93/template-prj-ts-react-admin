import React, { Suspense, lazy } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('../pages/home/index'));
const Login = lazy(() => import('../pages/login/index'));

export default function Router() {
  return (
    <HashRouter>
      <Suspense fallback={<div>Loading ...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      </Suspense>
    </HashRouter>
  );
}
