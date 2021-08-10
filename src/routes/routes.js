import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import { Home } from "../pages/index.js";
import { Payment } from "../pages/payment";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Payment} path="/payment" />
    </BrowserRouter>
  );
};
