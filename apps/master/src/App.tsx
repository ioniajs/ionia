import { BlankLayout, SlaveApp } from "@ionia/libs";
import React from "react";
import { Route, Switch } from "react-router-dom";
import BasicLayout from "./layouts/BasicLayout";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <Switch>
      <Route path="/auth">
        <BlankLayout>
          <SlaveApp />
        </BlankLayout>
      </Route>
      <Route path="/">
        <BasicLayout>
          <SlaveApp />
        </BasicLayout>
      </Route>
    </Switch>
  );
};

export default App;
