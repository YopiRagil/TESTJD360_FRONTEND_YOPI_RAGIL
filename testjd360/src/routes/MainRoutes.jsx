import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Form from "../pages/Form";
import Pesanan from "../pages/Pesanan";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/form" component={Form} />
        <Route exact path="/pesanan" component={Pesanan} />
      </Switch>
    </BrowserRouter>
  );
};

export default MainRoutes;
