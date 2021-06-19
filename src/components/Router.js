import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home'

const Router = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default Router
