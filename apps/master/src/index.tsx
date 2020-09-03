import { isDev, MasterApplication } from "@ionia/libs";
import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./i18n";

if (isDev) {
  require("./mocks/index").default.start();
}

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

new MasterApplication(
  (
    <Router>
      <App />
    </Router>
  ),
  apps,
  "/dashboard",
  lifeCycles
).start();
