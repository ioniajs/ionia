import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BasicLayout from "./layouts/BasicLayout";
import BlankLayout from "./layouts/BlankLayout";

interface AppProps {}

const SlaveApp = () => <div id="slave-container"></div>;

const App: React.FC<AppProps> = () => {
  return (
    <Router>
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
    </Router>
  );
};

export default App;
