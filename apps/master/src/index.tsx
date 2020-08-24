import { GlobalLayout } from "@ionia/libs";
import "mobx-react-lite/batchingForReactDom";
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
import App from "./App";
import "./i18n";
import "./index.less";

const apps = [
  {
    name: "Dashboard",
    entry: "//localhost:7001",
    container: "#slave-container",
    activeRule: "/dashboard",
  },
  {
    name: "CMS",
    entry: "//localhost:7004",
    container: "#slave-container",
    activeRule: "/cms",
  },
  {
    name: "User",
    entry: "//localhost:7002",
    container: "#slave-container",
    activeRule: "/user",
  },
  {
    name: "Auth",
    entry: "//localhost:7003",
    container: "#slave-container",
    activeRule: "/auth",
  },
];

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
