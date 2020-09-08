import ProLayout from "@ant-design/pro-layout";
import * as React from "react";
import { hot } from "react-hot-loader/root";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";

const App = () => {
  return (
    <ProLayout
      route={{ routes }}
      headerRender={false}
      menuRender={false}
      disableContentMargin
    >
      <Switch>
        {routes.map((m) => (
          <Route {...m} />
        ))}
      </Switch>
    </ProLayout>
  );
};

export default hot(App);
