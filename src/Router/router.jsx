import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login/index';
import Logon from '../pages/Logon/index';
import Pratos from '../pages/Pratos/index';
import Restaurante from '../pages/Restaurante/index';
import Restaurantes from '../pages/Restaurantes';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/cadastrar" component={Logon} />
      <Route path="/pratos" component={Pratos} />
      <Route path="/restaurante" component={Restaurante} />
      <Route path="/restaurantes" component={Restaurantes} />
    </Switch>
  </BrowserRouter>
);

export default Router;
