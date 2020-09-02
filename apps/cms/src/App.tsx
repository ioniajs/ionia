import Column from "@/pages/Column";
import Home from "@/pages/Home";
import { MainLayout } from "@ionia/libs";
import * as React from "react";
import { hot } from "react-hot-loader/root";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";

const App: React.FC = () => {
  return (
    <MainLayout menus={routes}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/column" component={Column} />
      </Switch>
    </MainLayout>
  );
};

export default hot(App);
