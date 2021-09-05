import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import {
  Home,
  Product_details_page,
  Collection_page,
  Cart_items,
  Wish_list,
  Check_out,
  Dashboard_page
} from "./Pages/Index";

import './App.scss';
import Login_page from './Pages/Login_page';
import NoMatch from './Components/NoMatch/NoMatch';
import { useSelector } from 'react-redux';

const App = () => {
  const admin = useSelector(state => state.admin.admin);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={Product_details_page} />
        <Route exact path="/collection/:collectionName" component={Collection_page} />
        <Route exact path="/login" component={Login_page} />
        <Route exact path="/checkout" component={Check_out} />
        <PrivateRoute exact path="/cart-items" component={Cart_items} />
        <PrivateRoute exact path="/wish-list" component={Wish_list} />
        {
          admin && <PrivateRoute path="/dashboard" component={Dashboard_page} />
        }
        <Route path="*" component={NoMatch} />
      </Switch>
    </Router>
  );
};

export default App;