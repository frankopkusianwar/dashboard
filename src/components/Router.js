import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home'
import Product from './Product'

const Router = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/product" component={Product} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default Router
