import * as React from "react";
import { hot } from "react-hot-loader/root";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";

const App = () => {
  return (
    <Switch>
      {routes.map((m) => (
        <Route {...m} />
      ))}
    </Switch>
  );
};

export default hot(App);
