import { isDev, GlobalLayout } from "@ionia/libs";
import {
  initGlobalState,
  MicroAppStateActions,
  registerMicroApps,
  setDefaultMountApp,
  start,
} from "qiankun";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import apps from "./slave-app";
import App from "./App";
import "./i18n";
import "./index.less";

if (isDev) {
  require("./mocks/index").default.start();
}

const lifeCycles = {
  beforeLoad: [
    (app: any): any => {
      console.log("[LifeCycle] before load %c%s", "color: green;", app.name);
    },
  ],
  beforeMount: [
    (app: any): any => {
      console.log("[LifeCycle] before mount %c%s", "color: green;", app.name);
    },
  ],
  afterUnmount: [
    (app: any): any => {
      console.log("[LifeCycle] after unmount %c%s", "color: green;", app.name);
    },
  ],
};

registerMicroApps(apps, lifeCycles);

setDefaultMountApp("/dashboard");

start();

const actions: MicroAppStateActions = initGlobalState({ title: "ionia", apps });

ReactDOM.render(
  <GlobalLayout globalProps={actions}>
    <Router>
      <App />
    </Router>
  </GlobalLayout>,
  document.getElementById("master-container")
);
