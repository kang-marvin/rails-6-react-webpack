import React from "react";
import { Route, Switch  } from "react-router-dom";

import HomePage from "../src/containers/HomePage";
import NotFound from "../src/containers/errors/NotFound"

const Routes = _ => {
  return (
    <div>
      <Switch>
        <Route exact path="/home" component={HomePage} />
        {/* Handle root path */}
        <Route exact path="/" component={HomePage} />
        {/* Error Handling Routes */}
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default Routes;
