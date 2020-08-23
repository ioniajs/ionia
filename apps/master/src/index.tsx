import "mobx-react-lite/batchingForReactDom";
import { GlobalLayout } from "@ionia/libs";
import {
  initGlobalState,
  MicroAppStateActions,
  registerMicroApps,
  setDefaultMountApp,
  start,
} from "qiankun";
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.less";

const actions: MicroAppStateActions = initGlobalState({ title: "ionia" });

const apps = [
  {
    name: "dashboard",
    entry: "//localhost:7001",
    container: "#slave-container",
    activeRule: "/dashboard",
  },
  {
    name: "user",
    entry: "//localhost:7002",
    container: "#slave-container",
    activeRule: "/user",
  },
  {
    name: "auth",
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

ReactDOM.render(
  <GlobalLayout globalProps={actions}>
    <App />
  </GlobalLayout>,
  document.getElementById("master-container")
);
