import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login/index';
import Logon from '../pages/Logon/index';
import Pratos from '../pages/Pratos/index';
import Restaurantes from '../pages/Restaurante/index';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/cadastrar" component={Logon} />
      <Route path="/pratos" component={Pratos} />
      <Route path="/restaurante" component={Restaurantes} />
    </Switch>
  </BrowserRouter>
);

export default Router;
