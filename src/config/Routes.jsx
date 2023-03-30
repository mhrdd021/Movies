import React from "react";
import { Route, Switch } from "react-router-dom";

//Components
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Detail from "../pages/Detail";

const Routes = () => {
  return (
    <Switch>
      <Route path="/:category/search/:keyword" Component={<Catalog />} />
      <Route path="/:category/:id" Component={<Detail />} />
      <Route path="/:category" Component={<Catalog />} />
      <Route path="/" exact Component={<Home />} />
    </Switch>
  );
};

export default Routes;
