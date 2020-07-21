import React from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import routesConfig from './routesConfig';

export default function Routes() {
  return (
    <BrowserRouter>
      {renderRoutes(routesConfig)}
    </BrowserRouter>
  );
}
