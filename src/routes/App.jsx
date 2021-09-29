import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//containers
import {
  Home,
  CheckOut,
  Information,
  Payment,
  Success,
  NotFound,
} from '../containers';

//components
import Layout from '../components/Layout';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/checkout" component={CheckOut} />
          <Route exact path="/checkout/information" component={Information} />
          <Route exact path="/checkout/payment" component={Payment} />
          <Route exact path="/checkout/success" component={Success} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
