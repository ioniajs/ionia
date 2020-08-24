import React from "react";
import { Route, Switch } from "react-router-dom";
import BasicLayout from "./layouts/BasicLayout";
import BlankLayout from "./layouts/BlankLayout";

import "./App.less";

interface AppProps {}

const SlaveApp = () => <div id="slave-container"></div>;

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
