import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/home';
import Client from './pages/clients';
import Vehicle from './pages/vehicles';


const routes = () => {
      return (
            <BrowserRouter>
            
            <Route component={Home} path='/' />
                  <Route component={Client} path='clients' />
                  <Route component={Vehicle} path='vehicles' />
            </BrowserRouter>
      )
}
