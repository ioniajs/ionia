import { isDev, MasterApplication } from "@ionia/libs";
import { IoniaApp } from "@ionia/libs/es/core/master-application";
import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./i18n";

if (isDev) {
  require("../mocks").default.start();
}

const apps: IoniaApp<{}>[] = [
  {
    name: "Dashboard",
    entry: "//localhost:7001",
    activeRule: "/dashboard",
  },
  {
    name: "Auth",
    entry: "//localhost:7002",
    activeRule: "/auth",
    hideInMenu: true,
  },
  {
    name: "User",
    entry: "//localhost:7003",
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

const initGlobalState = {
  title: "Ionia",
};

new MasterApplication(
  (
    <Router>
      <App />
    </Router>
  ),
  apps,
  "/dashboard",
  initGlobalState,
  lifeCycles
).start();
