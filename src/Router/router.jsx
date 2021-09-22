import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Pratos from '../pages/Pratos';
import Restaurantes from '../pages/Restaurante';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route  path="/pratos" component={Pratos}/>
      <Route  path="/restaurante" component={Restaurantes}/>
    </Switch>
  </BrowserRouter>
);

export default Router;