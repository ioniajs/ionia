import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useLocation } from "react-use";
import BasicLayout from "./layouts/BasicLayout";
import BlankLayout from "./layouts/BlankLayout";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <Router>
      <Switch>
        <Route path="/auth">
          <BlankLayout>
            <div id="slave-container"></div>
          </BlankLayout>
        </Route>
        <Route path="/">
          <BasicLayout>
            <div id="slave-container"></div>
          </BasicLayout>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
