import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  initGlobalState,
  MicroAppStateActions,
  registerMicroApps,
  setDefaultMountApp,
  start,
} from "qiankun";
import App from "./App";
import "./index.less";

const globalState = { application: "ionia" };
const actions: MicroAppStateActions = initGlobalState(globalState);

actions.onGlobalStateChange((state, prev) => {
  console.log("【Master】", state, prev);
});

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

ReactDOM.render(<App />, document.getElementById("master-container"));
