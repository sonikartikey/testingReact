import React from 'react';
import { Route, Redirect, Switch, Link } from "react-router-dom";

import Parent from './parent';
import Child from './child.js';
import Login from './login.js';
import Test from './test.js';
import Testcase1 from './testcase1.js';
import Lifecycle1 from './lifecycle1.js';
import Axiostest from './axiostest.js';
import Test3 from './functionalcomponent.js';
import Links from './links.js';

const routes = (
  <div>
    <Switch>    
      <Route exact path='/' render={() => (<Redirect to='/links' />)} />
      <Route path='/links' component={Links} />
      <Route path='/login' component={Login} />
      <Route path='/child' component={Child} />
      <Route path='/parent' component={Parent} />
      <Route path='/lifecycle' component={Lifecycle1} />
      <Route path='/incrementCounter' component={Test} />
      <Route path='/functionalComponent' component={Test3} />
      <Route path='/axios' component={Axiostest} />
      <Route path='/edit/:id' component={Test3} />

    </Switch>
  </div>
)
export default routes;