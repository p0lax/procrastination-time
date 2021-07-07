import React from 'react';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function Router() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/about">1111</Route>
          <Route path="/users">2222</Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
