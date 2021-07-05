import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "../pages/Home";
import Details from "../pages/Details"

export default () => (
  <Router>
    <Route exact path="/" component={Home} /> 
    <Route exact path="/details/:id" component={Details} />
  </Router>
)