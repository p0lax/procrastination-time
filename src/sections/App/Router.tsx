import React from 'react';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Scene from '~src/components/Scene/Scene';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about">1111</Route>
        <Route path="/users">2222</Route>
        <Route path="/scene/:id">
          <Scene />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
