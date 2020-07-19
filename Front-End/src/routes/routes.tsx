import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Admin from '../components/Admin';
import Home from '../components/Home';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact/>
      <Route component={Admin} path="/admin" exact/>
    </BrowserRouter>
  );

};


export default Routes;